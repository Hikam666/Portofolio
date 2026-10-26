import React, { useEffect, useState } from 'react';

export default function PixelCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.clickable') ||
        target.closest('[role="button"]')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Center Pixel Box Pointer */}
      <div
        className="fixed pointer-events-none z-[99999] transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`w-3 h-3 bg-stone-900 border border-white shadow-sm transition-all duration-200 ${
            hovering ? 'scale-125 bg-blue-casual' : ''
          }`}
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Outer Hover Ring */}
      <div
        className="fixed pointer-events-none z-[99998] transition-all duration-200 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
          width: hovering ? '44px' : '0px',
          height: hovering ? '44px' : '0px',
          opacity: hovering ? 0.9 : 0,
          borderRadius: '50%',
          border: '2px dashed #3b6fe0',
          backgroundColor: 'rgba(59, 111, 224, 0.08)',
        }}
      />
    </>
  );
}
