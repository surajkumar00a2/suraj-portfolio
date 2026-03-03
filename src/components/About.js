import profile from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs font-medium text-accent uppercase tracking-widest mb-3">About</p>
        <h2 className="text-[28px] font-bold tracking-tight mb-4">Background</h2>
        <p className="text-[16px] text-zinc-500 dark:text-zinc-400 max-w-[640px] leading-[1.8]">
          {profile.summary}
        </p>
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 max-w-[640px]">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="p-4 md:p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[10px]">
              <div className="text-2xl md:text-[28px] font-bold tracking-tight leading-none">{stat.value}</div>
              <div className="text-[11px] md:text-[12.5px] text-zinc-400 dark:text-zinc-500 mt-1.5 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}