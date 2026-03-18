"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import SystemArchitecture from "@/components/SystemArchitecture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedGridBackground from "@/components/ui/AnimatedGridBackground";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem('theme', 'light');
      }
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
        {/* Hero Section - Immediate Value Prop */}
        <Hero />

        <div className="section-divider" />

        {/* About + Skills Combined Impact */}
        <About />

        <div className="section-divider" />

        {/* Skills Section */}
        <Skills />

        <div className="section-divider" />

        {/* Featured Projects */}
        <Projects />

        <div className="section-divider" />

        {/* Work Experience */}
        <WorkExperience />

        <div className="section-divider" />

        {/* System Architecture */}
        <SystemArchitecture />

        <div className="section-divider" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
