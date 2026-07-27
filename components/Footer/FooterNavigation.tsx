"use client";

import { motion } from "framer-motion";
import FooterDockItem from "./FooterDockItem";

const links = [
  "Home",
  "Features",
  "Pricing",
  "Analytics",
  "Roadmap",
  "Docs",
  "Blog",
  "Contact",
];

export default function FooterNavigation() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        mt-20
      "
    >
      {/* Glow Divider */}
      <div
        className="
          absolute
          -top-12
          left-1/2
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/70
          to-transparent
        "
      />

      {/* Divider Glow */}
      <div
        className="
          absolute
          -top-12
          left-1/2
          h-12
          w-[50%]
          -translate-x-1/2
          bg-cyan-400/20
          blur-2xl
        "
      />


      {/* Floating Dock */}
      <div
        className="
          group
          relative
          flex
          flex-wrap
          items-center
          justify-center
          gap-8
          rounded-4xl
          border-3
          border-amber-900
          bg-transparent
          px-5
          py-4
          backdrop-blur-3xl
          shadow-inner
          shadow-blue-300
        "
      >

        {/* Inner Reflection */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-24
            rounded-t-4xl
            bg-linear-to-b
            from-cyan-900
            to-transparent
            opacity-40
          "
        />


        {/* Animated Border Glow */}
        <motion.div
          animate={{
            opacity: [0.2,0.5,0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-4xl
            border-2
            border-cyan-400/20
          "
        />


        {links.map((link) => (
          <FooterDockItem
            key={link}
            label={link}
          />
        ))}

      </div>
    </motion.div>
  );
}