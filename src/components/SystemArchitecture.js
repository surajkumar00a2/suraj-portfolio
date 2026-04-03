'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

const architectures = [
  {
    id: 'batch',
    title: 'Batch Data Pipeline',
    description: 'High-volume ETL processing with data quality gates and error handling.',
    stages: [
      { name: 'Source Systems', details: 'APIs, Databases, Files' },
      { name: 'Ingestion Layer', details: 'Airflow DAGs, Validation' },
      { name: 'Bronze Storage', details: 'Raw data in S3' },
      { name: 'Silver Transform', details: 'Cleansing with Python' },
      { name: 'Gold Analytics', details: 'Business-ready tables' },
      { name: 'Consumption', details: 'Looker Studio dashboards' },
    ],
    tools: ['Apache Airflow', 'Python', 'AWS S3', 'dbt', 'PostgreSQL'],
    metrics: { latency: 'Hourly', sources: '500+', reliability: '99.2%' },
  },
  {
    id: 'quality',
    title: 'Data Quality System',
    description: 'Automated validation, monitoring, and anomaly detection framework.',
    stages: [
      { name: 'Schema Validation', details: 'Type checking' },
      { name: 'Null Checks', details: 'Completeness' },
      { name: 'Anomaly Detection', details: 'Z-score flags' },
      { name: 'Alerting', details: 'CloudWatch' },
    ],
    tools: ['Great Expectations', 'Python', 'AWS CloudWatch'],
    metrics: { accuracy: '89% -> 96%', manual: '-60%', coverage: '500+ sources' },
  },
];

function ArchitectureCard({ architecture, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`rounded-lg border border-border cursor-pointer transition-colors ${
        isExpanded ? 'border-primary/20' : 'hover:border-primary/10'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base font-semibold text-zinc-100">{architecture.title}</h3>
            <p className="text-sm text-zinc-500 mt-1">{architecture.description}</p>
          </div>
          <motion.svg
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-4 h-4 text-zinc-500 flex-shrink-0 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>

        <div className="flex flex-wrap gap-3 text-xs">
          {Object.entries(architecture.metrics).map(([key, value]) => (
            <span key={key} className="text-zinc-500">
              <span className="capitalize">{key}:</span>{' '}
              <span className="text-primary">{value}</span>
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border overflow-hidden"
          >
            <div className="p-6 space-y-5">
              <div>
                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Pipeline Flow</h4>
                <div className="flex flex-wrap items-center gap-2">
                  {architecture.stages.map((stage, i) => (
                    <div key={stage.name} className="flex items-center gap-2">
                      <div className="px-3 py-2 rounded-md border border-border">
                        <div className="text-xs font-medium text-zinc-300">{stage.name}</div>
                        <div className="text-[10px] text-zinc-600">{stage.details}</div>
                      </div>
                      {i < architecture.stages.length - 1 && (
                        <span className="text-zinc-600 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {architecture.tools.map((tool) => (
                    <span key={tool} className="tech-badge">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="System Design"
          title="Architectures"
          description="Production-ready data architectures designed for scale, reliability, and maintainability."
          align="center"
        />

        <div className="mt-12 grid gap-4">
          {architectures.map((architecture, index) => (
            <ArchitectureCard
              key={architecture.id}
              architecture={architecture}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
