'use client';

import { motion } from 'framer-motion';
import ventures from '@/data/ventures';
import SectionHeader from './ui/SectionHeader';

function VentureCard({ venture, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 glass p-6 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-primary transition-colors duration-300">
              {venture.title}
            </h3>
            <span className="text-[10px] uppercase tracking-widest text-primary font-mono bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
              Indie Studio
            </span>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">{venture.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {venture.products.map((product, i) => (
            <a
              key={i}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group/prod"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-zinc-200 group-hover/prod:text-primary transition-colors">
                  {product.name}
                </span>
                <svg className="w-3 h-3 text-zinc-500 group-hover/prod:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-[11px] text-zinc-500 line-clamp-1">{product.description}</p>
            </a>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5 space-y-4">
          <div className="flex flex-wrap gap-2">
            {venture.stack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded-full text-[10px] font-mono text-zinc-400 border border-white/10 bg-white/5">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={venture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-zinc-900 font-bold text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 w-full"
          >
            Visit Studio
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Ventures() {
  return (
    <section id="ventures" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Ventures"
          title="AI Product Experiments"
          description="Applying data orchestration and AI prompt engineering to build independent, scalable tools."
          stage="04"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {ventures.map((venture, index) => (
            <VentureCard key={venture.id} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
