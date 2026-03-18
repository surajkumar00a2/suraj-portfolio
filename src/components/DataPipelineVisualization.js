'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const pipelineStages = [
  {
    id: 'ingestion',
    title: 'APIs / Web Scrapers',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    tech: ['REST APIs', 'Selenium', 'Requests'],
    color: '#3b82f6',
  },
  {
    id: 'streaming',
    title: 'Streaming / Kafka',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tech: ['Apache Kafka', 'Kinesis', 'EventBridge'],
    color: '#2563eb',
  },
  {
    id: 'storage',
    title: 'S3 Data Lake',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    tech: ['S3', 'Delta Lake', 'Parquet'],
    color: '#3b82f6',
  },
  {
    id: 'processing',
    title: 'PySpark Processing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    tech: ['PySpark', 'AWS Glue', 'EMR'],
    color: '#2563eb',
  },
  {
    id: 'warehouse',
    title: 'Athena / Snowflake',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tech: ['Snowflake', 'Athena', 'PostgreSQL'],
    color: '#3b82f6',
  },
  {
    id: 'analytics',
    title: 'BI / Analytics',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tech: ['Looker', 'Tableau', 'Streamlit'],
    color: '#2563eb',
  },
];

function PipelineNode({ stage, index }) {
  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="pipeline-node group cursor-pointer"
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto transition-all duration-300"
          style={{
            background: `rgba(59, 130, 246, 0.1)`,
            color: stage.color,
            boxShadow: `0 0 20px ${stage.color}20`,
          }}
        >
          {stage.icon}
        </div>
        <h3 className="text-sm font-semibold text-slate-200 mb-2">{stage.title}</h3>
        <div className="flex flex-wrap justify-center gap-1">
          {stage.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-background-light text-slate-400 border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function DataFlowArrow({ index }) {
  return (
    <div className="hidden md:flex items-center justify-center py-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className="relative"
      >
        {/* Animated dots */}
        <div className="flex flex-col items-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 8, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function DataPipelineVisualization() {
  return (
    <section id="pipeline" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Data Architecture"
          title="How I Build Data Systems"
          description="End-to-end data pipeline architecture from ingestion to analytics, designed for scale, reliability, and performance."
          align="center"
        />

        {/* Pipeline Visualization */}
        <div className="mt-16">
          {/* Desktop Layout - Vertical Pipeline */}
          <div className="hidden md:grid grid-cols-6 gap-4">
            {pipelineStages.map((stage, index) => (
              <div key={stage.id} className="relative">
                <PipelineNode stage={stage} index={index} />

                {/* Connection line to next node */}
                {index < pipelineStages.length - 1 && (
                  <div className="absolute top-1/2 -right-6 w-12 h-px">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50" />
                      <motion.div
                        animate={{ x: [0, 48] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.3,
                        }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-glow"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-4">
            {pipelineStages.map((stage, index) => (
              <div key={stage.id}>
                <PipelineNode stage={stage} index={index} />
                {index < pipelineStages.length - 1 && <DataFlowArrow index={index} />}
              </div>
            ))}
          </div>

          {/* Pipeline Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Data Sources', value: '15+' },
              { label: 'Daily Volume', value: '10M+' },
              { label: 'Pipeline Uptime', value: '99.9%' },
              { label: 'Processing Time', value: '<2min' },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.5 + index * 0.1}>
                <div className="glass glow-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
