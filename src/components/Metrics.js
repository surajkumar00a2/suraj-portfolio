'use client';

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const metrics = [
  {
    value: '80%',
    label: 'Reduction in Manual Effort',
    desc: 'Automated core ETL pipelines, eliminating manual reporting cycles.',
    icon: '⚡'
  },
  {
    value: '10x',
    label: 'Faster Data Refresh',
    desc: 'Optimized SQL queries and indexing, reducing dashboard load times.',
    icon: '🚀'
  },
  {
    value: '1TB+',
    label: 'Daily Data Volume',
    desc: 'Architected scalable ingestion layers for high-throughput streams.',
    icon: '📦'
  },
  {
    value: '20+',
    label: 'Business Workflows',
    desc: 'Developed decision-ready analytics for cross-functional teams.',
    icon: '📈'
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-32">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Impact"
          title="Measurable Results"
          description="Quantifying the technical value delivered through automation and architecture."
          align="center"
          stage="04"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-white/10 glass group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl mb-6">{metric.icon}</div>
              <div className="text-5xl font-bold gradient-text mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-zinc-100 mb-3">
                {metric.label}
              </div>
              <div className="text-zinc-500 text-xs leading-relaxed">
                {metric.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
