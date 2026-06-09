'use client';

import { FaChrome, FaGithub } from 'react-icons/fa';

const OauthButtons = () => {
  return (
    <div className="mt-10 space-y-4">
      <OAuthButton icon={<FaChrome size={20} />} label="Continue with Google" />

      <OAuthButton icon={<FaGithub size={20} />} label="Continue with GitHub" />
    </div>
  );
};

function OAuthButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
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
        px-5
        py-4
        text-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.07]
      "
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
  );
}

export default OauthButtons;
