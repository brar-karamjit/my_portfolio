import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineLock } from "react-icons/ai";
import "./HttpsKeyExchange.css";

function HttpsKeyExchange() {
  return (
    <section className="https-animation-section">
      <Container className="https-animation-container">
        <Row className="justify-content-center text-center mb-4">
          <Col md={8} lg={6}>
            <h2 className="https-animation-title">HTTPS Key Exchange</h2>
            <p className="https-animation-subtitle">
              A quick look at how clients and servers agree on an encrypted connection.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={4} sm={10} className="https-card client shadow-sm">
            <h3>Client</h3>
            <p>
              Requests the secure session, validates the certificate, and encrypts a
              fresh session key with the server&apos;s public key.
            </p>
          </Col>
          <Col md={4} sm={10} className="https-animation-track my-4 my-md-0">
            <div className="https-arrow client-to-server">
              <span className="https-arrow-label">Public Key</span>
              <div className="https-arrow-line">
                <span className="https-packet" />
              </div>
            </div>

            <div className="https-center-icon">
              <AiOutlineLock className="https-lock" aria-hidden="true" />
              <span className="https-center-caption">TLS Handshake</span>
            </div>

            <div className="https-arrow server-to-client">
              <span className="https-arrow-label">Encrypted Message</span>
              <div className="https-arrow-line">
                <span className="https-packet" />
              </div>
            </div>
          </Col>
          <Col md={4} sm={10} className="https-card server shadow-sm">
            <h3>Server</h3>
            <p>
              Shares its certificate and public key, then decrypts the session key to
              establish symmetric encryption for the connection.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HttpsKeyExchange;
