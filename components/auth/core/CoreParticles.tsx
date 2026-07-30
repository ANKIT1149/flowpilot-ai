'use client';

import { motion } from 'framer-motion';
import { Props } from './CoreGlow';

const particles = [
  {
    size: 4,
    x: 0,
    y: -150,
    delay: 0,
  },
  {
    size: 3,
    x: 120,
    y: -60,
    delay: 1,
  },
  {
    size: 5,
    x: 140,
    y: 90,
    delay: 2,
  },
  {
    size: 3,
    x: -120,
    y: 80,
    delay: 1.5,
  },
  {
    size: 4,
    x: -140,
    y: -40,
    delay: 3,
  },
];

export default function CoreParticles({active}: Props) {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
            y: [particle.y, particle.y - 15, particle.y],
          }}
          transition={{
            duration: active ? 2 : 5,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: particle.size,
            height: particle.size,
            left: '50%',
            top: '50%',
            x: particle.x,
            y: particle.y,
          }}
          className="
            absolute
            rounded-full
            bg-cyan-300
            shadow-[0_0_20px_rgba(34,211,238,0.9)]
          "
        />
      ))}
    </>
  );
}
