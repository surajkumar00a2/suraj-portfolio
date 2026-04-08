"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import SystemArchitecture from "@/components/SystemArchitecture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PipelineBackground from "@/components/ui/PipelineBackground";
import PipelineConnector from "@/components/ui/PipelineConnector";
import profile from "@/data/profile";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeRole, setActiveRole] = useState(
    profile.roles.find((r) => r.id === profile.defaultRole) || profile.roles[0]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <PipelineBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero activeRole={activeRole} setActiveRole={setActiveRole} />
        <PipelineConnector />
        <About activeRole={activeRole} />
        <PipelineConnector />
        <Skills />
        <PipelineConnector />
        <Metrics />
        <PipelineConnector />
        <Projects />
        <PipelineConnector />
        <WorkExperience />
        <PipelineConnector />
        <SystemArchitecture />
        <PipelineConnector />
        <Contact activeRole={activeRole} />
      </main>

      <Footer />
    </>
  );
}
