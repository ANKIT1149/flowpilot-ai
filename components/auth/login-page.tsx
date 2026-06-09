import AuthLayout from '@/components/auth/AuthLayout';
import HeroContent from '@/components/auth/hero/HeroContent';
import AICore from './core/AiCore';
import LoginCard from './login-card';
import FloatingMetrics from './metrics/FlowMetrics';

export default function LoginPage() {
  return (
    <AuthLayout>
      <div
        className="
          mx-auto
          grid
          min-h-screen
          max-w-[1600px]
          grid-cols-1
          gap-12
          px-6
          md:px-10
          lg:grid-cols-2
          lg:px-16
        "
      >
        {/* Left Section */}
        <div className="flex items-center">
          <HeroContent />
        </div>

        {/* Right Section */}
        <div className="relative flex items-center justify-center overflow-visible z-10">
          <div className="z-100">
            <FloatingMetrics />
          </div>
          {/* AI Core Layer */}
          <div
            className="
              pointer-events-none
              absolute
              right-[800px]
              top-1/2
              -translate-y-1/2
              opacity-90
            "
          >
            <AICore />
          </div>

          {/* Login Card */}
          <div className="relative">
            <LoginCard />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
