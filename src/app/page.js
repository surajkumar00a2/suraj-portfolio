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

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="relative">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <WorkExperience />
        <div className="section-divider" />
        <SystemArchitecture />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
