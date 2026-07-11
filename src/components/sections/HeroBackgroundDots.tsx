"use client";

import React, { useEffect, useState } from "react";

interface Dot {
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
}

export const HeroBackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Only generate random coordinates after mounting on the client to avoid hydration mismatch
    const generatedDots = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: dot.left,
            top: dot.top,
            animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
            animationDelay: dot.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
