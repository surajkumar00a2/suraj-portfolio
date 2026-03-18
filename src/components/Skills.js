'use client';

import { motion } from 'framer-motion';
import skillGroups from '@/data/skills';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

function SkillCard({ group, index }) {
  const colors = ['#3b82f6', '#2563eb', '#1d4ed8'];
  const color = colors[index % colors.length];

  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -5 }}
        className="glass glow-border rounded-xl p-6 group relative overflow-hidden"
      >
        {/* Background gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `radial-gradient(circle at top right, ${color}10, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
          style={{
            background: `rgba(59, 130, 246, 0.1)`,
            color: color,
            boxShadow: `0 0 20px ${color}20`,
          }}
        >
          <span className="text-2xl">{group.icon}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">
          {group.domain}
        </h3>

        {/* Skills List */}
        <ul className="space-y-3">
          {group.skills.map((skill, i) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-start gap-3 text-sm text-slate-300"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              {skill}
            </motion.li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-full"
          style={{
            width: '0%',
            background: `linear-gradient(90deg, ${color}, transparent)`,
          }}
        />
      </motion.div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          title="Technical Skills"
          description="Full-stack analytics engineering — from raw data ingestion to decision-ready outputs."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.domain} group={group} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
