'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FooterMouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 30,
        mass: 0.5,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-400/[0.08]
        blur-[120px]
      "
    />
  );
}
