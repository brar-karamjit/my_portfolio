import React, { useEffect, useState } from "react";
import { Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import { listBlogPosts } from "../../utils/blog";
import "./Blog.css";

const statusVariant = {
  loading: {
    message: "Loading posts…",
    render: () => (
      <div className="blog-loading-state" aria-live="polite">
        <Spinner animation="border" role="status" size="sm" />
        <span>Loading posts…</span>
      </div>
    )
  },
  error: {
    message: "Unable to load posts right now.",
    render: (message) => (
      <div className="blog-error-state" role="alert">
        <p>{message}</p>
      </div>
    )
  },
  empty: {
    message: "No posts yet.",
    render: () => (
      <div className="blog-empty-state">
        <p>Blog posts will appear here once you add markdown files to <code>src/content/blog</code>.</p>
      </div>
    )
  }
};

function formatDate(dateInput) {
  if (!dateInput) {
    return null;
  }

  const value = new Date(dateInput);
  if (Number.isNaN(value.valueOf())) {
    return null;
  }

  return value.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function BlogIndex() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const result = await listBlogPosts();

        if (!isMounted) {
          return;
        }

        if (result.length === 0) {
          setStatus("empty");
          setPosts([]);
        } else {
          setStatus("ready");
          setPosts(result);
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }

        setErrorMessage(err.message || "Unable to load posts.");
        setStatus("error");
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const renderStatus = () => {
    if (status === "ready") {
      return null;
    }

    const variant = statusVariant[status];
    if (!variant) {
      return null;
    }

    return variant.render(status === "error" ? errorMessage : variant.message);
  };

  return (
    <section className="blog-page">
      <Particle />

      <Container className="blog-posts home-surface">
        <p className="section-eyebrow">Welcome</p>
        <h1 className="blog-heading">Stories of platform engineering</h1>
        

        {renderStatus()}

        {status === "ready" && (
          <>
            <p className="section-eyebrow">Latest Posts</p>
            <div className="blog-card-grid">
              {posts.map((post) => {
                const formattedDate = formatDate(post.date || post.isoDate);
                return (
                  <Card as={Link} to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                    <Card.Body>
                      <div className="blog-card-meta">
                        <span className="blog-card-topic">{post.topic || formattedDate || "New"}</span>
                        <span className="blog-card-time">{post.readingTimeLabel}</span>
                      </div>
                      <Card.Title className="blog-card-title">{post.title}</Card.Title>
                      {formattedDate && <div className="blog-card-date">{formattedDate}</div>}
                      <Card.Text className="blog-card-summary">{post.description}</Card.Text>
                      {post.tags.length > 0 && (
                        <div className="blog-card-tags">
                          {post.tags.map((tag) => (
                            <span key={tag} className="blog-card-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </Container>
    </section>
  );
}

export default BlogIndex;
