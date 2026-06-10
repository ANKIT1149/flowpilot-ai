'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaChrome, FaGithub } from 'react-icons/fa';
import Loader from '../loader/Loader';



const OauthButtons = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = () => {
    setLoading(true);
    signIn('google', {redirect: true, callbackUrl: '/sync'});
  };

  return (
    <div className="mt-10 space-y-4">
      <OAuthButton
        onClick={handleLogin}
        icon={<FaChrome size={20} />}
        label="Continue with Google"
        loading={loading}
      />

      <OAuthButton icon={<FaGithub size={20} />} label="Continue with GitHub" />
    </div>
  );
};

function OAuthButton({
  icon,
  label,
  onClick,
  loading,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  loading?: boolean;
}) {
  return (
    <>
      {loading ? (
        <Loader textArea={'Logging In.....'} />
      ) : (
        <button
          className="
        group
        relative
        flex
        w-full
        items-center
        justify-center
        gap-3
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/4
        cursor-pointer
        px-5
        py-4
        text-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.07]
      "
          onClick={onClick}
        >
          {/* Sweep Light */}

          <div
            className="
          absolute
          -left-full
          top-0
          h-full
          w-[50%]
          skew-x-12
          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-all
          duration-1000
          group-hover:left-[150%]
        "
          />

          <span>{icon}</span>

          <span className="font-medium">{label}</span>
        </button>
      )}
    </>
  );
}

export default OauthButtons;
