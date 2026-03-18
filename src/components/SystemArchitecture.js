'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const architectures = [
  {
    id: 'batch',
    title: 'Batch Data Pipeline',
    description: 'High-volume ETL processing with data quality gates and error handling.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    stages: [
      { name: 'Source Systems', details: 'APIs, Databases, Files', icon: '📥' },
      { name: 'Ingestion Layer', details: 'Airflow DAGs, Validation', icon: '⚡' },
      { name: 'Bronze Storage', details: 'Raw data in S3', icon: '📦' },
      { name: 'Silver Transform', details: 'Cleansing with Python', icon: '🔧' },
      { name: 'Gold Analytics', details: 'Business-ready tables', icon: '✨' },
      { name: 'Consumption', details: 'Looker Studio dashboards', icon: '📊' },
    ],
    tools: ['Apache Airflow', 'Python', 'AWS S3', 'dbt', 'PostgreSQL'],
    metrics: { latency: 'Hourly', sources: '500+', reliability: '99.2%' },
  },
  {
    id: 'quality',
    title: 'Data Quality System',
    description: 'Automated validation, monitoring, and anomaly detection framework.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stages: [
      { name: 'Schema Validation', details: 'Type checking', icon: '📋' },
      { name: 'Null Checks', details: 'Completeness', icon: '✅' },
      { name: 'Anomaly Detection', details: 'Z-score flags', icon: '🔍' },
      { name: 'Alerting', details: 'CloudWatch', icon: '🚨' },
    ],
    tools: ['Great Expectations', 'Python', 'AWS CloudWatch'],
    metrics: { accuracy: '89% → 96%', manual: '-60%', coverage: '500+ sources' },
  },
];

function ArchitectureCard({ architecture, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`glass glow-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-primary/50' : ''
        }`}
      >
        <motion.div layout className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                {architecture.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200">{architecture.title}</h3>
                <p className="text-sm text-slate-400">{architecture.description}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-primary"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 text-xs">
            {Object.entries(architecture.metrics).map(([key, value]) => (
              <div key={key} className="px-3 py-1 rounded-full bg-background-light border border-border">
                <span className="text-slate-400 capitalize">{key}: </span>
                <span className="text-primary font-medium">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border"
            >
              <div className="p-6 space-y-6">
                {/* Pipeline Stages */}
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Pipeline Flow</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {architecture.stages.map((stage, i) => (
                      <div key={stage.name} className="flex items-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="px-4 py-2 rounded-lg bg-background-light border border-border hover:border-primary/50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span>{stage.icon}</span>
                            <div>
                              <div className="text-sm font-medium text-slate-200">{stage.name}</div>
                              <div className="text-xs text-slate-400">{stage.details}</div>
                            </div>
                          </div>
                        </motion.div>
                        {i < architecture.stages.length - 1 && (
                          <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {architecture.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollReveal>
  );
}

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="System Design"
          title="Architectures I Work With"
          description="Production-ready data architectures designed for scale, reliability, and maintainability."
          align="center"
        />

        <div className="mt-16 grid gap-6">
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
