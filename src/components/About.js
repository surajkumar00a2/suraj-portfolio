'use client';

import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Production Pipelines' },
  { value: '500+', label: 'Data Sources' },
  { value: '29', label: 'European Markets' },
];

export default function About({ activeRole }) {
  return (
    <section id="about" className="py-32">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <SectionHeader
              label="About"
              title="Background"
              stage="01"
            />
            <AnimatePresence mode="wait">
              <motion.p
                key={activeRole.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-zinc-400 text-lg leading-relaxed"
              >
                {activeRole.summary}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 glass hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
