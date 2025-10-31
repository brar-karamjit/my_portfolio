import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const evaluateVisibility = useCallback(() => {
    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollPosition = window.scrollY + window.innerHeight;
    const threshold = 48;
    const shouldShow =
      scrollPosition >= scrollHeight - threshold || scrollHeight <= clientHeight + 1;

    setIsVisible(shouldShow);
  }, []);

  useEffect(() => {
    evaluateVisibility();
    window.addEventListener("scroll", evaluateVisibility, { passive: true });
    window.addEventListener("resize", evaluateVisibility);

    return () => {
      window.removeEventListener("scroll", evaluateVisibility);
      window.removeEventListener("resize", evaluateVisibility);
    };
  }, [evaluateVisibility]);

  useEffect(() => {
    const raf = window.requestAnimationFrame(evaluateVisibility);
    return () => window.cancelAnimationFrame(raf);
  }, [evaluateVisibility, location.pathname]);

  useEffect(() => {
    document.body.style.setProperty(
      "--footer-safe-area",
      isVisible ? "80px" : "0px",
    );

    return () => {
      document.body.style.setProperty("--footer-safe-area", "0px");
    };
  }, [isVisible]);

  useEffect(() => {
    return () => {
      document.body.style.removeProperty("--footer-safe-area");
    };
  }, []);

  const footerClassName = `footer ${isVisible ? "footer--visible" : "footer--hidden"}`;

  return (
    <Container fluid className={footerClassName}>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Karamjit Brar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/brar-karamjit"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/karamjitbrar/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
