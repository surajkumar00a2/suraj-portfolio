import projects from "@/data/projects";

function ProjectCard({ project }) {
  return (
    <article className="p-7 md:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[14px] hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <h3 className="text-[18px] font-bold tracking-[-0.3px] leading-snug">{project.title}</h3>
        <div className="flex gap-2 flex-shrink-0">
          {project.liveDashboard && (
            <a
              href={project.liveDashboard}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-md whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-md whitespace-nowrap hover:opacity-80 transition-opacity"
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <p className="text-[14.5px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 max-w-[600px]">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-[11.5px] px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            {tech}
          </span>
        ))}
      </div>
      <ul className="space-y-1.5">
        {project.achievements.map((achievement, i) => (
          <li key={i} className="text-[13.5px] text-zinc-500 dark:text-zinc-400 flex items-start gap-2">
            <span className="font-mono text-xs text-accent mt-[2px] flex-shrink-0">↳</span>
            {achievement}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs font-medium text-accent uppercase tracking-widest mb-3">Work</p>
        <h2 className="text-[28px] font-bold tracking-tight mb-4">Featured Projects</h2>
        <p className="text-[15.5px] text-zinc-500 dark:text-zinc-400 max-w-[560px] leading-relaxed">
          Production-grade data engineering projects demonstrating end-to-end pipelines, cloud architecture, and analytics engineering.
        </p>
        <div className="grid gap-5 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}