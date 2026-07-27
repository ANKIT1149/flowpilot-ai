'use client';

import { motion } from 'framer-motion';

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

export default function FooterParticles() {
  return (
    <div
      className="
pointer-events-none
absolute
inset-0
overflow-hidden
"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.7, 0],

            y: [0, -80, 0],

            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: particle.duration,

            delay: particle.delay,

            repeat: Infinity,

            ease: 'easeInOut',
          }}
          style={{
            left: particle.left,

            top: particle.top,

            width: particle.size,

            height: particle.size,
          }}
          className="
absolute
rounded-full
bg-white/50
blur-[1px]
"
        />
      ))}
    </div>
  );
}
