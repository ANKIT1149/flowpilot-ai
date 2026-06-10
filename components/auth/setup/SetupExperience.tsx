'use client';

import { motion } from 'framer-motion';
import AnimatedOrb from './AnimatedOrb';
import AuroraBackground from '@/components/background/aurora-background';
import FloatingCard from './FloatingCards';
import SetupSteps from './SetupSteps';
import ProgressIndicator from './ProgressIndicator';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { SessionUser } from '@/interface/UserDataInterface';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SetupExperience() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const [text, setText] = useState<string>('Setting up your Account.....');
  const route = useRouter();

  useEffect(() => {
    const fetchDataAndRegister = async () => {
      if (status === 'loading') return;
      try {
        setLoading(true);
        const fetchUser = session?.user as SessionUser | undefined;
        if (!fetchUser?.name) {
          toast.error('No user data found in session. Please log in again.');
          console.log('No session user available', fetchUser);

          return;
        }

        const response = await axios.post('/api/login', {
          name: fetchUser?.name,
          email: fetchUser?.email,
          image: fetchUser?.image,
        });

        if (response.status === 200) {
          toast.success('User data Registered Successfully!');
          setText('Acccount Setup Completed');
          setLoading(false);
          route.push('/');
          console.log('Fetched user data:', fetchUser.name);
          return;
        }

        setError('Failed to register user data. Please try again.');
        setLoading(false);
      } catch (error) {
        console.log('Error during setup:', error);
      }
    };

    fetchDataAndRegister();
  }, [session, status]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712]">
      <AuroraBackground />

      <FloatingCard className="top-32 left-24" title="Secure Authentication" />

      <FloatingCard className="top-40 right-24" title="Encrypted Session" />

      <FloatingCard
        className="bottom-32 left-[80%] -translate-x-1/2"
        title="Profile Created"
      />

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6">
        <AnimatedOrb />

        <motion.h1
          className="
  text-center
  text-6xl
  font-black
  tracking-tight
"
        >
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                y: 80,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: i * 0.2,
                duration: 0.06,
              }}
              className="
        inline-block
        bg-gradient-to-r
        from-white
        via-violet-200
        to-cyan-200
        bg-clip-text
        text-transparent
      "
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-white/60 text-lg text-center max-w-xl"
        >
          Preparing your personalized workspace and securely connecting
          everything behind the scenes.
        </motion.p>

        <SetupSteps />

        <div className="w-full max-w-lg mt-10">
          <ProgressIndicator loading={loading} error={error || ''} />
        </div>
      </div>
    </div>
  );
}
