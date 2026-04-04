'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description, align = 'left', stage }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`${alignClasses[align]} max-w-2xl mb-12`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-3"
        style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
      >
        {stage && (
          <span className="font-mono text-[10px] text-slate-500 border border-cyan-500/15 bg-cyan-500/5 rounded px-1.5 py-0.5">
            {stage}
          </span>
        )}
        <span className="font-mono text-xs font-medium text-cyan-400 uppercase tracking-widest">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
