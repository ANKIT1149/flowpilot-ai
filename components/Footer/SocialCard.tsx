'use client';

import { motion } from 'framer-motion';

export default function SocialCard({ name, icon: Icon }: any) {
  return (
    <motion.a
      href="#"
      whileHover={{
        y: -8,
        scale: 1.08,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 18,
      }}
      className="
group
relative
flex
h-16
w-16
items-center
justify-center
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-2xl
shadow-[0_15px_50px_rgba(0,0,0,.35)]
hover:w-40
transition-all
duration-500
"
    >
      {/* Ambient Glow */}

      <div
        className="
absolute
inset-0
bg-gradient-to-br
from-cyan-400/20
via-transparent
to-purple-400/20
opacity-0
blur-xl
transition-opacity
duration-500
group-hover:opacity-100
"
      />

      {/* Glass Reflection */}

      <motion.div
        initial={{
          x: '-150%',
        }}
        whileHover={{
          x: '200%',
        }}
        transition={{
          duration: 0.8,
        }}
        className="
absolute
inset-y-0
w-12
bg-gradient-to-r
from-transparent
via-white/30
to-transparent
skew-x-12
"
      />

      {/* Icon */}

      <Icon
        className="
relative
z-10
h-6
w-6
text-white/70
transition-all
duration-500
group-hover:text-white
group-hover:rotate-6
group-hover:right-4
"
      />

      {/* Label */}

      <span
        className="
absolute
left-22
whitespace-nowrap
text-sm
font-medium
font-serif
text-white
opacity-0
transition-all
duration-500
group-hover:opacity-100
"
      >
        {name}
      </span>
    </motion.a>
  );
}
