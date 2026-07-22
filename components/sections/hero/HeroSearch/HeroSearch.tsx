"use client";

import { GlassPannel } from "@/components/ui/Glass/GlassPannel";
import { HeroSearchInput } from "./HeroSearchInputs";
import { HeroSearchButton } from "./HeroSearchButtons";


// import { HeroSearchButton } from "./HeroSearchButton";
// import { HeroSearchInput } from "./HeroSearchInput";
// import { HeroSearchSuggestions } from "./HeroSearchSuggestions";

export function HeroSearch() {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <GlassPannel
        className="
          group
          relative
          overflow-visible
          rounded-[32px]
          transition-all
          duration-500
        "
      >
        <div
          className="
            flex
            min-h-[92px]
            items-center
            gap-4
            p-4
          "
        >
           <HeroSearchInput />

          <HeroSearchButton /> 
        </div>
      </GlassPannel>

      {/* <HeroSearchSuggestions /> */}
    </div>
  );
}