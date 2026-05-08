import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        animate={{ x: position.x - 4, y: position.y - 4 }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{ x: position.x - 16, y: position.y - 16 }}
        transition={{ type: 'spring', damping: 20, stiffness: 240, mass: 0.35 }}
      />
    </>
  );
};

export default CustomCursor;
