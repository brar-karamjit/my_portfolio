import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./HttpsKeyExchange.css";

const steps = [
  "Bank sends a box with a Blue key inside and a Red lock on top.",
  "User receives the box from the Bank.",
  "User adds a Green lock to the box (now two locks).",
  "User sends the box back to the Bank.",
  "Bank removes the Red lock and sends the box back with the Green lock still on it.",
  "User receives the box with only the Green lock.",
  "User removes the Green lock and retrieves the Blue key.",
  "Both Bank and User now have a copy of the Blue key."
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function HttpsKeyExchange() {
  const userControls = useAnimation();
  const bankControls = useAnimation();
  const boxControls = useAnimation();
  const redLockControls = useAnimation();
  const greenLockControls = useAnimation();
  const innerKeyControls = useAnimation();
  const userKeyControls = useAnimation();
  const bankKeyControls = useAnimation();

  const [stepIndex, setStepIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [replayToken, setReplayToken] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const runSequence = async () => {
      setIsPlaying(true);
      setStepIndex(-1);

      userControls.stop();
      bankControls.stop();
      boxControls.stop();
      redLockControls.stop();
      greenLockControls.stop();
      innerKeyControls.stop();
      userKeyControls.stop();
      bankKeyControls.stop();

      userControls.set({ scale: 1, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" });
      bankControls.set({ scale: 1, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" });
      boxControls.set({ x: 160, opacity: 0, scale: 0.9 });
      redLockControls.set({ opacity: 0, scale: 0.6 });
      greenLockControls.set({ opacity: 0, scale: 0.6 });
      innerKeyControls.set({ opacity: 0, scale: 0.75 });
      userKeyControls.set({ opacity: 0, scale: 0.6, y: 0 });
      bankKeyControls.set({ opacity: 0, scale: 0.6, y: 0 });

      await wait(320);
      if (cancelled) return;

      setStepIndex(0);
      await Promise.all([
        boxControls.start({ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }),
        redLockControls.start({ opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut", delay: 0.1 } }),
        innerKeyControls.start({ opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut", delay: 0.2 } })
      ]);
      if (cancelled) return;

      setStepIndex(1);
      await boxControls.start({ x: -160, transition: { duration: 0.95, ease: "easeInOut" } });
      if (cancelled) return;

      setStepIndex(2);
      await greenLockControls.start({ opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } });
      if (cancelled) return;

      setStepIndex(3);
      await boxControls.start({ x: 160, transition: { duration: 0.95, ease: "easeInOut" } });
      if (cancelled) return;

      setStepIndex(4);
      await redLockControls.start({ opacity: 0, scale: 0.6, transition: { duration: 0.35, ease: "easeInOut" } });
      if (cancelled) return;

      await wait(180);
      if (cancelled) return;

      await boxControls.start({ x: -160, transition: { duration: 0.95, ease: "easeInOut" } });
      if (cancelled) return;

      setStepIndex(5);
      await wait(200);
      if (cancelled) return;

      setStepIndex(6);
      await Promise.all([
        greenLockControls.start({ opacity: 0, scale: 0.6, transition: { duration: 0.35, ease: "easeInOut" } }),
        innerKeyControls.start({ scale: 1.15, transition: { duration: 0.35, ease: "easeOut" } })
      ]);
      if (cancelled) return;

      await wait(220);
      if (cancelled) return;

      setStepIndex(7);
      await Promise.all([
        userKeyControls.start({ opacity: 1, y: -8, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }),
        bankKeyControls.start({ opacity: 1, y: -8, scale: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } }),
        userControls.start({ boxShadow: "0 0 18px rgba(59, 130, 246, 0.35)", transition: { duration: 0.45, ease: "easeInOut" } }),
        bankControls.start({ boxShadow: "0 0 18px rgba(16, 185, 129, 0.35)", transition: { duration: 0.45, ease: "easeInOut" } })
      ]);
      if (cancelled) return;

      await innerKeyControls.start({ opacity: 0.25, scale: 0.95, transition: { duration: 0.35, ease: "easeOut" } });
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
    bankControls,
    boxControls,
    redLockControls,
    greenLockControls,
    innerKeyControls,
    userKeyControls,
    bankKeyControls
  ]);

  const handleReplay = () => {
    if (isPlaying) return;
    setReplayToken((token) => token + 1);
  };

  const currentStep = stepIndex >= 0 ? steps[Math.min(stepIndex, steps.length - 1)] : "Press replay to watch the exchange.";

  return (
    <section className="https-key-exchange">
      <div className="https-content">
        <h2>HTTPS Key Exchange</h2>
        <p>A bite-sized look at how locking a box twice lets the user and bank agree on a shared secret.</p>
      </div>

      <div className="https-stage">
        <motion.div className="node user" animate={userControls}>
          <span className="node-label">User</span>
          <motion.span className="node-key" animate={userKeyControls} role="img" aria-label="User key">
            🔑
          </motion.span>
        </motion.div>

        <motion.div className="node bank" animate={bankControls}>
          <span className="node-label">Bank</span>
          <motion.span className="node-key" animate={bankKeyControls} role="img" aria-label="Bank key">
            🔑
          </motion.span>
        </motion.div>

        <motion.div className="exchange-box" animate={boxControls}>
          <div className="box-shell">
            <motion.span className="box-key" animate={innerKeyControls} role="img" aria-label="Blue key inside box">
              🔑
            </motion.span>
            <motion.svg
              className="lock lock-red"
              animate={redLockControls}
              width="28"
              height="34"
              viewBox="0 0 28 34"
              aria-label="Red lock"
            >
              <rect x="2" y="14" width="24" height="18" rx="4" fill="#991b1b" stroke="#7f1d1d" strokeWidth="2" />
              <path d="M8 14 V9 A6 6 0 0 1 20 9 V14" stroke="#7f1d1d" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="12" y="20" width="4" height="6" rx="1" fill="rgba(0, 0, 0, 0.3)" />
            </motion.svg>
            <motion.svg
              className="lock lock-green"
              animate={greenLockControls}
              width="28"
              height="34"
              viewBox="0 0 28 34"
              aria-label="Green lock"
            >
              <rect x="2" y="14" width="24" height="18" rx="4" fill="#22c55e" stroke="#16a34a" strokeWidth="2" />
              <path d="M8 14 V9 A6 6 0 0 1 20 9 V14" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="12" y="20" width="4" height="6" rx="1" fill="rgba(0, 0, 0, 0.3)" />
            </motion.svg>
          </div>
        </motion.div>
      </div>

      <div className="https-controls">
        <p className="step-caption">{currentStep}</p>
        <button type="button" onClick={handleReplay} disabled={isPlaying} className="replay-button">
          {isPlaying ? "Playing…" : "Replay"}
        </button>
      </div>
    </section>
  );
}

export default HttpsKeyExchange;
