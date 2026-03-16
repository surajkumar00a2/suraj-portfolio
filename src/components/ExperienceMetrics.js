'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endValue = parseFloat(end);
      const isDecimal = end.toString().includes('.');

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = easeOutQuart * endValue;

        if (isDecimal) {
          setCount(currentValue.toFixed(1));
        } else {
          setCount(Math.floor(currentValue));
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const metrics = [
  {
    value: '3',
    suffix: '+',
    label: 'Years Experience',
    description: 'Building production data systems',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#00e5ff',
  },
  {
    value: '15',
    suffix: '+',
    label: 'Data Workflows',
    description: 'Production ETL pipelines',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: '#7c4dff',
  },
  {
    value: '10',
    suffix: 'M+',
    label: 'Rows Processed',
    description: 'Daily data volume handled',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: '#00e5ff',
  },
  {
    value: '100',
    suffix: '+',
    label: 'Hours Automated',
    description: 'Manual processes eliminated',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: '#7c4dff',
  },
];

function MetricCard({ metric, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="metric-card group relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ background: metric.color }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: `rgba(${metric.color === '#00e5ff' ? '0, 229, 255' : '124, 77, 255'}, 0.1)`,
            color: metric.color,
          }}
        >
          {metric.icon}
        </div>

        {/* Value */}
        <div className="text-4xl md:text-5xl font-bold mb-2">
          <span className="gradient-text">
            <AnimatedCounter end={metric.value} suffix={metric.suffix} />
          </span>
        </div>

        {/* Label */}
        <div className="text-lg font-semibold text-text mb-1">
          {metric.label}
        </div>

        {/* Description */}
        <div className="text-sm text-text-muted">
          {metric.description}
        </div>

        {/* Decorative line */}
        <div
          className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-500 group-hover:w-full"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, ${metric.color}, transparent)`,
          }}
        />
      </motion.div>
    </ScrollReveal>
  );
}

export default function ExperienceMetrics() {
  return (
    <section id="metrics" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Impact Metrics"
          title="Experience & Impact"
          description="Quantifiable results from building and optimizing data systems at scale."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Cloud Platforms', value: 'AWS, GCP' },
            { label: 'Databases', value: 'PostgreSQL, Snowflake' },
            { label: 'Orchestration', value: 'Airflow, Dagster' },
            { label: 'Visualization', value: 'Looker, Tableau' },
          ].map((item, index) => (
            <ScrollReveal key={item.label} delay={0.6 + index * 0.1}>
              <div className="glass glow-border rounded-lg p-4 text-center">
                <div className="text-xs text-text-muted uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-text">{item.value}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
