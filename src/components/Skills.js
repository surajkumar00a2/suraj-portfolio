import skillGroups from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs font-medium text-accent uppercase tracking-widest mb-3">Capabilities</p>
        <h2 className="text-[28px] font-bold tracking-tight mb-4">Technical Skills</h2>
        <p className="text-[15.5px] text-zinc-500 dark:text-zinc-400 max-w-[560px] leading-relaxed">
          Focused on the full analytics engineering lifecycle — from raw ingestion to decision-ready outputs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {skillGroups.map((group) => (
            <div key={group.domain} className="p-7 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[10px] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all">
              <span className="text-lg text-accent block mb-3.5">{group.icon}</span>
              <h3 className="text-[15px] font-bold mb-4">{group.domain}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-[13.5px] text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}