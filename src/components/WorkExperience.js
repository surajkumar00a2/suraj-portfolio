'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const experiences = [
  {
    company: 'MapUp Inc.',
    location: 'California, USA (Remote)',
    role: 'Analytics Engineer / Data Engineer',
    period: 'Oct 2021 – Jul 2025',
    description: 'TollGuru — world\'s largest toll intelligence platform, B2B SaaS',
    // Top 3 most impressive achievements only - scannable
    highlights: [
      {
        metric: '89% → 96%',
        label: 'Dataset Accuracy',
        detail: 'Architected automated data quality framework eliminating 60% manual review across 500+ sources in 29 markets',
      },
      {
        metric: '45%',
        label: 'Query Speed Improvement',
        detail: 'Optimized SQL performance for enterprise clients Lyft & FirstFleet through indexing & query restructuring',
      },
      {
        metric: '15+',
        label: 'Production Pipelines',
        detail: 'Built Python web scrapers (BeautifulSoup, Selenium) ingesting from 500+ government portals, PDFs, APIs',
      },
    ],
    skills: ['Python', 'SQL', 'AWS', 'Airflow', 'PostgreSQL', 'dbt', 'Selenium'],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Work History"
          description="Professional experience building data products at scale."
          align="center"
        />

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -2 }}
                className="glass glow-border rounded-xl p-6 md:p-8 relative overflow-hidden group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-border/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-100">{exp.company}</h3>
                      {/* <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        Current
                      </span> */}
                    </div>
                    <p className="text-primary font-medium text-lg">{exp.role}</p>
                    <p className="text-slate-400 text-sm mt-1">{exp.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <span className="text-slate-300 font-medium">{exp.period}</span>
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                {/* Key Achievements - Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="glass rounded-lg p-4 border-l-2 border-primary hover:border-l-4 transition-all"
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">{highlight.metric}</span>
                        <span className="text-xs text-slate-400 uppercase tracking-wider">{highlight.label}</span>
                      </div>
                      <p className="text-sm text-slate-400 leading-snug">{highlight.detail}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-background-light text-slate-300 border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
