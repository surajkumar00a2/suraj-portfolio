'use client';

import { motion } from 'framer-motion';

export default function GlowCard({ children, className = '', variant = 'default', delay = 0 }) {
  const variants = {
    default: 'glow-border',
    accent: 'glow-border-accent',
    metric: 'metric-card',
    dashboard: 'dashboard-card',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </motion.div>
  );
}
