'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const experiences = [
  {
    company: 'MapUp Inc.',
    location: 'California, USA (Remote)',
    role: 'Analytics Engineer / Data Engineer',
    period: '2021 – Present',
    description: 'TollGuru — world\'s largest toll intelligence platform, B2B SaaS',
    highlights: [
      'Raised dataset accuracy from 89% to 96% by architecting an automated data quality framework — schema validation, anomaly detection, null-checks — eliminating 60% of manual review overhead across 500+ data sources spanning 29 European markets.',
      'Cut average SQL query response times by 45% through advanced indexing strategies, join restructuring, and query plan analysis; directly improved dashboard load speed for enterprise clients Lyft and FirstFleet.',
      'Engineered 15+ Python web scrapers (BeautifulSoup, Selenium) to ingest data from government portals, PDFs, and REST APIs across 500+ sources in 29 countries — converting fully manual data acquisition workflows into automated, real-time pipelines.',
      'Delivered a distance-based tolling model that improved accuracy by 40% and performance by 10%, directly supporting acquisition of 3 new enterprise clients.',
      'Maintained AWS infrastructure at 99.2% uptime (Lambda, S3, CloudWatch) while leading a 5-person analyst team and performing weekly geospatial validation of client-facing map deliverables using QGIS/GeoPandas.',
      'Built a multi-country Google News scraper with YAML-based configuration to monitor real-time toll policy changes across all 29 markets simultaneously, serving as a lightweight automated data catalog.',
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background */}
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
                className="glass glow-border rounded-xl p-8 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{exp.company}</h3>
                    <p className="text-[#3b82f6] font-medium">{exp.role}</p>
                    <p className="text-slate-400 text-sm">{exp.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <span className="text-slate-400 text-sm">{exp.period}</span>
                    <p className="text-slate-500 text-xs">{exp.location}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="flex items-start gap-3 text-slate-300 leading-relaxed"
                    >
                      <span className="text-[#3b82f6] mt-1 flex-shrink-0">↳</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

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
