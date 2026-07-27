'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa6';

import { MessageCircle } from 'lucide-react';
import SocialCard from './SocialCard';

const socials = [
  {
    name: 'GitHub',
    icon: FaGithub,
    color: 'cyan',
    href: '#',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    color: 'red',
    href: '#',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    color: 'blue',
    href: '#',
  },
  {
    name: 'X',
    icon: FaTwitter,
    color: 'white',
    href: '#',
  },
  {
    name: 'Discord',
    icon: MessageCircle,
    color: 'purple',
    href: '#',
  },
];

export default function FooterSocials() {
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
      }}
      className="flex items-center justify-center gap-8"
    >
      {socials.map((social) => (
        <SocialCard key={social.name} {...social} />
      ))}
    </motion.div>
  );
}
