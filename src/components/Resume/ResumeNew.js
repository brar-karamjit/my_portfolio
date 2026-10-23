import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Karamjit_Brar.pdf";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../Home/Home.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = viewportWidth > 1536
    ? 1.6
    : viewportWidth > 1280
    ? 1.45
    : viewportWidth > 1024
    ? 1.25
    : viewportWidth > 900
    ? 1.05
    : viewportWidth > 768
    ? 0.9
    : viewportWidth > 600
    ? 0.8
    : 0.68;

  return (
    <>
      <Particle />
      <section className="resume-section" id="resume">
        <Container className="resume-hero">
          <Row className="align-items-center resume-hero-row">
            <Col md={7} className="resume-hero-text">
              <span className="section-eyebrow">Résumé</span>
              <h1 className="resume-title">Experience snapshot</h1>
              <p className="resume-subtitle">
                Platform engineer building Kubernetes infrastructure, delivery pipelines, and observability
                across AWS, GCP, and on-prem vSphere.
              </p>
              <div className="resume-actions">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-action-btn resume-action-primary"
                >
                  <AiOutlineDownload aria-hidden="true" />
                  <span>Download CV</span>
                </a>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-action-btn"
                >
                  <AiOutlineEye aria-hidden="true" />
                  <span>Open in new tab</span>
                </a>
              </div>
            </Col>
            <Col md={5} className="resume-hero-highlights">
              <div className="resume-highlights home-surface">
                <p className="resume-highlights-title">Highlights</p>
                <ul className="resume-highlights-list">
                  <li>Platform Engineer at Questrade — Kubernetes, Terraform, CI/CD across AWS, GCP, and vSphere</li>
                  <li>Self-service platforms with guardrails: VM provisioning time down 90%, DNS provisioning from 2 days to minutes</li>
                  <li>High-availability Prometheus, Thanos, and Grafana on hybrid EKS, deployed through Argo CD GitOps</li>
                  <li>AWS WorkSpaces cost optimization — $6,000/month saved</li>
                  <li>CKA, AWS Solutions Architect and Developer Associate; 3-node GitOps homelab on Oracle Cloud</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="resume-preview home-surface">
          
          <div className="resume-pdf-wrapper">
            <Document
              file={pdf}
              className="resume-document"
              loading={<p className="resume-loading">Loading résumé…</p>}
            >
              <Page pageNumber={1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ResumeNew;
