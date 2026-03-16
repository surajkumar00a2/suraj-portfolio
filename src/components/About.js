'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const stats = [
  { value: '3+', label: 'Years', sublabel: 'Experience' },
  { value: '15+', label: 'Production', sublabel: 'Pipelines' },
  { value: '29', label: 'European', sublabel: 'Markets' },
  { value: '99.9%', label: 'Pipeline', sublabel: 'Uptime' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <SectionHeader
              label="About"
              title="Background"
              description={profile.summary}
            />

            {/* Skills Tags */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'ETL/ELT Pipelines',
                    'Dimensional Modeling',
                    'Data Quality',
                    'Cloud Architecture',
                    'Analytics Engineering',
                    'Revenue Analytics',
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="tech-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass glow-border rounded-xl p-6 text-center group"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-text">{stat.label}</div>
                  <div className="text-xs text-text-muted">{stat.sublabel}</div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
