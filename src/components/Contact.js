import profile from "@/data/profile";

const links = [
  { icon: "✉", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "in", label: "LinkedIn", value: "Suraj Kumar", href: profile.linkedin },
  { icon: "⌘", label: "GitHub", value: "surajkumar00a2", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs font-medium text-accent uppercase tracking-widest mb-3">Get in Touch</p>
        <h2 className="text-[28px] font-bold tracking-tight mb-4">Let's Connect</h2>
        <p className="text-[15.5px] text-zinc-500 dark:text-zinc-400 max-w-[560px] leading-relaxed">
          Open to Senior Data Analyst, Analytics Engineer, and Data Engineer roles — remote, hybrid, or on-site globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[10px] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all no-underline text-zinc-900 dark:text-zinc-50"
            >
              <span className="text-base">{link.icon}</span>
              <span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 block leading-none mb-0.5">{link.label}</span>
                <span className="text-sm font-medium">{link.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}