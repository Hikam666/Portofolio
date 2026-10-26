import React, { useEffect, useState } from 'react';

export default function SparkleTrail() {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    const symbols = ['✦', '✧', '★', '◆', '·'];

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 60) return; // throttle to 60ms
      lastTime = now;

      const newSparkle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: Math.random() > 0.5 ? '#3b6fe0' : '#f59e0b',
      };

      setSparkles((prev) => [...prev.slice(-12), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99997] overflow-hidden">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle font-mono select-none"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            color: s.color,
          }}
        >
          {s.symbol}
        </span>
      ))}
    </div>
  );
}
