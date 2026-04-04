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
    <section className="min-h-[calc(100vh-56px)] flex items-center justify-center py-20 relative z-10">
      <div className="max-w-content mx-auto px-6 w-full">
        <div className="text-center space-y-8">
          {/* Role Toggle Pills */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            {profile.roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRole.id === role.id
                    ? 'bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'border border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-400'
                }`}
              >
                {activeRole.id === role.id && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_6px_rgba(34,211,238,0.6)]" />
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
            className="inline-flex items-center gap-2.5 text-sm text-slate-400 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
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
                className="text-lg md:text-xl font-mono text-slate-400"
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
              className="text-slate-400 max-w-xl mx-auto leading-relaxed"
            >
              {activeRole.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-6 pb-2"
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
                    <span className="text-lg font-mono text-cyan-400/60 group-hover:text-cyan-300 transition-colors relative z-10">
                      {stage.icon}
                    </span>
                    <span className="text-xs font-medium text-slate-200 mt-1 relative z-10">
                      {stage.label}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono relative z-10">
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
            className="flex flex-wrap gap-3 justify-center pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-semibold text-sm hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300"
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-cyan-500/25 text-slate-200 font-medium text-sm hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md border border-purple-500/25 text-slate-200 font-medium text-sm hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(167,139,250,0.1)] transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
