'use client';

import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`${alignClasses[align]} max-w-2xl mb-12`}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-medium text-primary uppercase tracking-widest mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
