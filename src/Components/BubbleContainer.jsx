import React, { useEffect, useState } from "react";

const random = (min, max) => Math.random() * (max - min) + min;

const colors = ["#EF4444", "#22C55E", "#FACC15"]; 

const Bubble = ({ size, left, duration, delay, color }) => {
  return (
    <div
      className="absolute rounded-full opacity-80"
      style={{
        width: size + "px",
        height: size + "px",
        left: left + "px",
        bottom: 0,
        backgroundColor: color,
        animation: `riseDiagonal ${duration}s linear forwards`,
        animationDelay: delay + "s",
      }}
    />
  );
};

const BubbleContainer = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const newBubble = {
          id: Date.now(),
          size: random(6, 12),
          left: random(0, 280),
          duration: random(5, 9),
          delay: 0,
          color: colors[Math.floor(random(0, colors.length))],
        };
        const filtered = prev.filter((b) => Date.now() - b.id < 10000);
        return [...filtered, newBubble];
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-[400px]  overflow-hidden ">
      {bubbles.map((b) => (
        <Bubble key={b.id} {...b} />
      ))}

      <style>{`
        @keyframes riseDiagonal {
          0% {
            opacity: 0.8;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-120px, -350px) scale(0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default BubbleContainer;
