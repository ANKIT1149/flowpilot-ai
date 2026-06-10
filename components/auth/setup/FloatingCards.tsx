"use client";

interface Props {
  title: string;
  className?: string;
}

export default function FloatingCard({
  title,
  className,
}: Props) {
  return (
    <div
      className={`
        absolute
        z-10
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-5
        py-3
        text-white/70
        ${className}
      `}
    >
      {title}
    </div>
  );
}