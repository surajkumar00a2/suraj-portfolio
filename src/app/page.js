"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import DataPipelineVisualization from "@/components/DataPipelineVisualization";
import Projects from "@/components/Projects";
import ExperienceMetrics from "@/components/ExperienceMetrics";
import SystemArchitecture from "@/components/SystemArchitecture";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedGridBackground from "@/components/ui/AnimatedGridBackground";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always use dark mode for the futuristic theme
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Animated Background */}
      <AnimatedGridBackground />

      {/* Navigation */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Data Command Center */}
        <Hero />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* About Section */}
        <About />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Data Pipeline Visualization */}
        <DataPipelineVisualization />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Skills Section */}
        <Skills />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Experience Metrics */}
        <ExperienceMetrics />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Projects - Dashboard Style */}
        <Projects />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* System Architecture */}
        <SystemArchitecture />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* GitHub Activity */}
        <GitHubActivity />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
