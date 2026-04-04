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
    <section id="about" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
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
                className="text-slate-400 leading-relaxed -mt-8"
              >
                {activeRole.summary}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg border border-cyan-500/10 bg-cyan-500/[0.02] hover:border-cyan-500/25 hover:shadow-[0_0_25px_rgba(34,211,238,0.04)] transition-all duration-300"
              >
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
