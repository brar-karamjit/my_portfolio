import { parse as parseYaml } from "yaml";

const markdownContext = safeRequireContext();
const contextKeys = markdownContext ? markdownContext.keys() : [];
const postCache = new Map();

function safeRequireContext() {
  if (typeof require === "undefined" || typeof require.context !== "function") {
    return null;
  }

  try {
    return require.context("../content/blog", false, /\.md$/);
  } catch (_err) {
    return null;
  }
}

function keyToSlug(key) {
  return key.replace(/^\.\//, "").replace(/\.md$/, "");
}

function stripBom(text) {
  if (text && text.charCodeAt(0) === 0xfeff) {
    return text.slice(1);
  }

  return text;
}

function parseFrontMatter(raw) {
  const cleanSource = stripBom(raw);
  const delimiterPattern = /^---\s*$/;
  const lines = cleanSource.split(/\r?\n/);

  if (lines.length === 0 || !delimiterPattern.test(lines[0].trim())) {
    return { data: {}, content: cleanSource };
  }

  let closingIndex = -1;

  for (let index = 1; index < lines.length; index += 1) {
    if (delimiterPattern.test(lines[index].trim())) {
      closingIndex = index;
      break;
    }
  }

  if (closingIndex === -1) {
    return { data: {}, content: cleanSource };
  }

  const yamlSource = lines.slice(1, closingIndex).join("\n");
  const contentLines = lines.slice(closingIndex + 1);

  if (contentLines.length > 0 && contentLines[0].trim() === "") {
    contentLines.shift();
  }

  const content = contentLines.join("\n");

  if (!yamlSource.trim()) {
    return { data: {}, content };
  }

  try {
    const parsed = parseYaml(yamlSource) || {};

    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return { data: parsed, content };
    }

    throw new Error("Front matter must evaluate to an object.");
  } catch (error) {
    throw new Error(`Unable to parse front matter: ${error.message}`);
  }
}

async function readMarkdown(key) {
  if (!markdownContext) {
    throw new Error("Markdown context is unavailable");
  }

  const resource = markdownContext(key);
  const assetUrl = typeof resource === "string" ? resource : resource.default;

  const response = await fetch(assetUrl);
  if (!response.ok) {
    throw new Error(`Unable to load blog post: ${assetUrl}`);
  }

  return response.text();
}

function computeReadingMinutes(content) {
  const words = content.trim().split(/\s+/).filter(Boolean);
  const averageWordsPerMinute = 225;
  const minutes = Math.max(1, Math.round(words.length / averageWordsPerMinute));
  return minutes;
}

function deriveDescription(frontMatter, content) {
  if (typeof frontMatter.description === "string" && frontMatter.description.trim()) {
    return frontMatter.description.trim();
  }

  if (typeof frontMatter.summary === "string" && frontMatter.summary.trim()) {
    return frontMatter.summary.trim();
  }

  const firstParagraph = content
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.replace(/\n/g, " ").trim())
    .find(Boolean);

  if (firstParagraph) {
    const maxLength = 220;
    return firstParagraph.length > maxLength
      ? `${firstParagraph.slice(0, maxLength - 1).trim()}…`
      : firstParagraph;
  }

  return "";
}

function normalizeTags(tags) {
  if (!tags) {
    return [];
  }

  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag));
  }

  return [String(tags)];
}

function normalizePost(slug, frontMatter, content) {
  const readingMinutes = computeReadingMinutes(content);
  const normalizedDate = frontMatter.date ? new Date(frontMatter.date) : null;

  return {
    slug,
    title: frontMatter.title || slug,
    topic: frontMatter.topic || "",
    tags: normalizeTags(frontMatter.tags),
    cover: frontMatter.cover || frontMatter.hero || null,
    date: frontMatter.date || null,
    isoDate: normalizedDate && !Number.isNaN(normalizedDate.valueOf())
      ? normalizedDate.toISOString()
      : null,
    draft: Boolean(frontMatter.draft),
    description: deriveDescription(frontMatter, content),
    content,
    readingMinutes,
    readingTimeLabel: frontMatter.readingTime
      ? String(frontMatter.readingTime)
      : `${readingMinutes} min read`
  };
}

async function loadPostForKey(key) {
  const slug = keyToSlug(key);

  if (postCache.has(slug)) {
    return postCache.get(slug);
  }

  const raw = await readMarkdown(key);
  const { data, content } = parseFrontMatter(raw);
  const post = normalizePost(slug, data, content);
  postCache.set(slug, post);
  return post;
}

export async function listBlogPosts() {
  if (contextKeys.length === 0) {
    return [];
  }

  const posts = await Promise.all(contextKeys.map(loadPostForKey));

  return posts
    .filter((post) => !post.draft)
    .sort((a, b) => {
      const aTime = a.isoDate ? Date.parse(a.isoDate) : 0;
      const bTime = b.isoDate ? Date.parse(b.isoDate) : 0;
      return bTime - aTime;
    });
}

export async function getBlogPost(slug) {
  if (!slug) {
    return null;
  }

  if (postCache.has(slug)) {
    return postCache.get(slug);
  }

  const key = contextKeys.find((candidate) => keyToSlug(candidate) === slug);

  if (!key) {
    return null;
  }

  return loadPostForKey(key);
}

export function getKnownSlugs() {
  return contextKeys.map(keyToSlug);
}
