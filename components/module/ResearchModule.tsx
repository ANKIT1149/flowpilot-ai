"use client";

import { SearchCheck } from "lucide-react";

import FeatureModule from "./FeatureModule";

export default function ResearchModule() {
  return (
    <FeatureModule
      position="top"
      icon={SearchCheck}
      title="Research Engine"
      subtitle="AI researches your niche before generating strategic insights."
      badge="Research"
      items={[
        "Niche Detection",
        "Competitor Mapping",
        "Content Gap Scanner",
      ]}
    />
  );
}