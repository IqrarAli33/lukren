import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full" />

      <div className="text-center relative z-10">
        <p className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
          // Error 404
        </p>
        <h1 className="text-[10rem] font-black text-white/5 tracking-tighter leading-none select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight -mt-8 mb-4">
          Page not found.
        </h2>
        <p className="text-zinc-500 mb-10 max-w-sm mx-auto leading-relaxed">
          Looks like this route doesn&apos;t exist. Even the best engineers hit dead ends sometimes.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-black font-extrabold rounded-full hover:bg-cyan-400 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
