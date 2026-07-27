import FooterBackground from "./FooterBackground";
import FooterGlowDivider from "./FooterGlowDivider";
import FooterLogo from "./FooterLogo";
import FooterMouseGlow from "./FooterMouseGlow";
import FooterNavigation from "./FooterNavigation";
import FooterParticles from "./FooterParticles";
import FooterShimmer from "./FooterShimmer";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#02">
          <FooterBackground />
          <FooterParticles />
          <FooterShimmer />
          <FooterMouseGlow />
      {/* Background Layers */}
      {/* <FooterBackground />
      <FooterParticles />
      <FooterShimmer />
      <FooterNoise />
      <FooterMouseGlow /> */}

      {/* Content */}
      <div className="relative z-10">
        <FooterGlowDivider />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-12 lg:px-8">
          <FooterLogo />
          <div className="mt-16">
            <FooterNavigation />
          </div>

          <div className="mt-14">
            <FooterSocials />
          </div>

          <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-white/60">
              Built for creators. Powered by AI.
            </p>

            <p className="text-xs tracking-[0.3em] uppercase text-white/30">
              © 2026 CreatorLens AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}