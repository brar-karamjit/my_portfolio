import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import userImage from "../../Assets/user.png";
import bankImage from "../../Assets/bank.png";
import "./PingAnimation.css";

const steps = [
  "Origin host wraps an ICMP echo request in an IP packet and launches it across the network.",
  "Destination host receives the echo request and prepares an ICMP echo reply.",
  "Echo reply mirrors the payload back, travelling all the way to the origin host.",
  "Origin host measures the round-trip time using the saved send timestamp."
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const REQUEST_START = -260;
const REQUEST_END = 260;
const REPLY_START = 260;
const REPLY_END = -260;

const USER_GLOW = "rgba(59, 130, 246, 0.45)";
const SERVER_GLOW = "rgba(124, 207, 255, 0.45)";
const REQUEST_GLOW = "rgba(251, 191, 36, 0.75)";
const REPLY_GLOW = "rgba(96, 165, 250, 0.75)";

function PingAnimation() {
  const userControls = useAnimation();
  const serverControls = useAnimation();
  const requestControls = useAnimation();
  const replyControls = useAnimation();
  const latencyControls = useAnimation();

  const [stepIndex, setStepIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [replayToken, setReplayToken] = useState(0);

  const startIdleLoop = useCallback((controls) => {
    controls.set({ scale: 1, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" });
    controls.start({
      scale: [1, 1.03, 1],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    });
  }, []);

  const pulseNode = useCallback(
    async (controls, glow) => {
      controls.stop();
      controls.set({ scale: 1, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" });
      await controls.start({
        scale: [1, 1.07, 1],
        boxShadow: [
          "0 0 0 rgba(0, 0, 0, 0)",
          `0 0 26px ${glow}`,
          "0 0 0 rgba(0, 0, 0, 0)"
        ],
        transition: {
          duration: 0.55,
          ease: "easeInOut",
          times: [0, 0.55, 1]
        }
      });
      startIdleLoop(controls);
    },
    [startIdleLoop]
  );

  useEffect(() => {
    let cancelled = false;

    const runSequence = async () => {
      setIsPlaying(true);
      setStepIndex(-1);

      userControls.stop();
      serverControls.stop();
      requestControls.stop();
      replyControls.stop();
      latencyControls.stop();

      userControls.set({ scale: 1, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" });
      serverControls.set({ scale: 1, boxShadow: "0 0 0 rgba(0, 0, 0, 0)" });
      requestControls.set({
        x: REQUEST_START,
        opacity: 0,
        scale: 0.82,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      });
      replyControls.set({
        x: REPLY_START,
        opacity: 0,
        scale: 0.82,
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
      });
      latencyControls.set({ opacity: 0, y: 12 });

      startIdleLoop(userControls);
      startIdleLoop(serverControls);

      await wait(450);
      if (cancelled) return;

      // Step 0: Request leaves origin host
      setStepIndex(0);
      await Promise.all([
        pulseNode(userControls, USER_GLOW),
        requestControls.start({
          opacity: 1,
          x: REQUEST_END,
          scale: 1,
          boxShadow: [
            "0 0 0 rgba(0, 0, 0, 0)",
            `0 0 26px ${REQUEST_GLOW}`,
            "0 0 0 rgba(0, 0, 0, 0)"
          ],
          transition: {
            duration: 1.8,
            ease: [0.6, 0.05, 0.2, 1],
            boxShadow: {
              duration: 1.8,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }
          }
        })
      ]);
      if (cancelled) return;

      await wait(350);
      if (cancelled) return;

      // Step 1: Destination processes request
      setStepIndex(1);
      await pulseNode(serverControls, SERVER_GLOW);
      if (cancelled) return;

      await wait(400);
      if (cancelled) return;

      // Step 2: Reply heads back
      setStepIndex(2);
      await Promise.all([
        pulseNode(serverControls, SERVER_GLOW),
        replyControls.start({
          opacity: 1,
          x: REPLY_END,
          scale: 1,
          boxShadow: [
            "0 0 0 rgba(0, 0, 0, 0)",
            `0 0 26px ${REPLY_GLOW}`,
            "0 0 0 rgba(0, 0, 0, 0)"
          ],
          transition: {
            duration: 1.8,
            ease: [0.6, 0.05, 0.2, 1],
            boxShadow: {
              duration: 1.8,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }
          }
        })
      ]);
      if (cancelled) return;

      await wait(320);
      if (cancelled) return;

      // Step 3: Origin records RTT
      setStepIndex(3);
      await Promise.all([
        pulseNode(userControls, USER_GLOW),
        latencyControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        })
      ]);
      if (cancelled) return;

      setIsPlaying(false);
    };

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [
    replayToken,
    userControls,
    serverControls,
    requestControls,
    replyControls,
    latencyControls,
    startIdleLoop,
    pulseNode
  ]);

  const handleReplay = () => {
    if (isPlaying) return;
    setReplayToken((token) => token + 1);
  };

  const currentStep =
    stepIndex >= 0 ? steps[Math.min(stepIndex, steps.length - 1)] : "Press replay to watch the packet journey.";

  return (
    <section className="ping-animation">
      <div className="ping-content">
        <h2>ICMP Ping Round Trip</h2>
        <p>
          Follow an ICMP echo request as it leaves an origin host, touches the destination, and races back as an echo reply to measure latency.
        </p>
      </div>

      <div className="ping-stage">
        <div className="ping-stage-gradient" aria-hidden="true" />
        <div className="ping-table" aria-hidden="true" />

        <div className="ping-track ping-track-top" />
        <div className="ping-track ping-track-bottom" />

        <motion.div className="ping-node ping-node-origin" animate={userControls}>
          <img src={userImage} alt="Origin host" className="ping-node-icon" draggable="false" />
          <span className="ping-node-label">Origin Host</span>
        </motion.div>

        <motion.div className="ping-node ping-node-destination" animate={serverControls}>
          <img src={bankImage} alt="Destination host" className="ping-node-icon" draggable="false" />
          <span className="ping-node-label">Destination Host</span>
        </motion.div>

        <motion.div className="ping-packet ping-packet-request" animate={requestControls}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" fill="#facc15" stroke="#f97316" strokeWidth="2" />
          </svg>
          <span className="ping-packet-label">Echo Request</span>
        </motion.div>

        <motion.div className="ping-packet ping-packet-reply" animate={replyControls}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
          </svg>
          <span className="ping-packet-label">Echo Reply</span>
        </motion.div>

        <motion.div className="ping-rtt" animate={latencyControls}>
          Simulated RTT: 24 ms
        </motion.div>
      </div>

      <div className="ping-controls">
        <p className="ping-step-caption">{currentStep}</p>
        <button type="button" className="ping-replay-button" onClick={handleReplay} disabled={isPlaying}>
          {isPlaying ? "Playing…" : "Replay"}
        </button>
      </div>

      <div className="ping-grid">
        <div className="ping-info-card">
          <h3>Origin Host Responsibilities</h3>
          <p>
            Generates an ICMP echo request, embeds it inside an IPv4 or IPv6 packet, and starts a timer to measure the round trip.
          </p>
          <p>
            Keeps the payload small and predictable (often a repeating byte pattern) so the reply can be validated on arrival.
          </p>
        </div>
        <div className="ping-info-card">
          <h3>Destination Host Actions</h3>
          <p>
            Validates the incoming request, updates the IP source and destination, and crafts an ICMP echo reply with the same payload.
          </p>
          <p>
            Sends the response immediately, which is why ping is handy for quick reachability and latency checks.
          </p>
        </div>
        <div className="ping-info-card">
          <h3>Reading the Results</h3>
          <p>
            Packet loss or unusually long round-trip times often indicate congestion, rate limiting, or routing anomalies along the path.
          </p>
          <p>
            Most ping tools repeat the exchange multiple times to surface jitter, minimum/maximum latency, and average RTT.
          </p>
        </div>
      </div>

      <ul className="ping-step-list">
        <li>
          <div className="ping-step-title">Echo Request Crafted</div>
          <p>
            The origin host builds an ICMP type&nbsp;8 (echo request) message, wraps it in IP, and sends it toward the destination host.
          </p>
        </li>
        <li>
          <div className="ping-step-title">Network Transit</div>
          <p>
            Routers forward the packet hop-by-hop using the destination IP address without altering the ICMP payload.
          </p>
        </li>
        <li>
          <div className="ping-step-title">Echo Reply Created</div>
          <p>
            The destination swaps source and destination addresses, converts the ICMP message to type&nbsp;0 (echo reply), and returns the payload.
          </p>
        </li>
        <li>
          <div className="ping-step-title">Round-Trip Measured</div>
          <p>
            Once the reply arrives, the origin host subtracts the stored send timestamp to compute latency and display the RTT.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default PingAnimation;
