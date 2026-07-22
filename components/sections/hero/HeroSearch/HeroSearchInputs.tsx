'use client';

import { useRef, useState } from 'react';
import { Link2 } from 'lucide-react';
import { InputPlaceholder } from './HeroSearchPlaceHolder';
import { InputField } from './HeroSearchField';
import { InputSpotlight } from './InputSpotlight';
import { useMotionValue } from 'framer-motion';

// import { InputField } from "./InputField";
// import { InputClipboard } from "./InputClipboard";
// import { InputValidation } from "./InputValidation";
// import { InputClear } from "./InputClear";
// import { InputSpotlight } from "./InputSpotlight";

export function HeroSearchInput() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }
  return (
    <div
      onClick={() => inputRef.current?.focus()}
      onMouseMove={handleMouseMove}
      className="relative flex flex-1 cursor-text items-center"
    >
      <InputSpotlight
        mouseX={mouseX}
        mouseY={mouseY}
      />

      {/* Icon */}
      <div className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
        <Link2 className="h-5 w-5 text-zinc-300" />
      </div>

      {/* Input Workspace */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="relative flex-1 ml-5 cursor-text"
      >
        <InputPlaceholder value={value} />

        <InputField ref={inputRef} value={value} onChange={setValue} />
      </div>

      {/* <InputClipboard />

      <InputValidation value={value} /> */}

      {/* <InputClear
        value={value}
        onClear={() => setValue("")}
      /> */}
    </div>
  );
}
