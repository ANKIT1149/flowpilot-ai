// src/components/login/TrustSection.tsx
'use client';
import { motion } from 'framer-motion';
import { TrustItem } from './TrustItem';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
};

export const TrustSection = () => {
  const items = [
    "AI Generated Content Assets",
    "Multi Platform Publishing",
    "Smart Scheduling Engine",
    "Enterprise Grade Security"
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-4"
    >
      {items.map((text, i) => (
        <TrustItem key={i} text={text} variants={itemVariants} />
      ))}
    </motion.div>
  );
};