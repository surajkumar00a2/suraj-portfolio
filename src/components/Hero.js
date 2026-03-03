import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 md:pt-44 md:pb-28 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1.5px] bg-accent block" />
          <span className="font-mono text-[13px] text-accent">
            Available for opportunities
          </span>
        </div>
        <h1 className="text-4xl md:text-[52px] font-bold tracking-tight leading-[1.1] mb-2">
          {profile.name}
        </h1>
        <p className="text-lg md:text-[22px] text-zinc-500 dark:text-zinc-400 mb-5">
          {profile.title}
        </p>
        <p className="text-[17px] text-zinc-500 dark:text-zinc-400 max-w-[520px] leading-relaxed mb-9">
          {profile.tagline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#projects" className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md bg-accent text-white text-[13.5px] font-semibold hover:bg-accent-hover transition-colors">
            View Projects →
          </a>
          <a href={profile.resumePath} target="_blank" rel="noopener" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-[13.5px] font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            Resume
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-[13.5px] font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}