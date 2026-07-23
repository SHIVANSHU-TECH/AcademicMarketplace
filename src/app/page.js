"use client";

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import NotesSection from "./components/NotesSection";
import CategoriesSection from "./components/CategoriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'var(--font-sans)' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ProjectsSection />
          <NotesSection />
          <CategoriesSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}