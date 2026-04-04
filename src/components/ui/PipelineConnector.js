'use client';

import { motion } from 'framer-motion';

export default function PipelineConnector() {
  return (
    <div className="flex justify-center py-4">
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative w-px h-24 origin-top"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 w-[3px] -translate-x-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent blur-sm" />

        {/* Core line */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-400/40 to-purple-500/0" />

        {/* Flowing energy dot */}
        <motion.div
          initial={{ top: '-4px' }}
          whileInView={{
            top: ['-4px', 'calc(100% + 4px)'],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.3,
          }}
          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
        />

        {/* Second dot offset */}
        <motion.div
          initial={{ top: '-4px' }}
          whileInView={{
            top: ['-4px', 'calc(100% + 4px)'],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: 1.3,
          }}
          className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_2px_rgba(192,132,252,0.5)]"
        />

        {/* Top node dot */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-500/30 border border-cyan-500/50" />

        {/* Bottom node dot */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-500/30 border border-purple-500/50" />
      </motion.div>
    </div>
  );
}
