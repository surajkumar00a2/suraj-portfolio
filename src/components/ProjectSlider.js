'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Forecast & Risk Simulation',
    insight: 'Identified revenue risk and projected future MRR using predictive modeling',
    points: [
      '£513K current MRR base',
      '£314K revenue at risk',
      '£199K projected MRR'
    ],
    image: '/slide1.png',
    id: 1
  },
  {
    title: 'Customer Segmentation & Profitability',
    insight: 'Analyzed customer segments to identify high-value and low-performing groups',
    points: [
      'VIP segment drives highest revenue',
      'Segment-based MRR contribution',
      'ARPU vs revenue distribution'
    ],
    image: '/slide2.png',
    id: 2
  },
  {
    title: 'Revenue Leakage Detection',
    insight: 'Detected anomalies and refund patterns impacting revenue',
    points: [
      '£314K revenue at risk',
      '£333K anomaly variance',
      'High-risk products identified'
    ],
    image: '/slide3.png',
    id: 3
  },
  {
    title: 'Enterprise Revenue Overview',
    insight: 'Built a full-scale revenue intelligence system across geographies',
    points: [
      '£10M total revenue',
      '532K+ transactions',
      'Global revenue distribution'
    ],
    image: '/slide4.png',
    id: 4
  },
];

export default function ProjectSlider({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="glass rounded-3xl overflow-hidden border-white/10"
        >
          <div className="relative overflow-hidden aspect-video">
            <motion.img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="p-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">{slides[currentIndex].title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                {slides[currentIndex].insight}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slides[currentIndex].points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <span className="text-primary font-bold">→</span>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full glass border-white/10 text-zinc-400 hover:text-zinc-100 transition-all duration-300 pointer-events-auto shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full glass border-white/10 text-zinc-400 hover:text-zinc-100 transition-all duration-300 pointer-events-auto shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
