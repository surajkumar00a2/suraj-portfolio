'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile';
import SectionHeader from './ui/SectionHeader';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Production Pipelines' },
  { value: '500+', label: 'Data Sources' },
  { value: '29', label: 'European Markets' },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              label="About"
              title="Background"
              description={profile.summary}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
