'use client';

import { motion } from 'framer-motion';
import skillGroups from '@/data/skills';
import SectionHeader from './ui/SectionHeader';

function SkillCard({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-lg border border-border hover:border-primary/20 transition-colors"
    >
      <div className="text-primary text-lg mb-1">{group.icon}</div>
      <h3 className="text-base font-semibold text-zinc-100 mb-4">{group.domain}</h3>
      <ul className="space-y-2">
        {group.skills.map((skill) => (
          <li key={skill} className="flex items-start gap-2 text-sm text-zinc-400">
            <span className="w-1 h-1 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          title="Technical Skills"
          description="Full-stack analytics engineering — from raw data ingestion to decision-ready outputs."
          align="center"
          stage="02"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.domain} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
