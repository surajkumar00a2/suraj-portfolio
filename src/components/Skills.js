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
      className="p-8 rounded-2xl border border-white/10 glass group hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="text-primary text-2xl">{group.icon}</div>
        <h3 className="text-lg font-bold text-zinc-100">{group.domain}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium text-zinc-400 border border-white/10 bg-white/5 hover:text-zinc-100 hover:border-primary/50 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-content mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <SectionHeader
              label="Capabilities"
              title="Technical Skills"
              description="Full-stack analytics engineering — from raw data ingestion to decision-ready outputs."
              stage="02"
            />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <SkillCard key={group.domain} group={group} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
