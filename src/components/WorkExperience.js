'use client';

import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const experiences = [
  {
    company: 'MapUp Inc.',
    location: 'California, USA (Remote)',
    role: 'Analytics Engineer / Data Engineer',
    period: 'Oct 2021 - Jul 2025',
    description: 'TollGuru — world\'s largest toll intelligence platform, B2B SaaS',
    highlights: [
      {
        metric: '89% -> 96%',
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
    <section id="experience" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Work History"
          description="Professional experience building data products at scale."
          align="center"
        />

        <div className="mt-12 space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border border-border p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pb-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-bold text-zinc-100">{exp.company}</h3>
                  <p className="text-primary font-medium mt-1">{exp.role}</p>
                  <p className="text-sm text-zinc-500 mt-1">{exp.description}</p>
                </div>
                <div className="mt-3 md:mt-0 md:text-right flex-shrink-0">
                  <span className="text-sm text-zinc-300">{exp.period}</span>
                  <p className="text-xs text-zinc-600">{exp.location}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-md border border-border"
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-lg font-bold text-primary">{highlight.metric}</span>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{highlight.label}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-snug">{highlight.detail}</p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="tech-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
