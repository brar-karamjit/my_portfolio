import React, { useState, useEffect, useRef } from "react";
import "./Xray.css";

function Xray() {
  const [isActive, setIsActive] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!isActive || !canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const columns = Math.floor(width / 20);
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random heights above screen
    }

    const draw = () => {
      // Fade out the previous frame to create trails
      // Use destination-out to make pixels transparent again over time
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);
      
      // Reset to default for drawing text
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = "rgba(0, 255, 0, 0.37)"; // Super light green text
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly after it has crossed the screen
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      ctx.clearRect(0, 0, width, height);
    };
  }, [isActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid triggering if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

      // Activate on holding the 'x' key (case-insensitive)
      try {
        if ((e.key && e.key.toLowerCase() === 'x') || e.code === 'KeyX') {
          setIsActive(true);
        }
      } catch (err) {
        // Fallback: do nothing on unexpected event shapes
      }
    };

    const handleKeyUp = (e) => {
      try {
        if ((e.key && e.key.toLowerCase() === 'x') || e.code === 'KeyX') {
          setIsActive(false);
        }
      } catch (err) {
        // ignore
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("xray-active");
      document.documentElement.classList.add("xray-active");
    } else {
      document.body.classList.remove("xray-active");
      document.documentElement.classList.remove("xray-active");
    }
  }, [isActive]);

  return (
    <>
      <canvas ref={canvasRef} className="xray-canvas" />
      <button 
        className="xray-button"
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
        title="Hold 'X' key or click and hold"
      >
        X-RAY (Hold X)
      </button>
    </>
  );
}

export default Xray;
