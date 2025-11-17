import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost } from "../../utils/blog";
import "./Blog.css";

function formatDateLabel(dateInput) {
  if (!dateInput) {
    return null;
  }

  const value = new Date(dateInput);
  if (Number.isNaN(value.valueOf())) {
    return null;
  }

  return value.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      setStatus("loading");
      setErrorMessage("");

      try {
        const result = await getBlogPost(slug);

        if (!isMounted) {
          return;
        }

        if (!result || result.draft) {
          setStatus("missing");
          setPost(null);
          return;
        }

        setPost(result);
        setStatus("ready");
      } catch (err) {
        if (!isMounted) {
          return;
        }

        setErrorMessage(err.message || "Unable to load this post.");
        setStatus("error");
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (post) {
      const originalTitle = document.title;
      document.title = `${post.title} · Blog`;
      return () => {
        document.title = originalTitle;
      };
    }

    return undefined;
  }, [post]);

  const renderContent = () => {
    if (status === "loading") {
      return (
        <div className="blog-loading-state" aria-live="polite">
          <Spinner animation="border" role="status" size="sm" />
          <span>Loading post…</span>
        </div>
      );
    }

    if (status === "error") {
      return (
        <div className="blog-error-state" role="alert">
          <p>{errorMessage}</p>
          <p>
            <Link to="/blog">Return to the blog index</Link>
          </p>
        </div>
      );
    }

    if (status === "missing") {
      return (
        <div className="blog-error-state" role="alert">
          <p>We could not find that post.</p>
          <p>
            <Link to="/blog">Browse all posts</Link>
          </p>
        </div>
      );
    }

    if (!post) {
      return null;
    }

    const formattedDate = formatDateLabel(post.date || post.isoDate);

    return (
      <article className="blog-post-article">
        <header className="blog-post-header">
          {post.topic && <p className="blog-post-topic">{post.topic}</p>}
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            {formattedDate && <span>{formattedDate}</span>}
            <span>{post.readingTimeLabel}</span>
          </div>
          {post.tags.length > 0 && (
            <ul className="blog-post-tags">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </header>

        <ReactMarkdown
          className="blog-post-content"
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    );
  };

  return (
    <section className="blog-post-page">
      <Container className="blog-post-container">
        {renderContent()}
        <footer className="blog-post-footer">
          <Link to="/blog" className="blog-back-link">
            ← Back to all posts
          </Link>
        </footer>
      </Container>
    </section>
  );
}

export default BlogPost;
