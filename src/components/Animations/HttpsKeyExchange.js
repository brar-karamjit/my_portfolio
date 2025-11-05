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

const BOX_POSITION_BANK = 100;
const BOX_POSITION_USER = -200;

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
      boxControls.set({ x: BOX_POSITION_BANK, y: 0, opacity: 0, scale: 1 });
      redLockControls.set({ opacity: 0, scale: 0.6, rotate: 0, y: 0 });
      greenLockControls.set({ opacity: 0, scale: 0.6, rotate: 0, y: 0 });
      innerKeyControls.set({ opacity: 0, scale: 0.75, filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" });
      userKeyControls.set({ opacity: 0, scale: 0.6, y: 0, filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))" });
      bankKeyControls.set({ opacity: 0, scale: 0.6, y: 0, filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))" });

      await wait(500);
      if (cancelled) return;

      // Step 0: Bank sends box with red lock
      setStepIndex(0);
      await Promise.all([
        boxControls.start({ 
          opacity: 1, 
          scale: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" } 
        }),
        redLockControls.start({ 
          opacity: 1, 
          scale: 1,
          rotate: [10, -5, 0],
          y: [20, -5, 0],
          transition: { type: "spring", stiffness: 200, damping: 18, delay: 0.3 } 
        }),
        innerKeyControls.start({ 
          opacity: 1, 
          scale: 1, 
          transition: { type: "spring", stiffness: 200, damping: 20, delay: 0.4 } 
        })
      ]);
      if (cancelled) return;

      await wait(800);
      if (cancelled) return;

      // Step 1: Box moves to User
      setStepIndex(1);
      await boxControls.start({ 
        x: BOX_POSITION_USER,
        transition: { 
          duration: 1.5, 
          ease: [0, 0, 1, 1] // Perfectly linear cubic bezier
        } 
      });
      if (cancelled) return;

      await wait(500);
      if (cancelled) return;

      // Step 2: User adds green lock
      setStepIndex(2);
      await greenLockControls.start({ 
        opacity: 1, 
        scale: 1,
        rotate: [-10, 5, 0],
        y: [20, -5, 0],
        transition: { type: "spring", stiffness: 220, damping: 18 } 
      });
      if (cancelled) return;

      await wait(700);
      if (cancelled) return;

      // Step 3: Box returns to Bank
      setStepIndex(3);
      await boxControls.start({ 
        x: BOX_POSITION_BANK,
        transition: { 
          duration: 1.5, 
          ease: [0, 0, 1, 1] // Perfectly linear cubic bezier
        } 
      });
      if (cancelled) return;

      await wait(500);
      if (cancelled) return;

      // Step 4: Bank removes red lock
      setStepIndex(4);
      await redLockControls.start({ 
        opacity: 0, 
        scale: 0.8,
        rotate: 25,
        y: -20,
        transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] } 
      });
      if (cancelled) return;

      await wait(600);
      if (cancelled) return;

      // Box returns to User
      await boxControls.start({ 
        x: BOX_POSITION_USER,
        transition: { 
          duration: 1.5, 
          ease: [0, 0, 1, 1] // Perfectly linear cubic bezier
        } 
      });
      if (cancelled) return;

      await wait(500);
      if (cancelled) return;

      // Step 5: Pause at User
      setStepIndex(5);
      await wait(400);
      if (cancelled) return;

      // Step 6: User removes green lock and reveals key
      setStepIndex(6);
      await Promise.all([
        greenLockControls.start({ 
          opacity: 0, 
          scale: 0.8,
          rotate: -25,
          y: -20,
          transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] } 
        }),
        innerKeyControls.start({ 
          scale: 1.3,
          filter: "drop-shadow(0 0 16px rgba(59, 130, 246, 0.8))",
          transition: { type: "spring", stiffness: 180, damping: 15 } 
        })
      ]);
      if (cancelled) return;

      await wait(600);
      if (cancelled) return;

      // Step 7: Both parties show keys with glow
      setStepIndex(7);
      await Promise.all([
        userKeyControls.start({ 
          opacity: 1, 
          y: -16, 
          scale: 1,
          filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.9))",
          transition: { type: "spring", stiffness: 180, damping: 14 } 
        }),
        bankKeyControls.start({ 
          opacity: 1, 
          y: -16, 
          scale: 1,
          filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.9))",
          transition: { type: "spring", stiffness: 180, damping: 14, delay: 0.15 } 
        }),
        userControls.start({ 
          scale: 1.05,
          boxShadow: "0 0 32px rgba(59, 130, 246, 0.6), 0 0 64px rgba(59, 130, 246, 0.3)", 
          transition: { duration: 0.8, ease: "easeInOut" } 
        }),
        bankControls.start({ 
          scale: 1.05,
          boxShadow: "0 0 32px rgba(156, 163, 175, 0.6), 0 0 64px rgba(156, 163, 175, 0.3)", 
          transition: { duration: 0.8, ease: "easeInOut" } 
        })
      ]);
      if (cancelled) return;

      await innerKeyControls.start({ 
        opacity: 0.15, 
        scale: 1.1,
        transition: { duration: 0.5, ease: "easeOut" } 
      });
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
        {/* User - Person Icon */}
        <motion.div className="node user" animate={userControls}>
          <svg width="80" height="80" viewBox="0 0 80 80" className="node-svg">
            {/* Head */}
            <circle cx="40" cy="28" r="12" fill="none" stroke="#3b82f6" strokeWidth="2.5"/>
            {/* Shoulders/Body */}
            <path 
              d="M 20 65 Q 20 48, 40 48 Q 60 48, 60 65" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="node-label">User</span>
          <motion.div className="node-key-display" animate={userKeyControls}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="key-svg">
              <circle cx="8" cy="8" r="5" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="12" y="6" width="10" height="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="17" y="4" width="2" height="2" fill="#1e40af"/>
              <rect x="17" y="8" width="2" height="2" fill="#1e40af"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Bank - Building Icon */}
        <motion.div className="node bank" animate={bankControls}>
          <svg width="80" height="80" viewBox="0 0 80 80" className="node-svg">
            {/* Roof/Triangle */}
            <path 
              d="M 10 35 L 40 15 L 70 35" 
              fill="none" 
              stroke="#9ca3af" 
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Base */}
            <rect x="15" y="35" width="50" height="4" fill="none" stroke="#9ca3af" strokeWidth="2.5"/>
            {/* Pillars */}
            <rect x="20" y="39" width="6" height="20" fill="none" stroke="#9ca3af" strokeWidth="2"/>
            <rect x="32" y="39" width="6" height="20" fill="none" stroke="#9ca3af" strokeWidth="2"/>
            <rect x="44" y="39" width="6" height="20" fill="none" stroke="#9ca3af" strokeWidth="2"/>
            <rect x="56" y="39" width="6" height="20" fill="none" stroke="#9ca3af" strokeWidth="2"/>
            {/* Foundation */}
            <rect x="15" y="59" width="50" height="6" fill="none" stroke="#9ca3af" strokeWidth="2.5"/>
          </svg>
          <span className="node-label">Bank</span>
          <motion.div className="node-key-display" animate={bankKeyControls}>
            <svg width="24" height="24" viewBox="0 0 24 24" className="key-svg">
              <circle cx="8" cy="8" r="5" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="12" y="6" width="10" height="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="17" y="4" width="2" height="2" fill="#1e40af"/>
              <rect x="17" y="8" width="2" height="2" fill="#1e40af"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Box - Rounded Rectangle */}
        <motion.div className="exchange-box" animate={boxControls}>
          <svg width="120" height="80" viewBox="0 0 120 80" className="box-svg">
            <rect x="2" y="2" width="116" height="76" rx="12" fill="#fde68a" stroke="#f59e0b" strokeWidth="3"/>
          </svg>
          
          {/* Blue Key Inside Box */}
          <motion.div className="box-key" animate={innerKeyControls}>
            <svg width="28" height="28" viewBox="0 0 28 28" className="key-svg">
              <circle cx="10" cy="10" r="6" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="15" y="8" width="11" height="4" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
              <rect x="21" y="6" width="2" height="2" fill="#1e40af"/>
              <rect x="21" y="10" width="2" height="2" fill="#1e40af"/>
            </svg>
          </motion.div>

          {/* Red Lock */}
          <motion.div className="lock lock-red" animate={redLockControls}>
            <svg width="28" height="34" viewBox="0 0 28 34" className="lock-svg">
              <path d="M8 14 V9 A6 6 0 0 1 20 9 V14" stroke="#991b1b" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <rect x="2" y="14" width="24" height="18" rx="4" fill="#dc2626" stroke="#7f1d1d" strokeWidth="2"/>
              <circle cx="14" cy="23" r="2" fill="#7f1d1d"/>
            </svg>
          </motion.div>

          {/* Green Lock */}
          <motion.div className="lock lock-green" animate={greenLockControls}>
            <svg width="28" height="34" viewBox="0 0 28 34" className="lock-svg">
              <path d="M8 14 V9 A6 6 0 0 1 20 9 V14" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <rect x="2" y="14" width="24" height="18" rx="4" fill="#22c55e" stroke="#15803d" strokeWidth="2"/>
              <circle cx="14" cy="23" r="2" fill="#15803d"/>
            </svg>
          </motion.div>
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
