'use client';

import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

const customTheme = {
  light: ['#0a0f1c', '#0d3b4d', '#0a6b7a', '#07a0b8', '#00e5ff'],
  dark: ['#0a0f1c', '#0d3b4d', '#0a6b7a', '#07a0b8', '#00e5ff'],
};

const languageStats = [
  { name: 'Python', percentage: 65, color: '#00e5ff' },
  { name: 'SQL', percentage: 20, color: '#7c4dff' },
  { name: 'TypeScript', percentage: 10, color: '#00b8d4' },
  { name: 'Shell', percentage: 5, color: '#b388ff' },
];

const repoStats = [
  { label: 'Repositories', value: '15+' },
  { label: 'Contributions', value: '500+' },
  { label: 'Pull Requests', value: '50+' },
  { label: 'Issues Closed', value: '100+' },
];

function LanguageBar({ lang, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-text">{lang.name}</span>
          <span className="text-text-muted">{lang.percentage}%</span>
        </div>
        <div className="h-2 bg-background-light rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${lang.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
            className="h-full rounded-full"
            style={{ backgroundColor: lang.color }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function GitHubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Open Source"
          title="Engineering Activity"
          description="Consistent contributions to data engineering tools and personal projects."
          align="center"
        />

        <div className="mt-16 space-y-8">
          {/* GitHub Calendar */}
          <ScrollReveal>
            <div className="glass glow-border rounded-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-text" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-lg font-semibold text-text">Contribution Activity</span>
                </div>
                <a
                  href="https://github.com/surajkumar00a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  @surajkumar00a2 →
                </a>
              </div>

              {mounted && (
                <div className="overflow-x-auto">
                  <GitHubCalendar
                    username="surajkumar00a2"
                    theme={customTheme}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    style={{
                      color: '#94a3b8',
                    }}
                    labels={{
                      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                      totalCount: '{{count}} contributions in the last year',
                    }}
                  />
                </div>
              )}

              {/* Legend */}
              <div className="flex items-center gap-2 mt-4 text-xs text-text-muted">
                <span>Less</span>
                {customTheme.dark.map((color, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {repoStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.2 + index * 0.1}>
                <div className="glass glow-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Language Distribution */}
          <ScrollReveal delay={0.4}>
            <div className="glass glow-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-text mb-6">Top Languages</h4>
              <div className="space-y-4">
                {languageStats.map((lang, index) => (
                  <LanguageBar key={lang.name} lang={lang} index={index} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
