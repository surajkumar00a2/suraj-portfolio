'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile';
import TerminalTyping from './ui/TerminalTyping';

const techStack = [
  'Python', 'SQL', 'AWS', 'Airflow', 'PostgreSQL', 'dbt', 'Docker', 'Git'
];

const terminalLines = [
  '29 European markets data validated...',
  'Lyft & FirstFleet queries optimized...',
  '15+ production ETL pipelines active...',
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-56px)] flex items-center py-16">
      <div className="max-w-content mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 text-sm text-zinc-500"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Available for opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
                {profile.name.split(' ')[0]}{' '}
                <span className="text-primary">{profile.name.split(' ')[1]}</span>
              </h1>
              <p className="text-lg font-mono text-primary/80">
                {profile.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-400 max-w-lg leading-relaxed"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-sm text-zinc-600"
            >
              Previously @ MapUp (TollGuru) · 29 European markets · Enterprise clients incl. Lyft & FirstFleet
            </motion.p>

            {/* Key numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-8 py-4 border-y border-border"
            >
              {[
                { value: '3+', label: 'Years' },
                { value: '15+', label: 'Pipelines' },
                { value: '500+', label: 'Sources' },
                { value: '96%', label: 'Accuracy' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-semibold text-zinc-100">{stat.value}</div>
                  <div className="text-xs text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-zinc-900 font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-zinc-300 font-medium text-sm hover:border-primary/30 transition-colors"
              >
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-zinc-300 font-medium text-sm hover:border-primary/30 transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Terminal */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <TerminalTyping
                lines={terminalLines}
                typingSpeed={40}
                lineDelay={600}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
