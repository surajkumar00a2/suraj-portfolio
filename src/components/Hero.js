'use client';

import { motion, AnimatePresence } from 'framer-motion';
import profile from '@/data/profile';

const pipelineStages = [
  { label: 'Ingest', icon: '{ }', desc: '500+ sources' },
  { label: 'Transform', icon: 'fn()', desc: 'Python & SQL' },
  { label: 'Model', icon: '⬡', desc: 'Star schema' },
  { label: 'Serve', icon: '◈', desc: 'Dashboards' },
];

export default function Hero({ activeRole, setActiveRole }) {
  return (
    <section className="min-h-[calc(100vh-56px)] flex items-center justify-center py-20 relative z-10 overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-content mx-auto px-6 w-full relative z-20">
        <div className="text-center space-y-12">
          {/* Role Toggle Pills */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            {profile.roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeRole.id === role.id
                    ? 'glass border-primary/50 text-zinc-100 shadow-[0_0_15px_rgba(59,130,246,0.15)] scale-105'
                    : 'border border-white/10 text-zinc-500 hover:border-white/20 hover:text-zinc-300 hover:scale-105'
                }`}
              >
                {activeRole.id === role.id && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 shadow-[0_0_6px_var(--glow-cyan)]" />
                )}
                {role.label}
              </button>
            ))}
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2.5 text-xs font-medium text-zinc-400 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              <span className="text-white">{profile.name.split(' ')[0]}</span>{' '}
              <span className="gradient-text">{profile.name.split(' ')[1]}</span>
            </h1>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeRole.id + '-title'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-xl md:text-2xl font-medium text-zinc-300"
              >
                {activeRole.title}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeRole.id + '-tagline'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              {activeRole.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-8 pb-4"
          >
            <div className="inline-flex items-center gap-0 flex-wrap justify-center">
              {pipelineStages.map((stage, i) => (
                <div key={stage.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.12 }}
                    className="pipeline-node-hero group"
                  >
                    <span className="text-lg font-mono text-primary/60 group-hover:text-primary transition-colors relative z-10">
                      {stage.icon}
                    </span>
                    <span className="text-xs font-medium text-zinc-200 mt-1 relative z-10">
                      {stage.label}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono relative z-10">
                      {stage.desc}
                    </span>
                  </motion.div>
                  {i < pipelineStages.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.7 + i * 0.12, duration: 0.3 }}
                      className="pipeline-connector"
                    >
                      <div className="pipeline-connector-line" />
                      <div className="pipeline-connector-dot" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={activeRole.resumePath}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass border-white/10 text-zinc-200 font-medium text-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full glass border-white/10 text-zinc-200 font-medium text-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
