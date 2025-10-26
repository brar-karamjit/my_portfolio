import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiActivity } from "react-icons/fi";
import "./PingAnimation.css";

function PingAnimation() {
  return (
    <section className="ping-animation-section">
      <Container>
        <Row className="justify-content-center ping-intro text-center">
          <Col md={8} lg={6}>
            <FiActivity size={42} color="#ffc14f" aria-hidden="true" />
            <h2 className="ping-animation-title mt-3">ICMP Ping Round Trip</h2>
            <p className="ping-animation-subtitle">
              Visualize the Internet Control Message Protocol (ICMP) echo request and
              echo reply that power the familiar <code>ping</code> command.
            </p>
          </Col>
        </Row>
        <Row className="g-4 justify-content-center text-start">
          <Col md={4} sm={10}>
            <div className="ping-card">
              <h3>Origin Host</h3>
              <p>
                Crafts an ICMP echo request and wraps it in an IP packet aimed at the
                remote host.
              </p>
              <p>
                Records the send timestamp so the round-trip time (RTT) can be measured
                once the reply returns.
              </p>
            </div>
          </Col>
          <Col md={4} sm={10}>
            <div className="ping-card">
              <h3>Destination Host</h3>
              <p>
                Receives the echo request, validates it, and swaps the source/destination
                fields before generating an echo reply.
              </p>
              <p>
                Sends the response back immediately, making ping ideal for quick
                reachability checks.
              </p>
            </div>
          </Col>
        </Row>
        <div className="ping-track-wrapper">
          <div className="ping-track-labels">
            <span>Echo Request</span>
            <span>Echo Reply</span>
          </div>
          <div className="ping-track">
            <span className="ping-packet" aria-hidden="true" />
            <span className="ping-packet response" aria-hidden="true" />
          </div>
        </div>
        <ul className="ping-step-list">
          <li>
            <div>
              <div className="ping-step-title">ICMP Echo Request Crafted</div>
              <p>
                The origin host encapsulates an ICMP echo request inside an IP packet
                and hands it to the network stack for delivery.
              </p>
            </div>
          </li>
          <li>
            <div>
              <div className="ping-step-title">Packet Traverses the Network</div>
              <p>
                Routers move the packet hop-by-hop based on the destination IP address
                while ICMP stays untouched for the receiving host.
              </p>
            </div>
          </li>
          <li>
            <div>
              <div className="ping-step-title">Echo Reply Generated</div>
              <p>
                The destination host mirrors the payload back in an ICMP echo reply,
                switching IP source and destination in the process.
              </p>
            </div>
          </li>
          <li>
            <div>
              <div className="ping-step-title">Round-Trip Time Measured</div>
              <p>
                When the reply arrives, the origin host subtracts the stored send time
                from the current time to compute latency.
              </p>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}

export default PingAnimation;
