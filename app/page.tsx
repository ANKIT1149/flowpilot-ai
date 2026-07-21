export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />

      {/* Left Glow */}
      <div className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Right Glow */}
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <section className="relative z-10 pt-40">
        {/* Hero */}
      </section>
    </main>
  );
}