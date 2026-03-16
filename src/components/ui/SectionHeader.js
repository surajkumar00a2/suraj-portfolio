'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ label, title, description, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`${alignClasses[align]} max-w-2xl mb-12`}>
      <ScrollReveal>
        <p className="font-mono text-xs font-medium text-primary uppercase tracking-widest mb-3">
          {label}
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="text-text-muted leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
