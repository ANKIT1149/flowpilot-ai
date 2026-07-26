"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  "Authenticating",
  "Creating Account",
  "Syncing Preferences",
  "Finalizing Setup",
];

export default function SetupSteps() {
  return (
    <div className="mt-12 space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * .5,
          }}
          className="
            flex
            items-center
            gap-3
            text-white/80
          "
        >
          <CheckCircle2
            size={18}
            className="text-cyan-400"
          />
          {step}
        </motion.div>
      ))}
    </div>
  );
}