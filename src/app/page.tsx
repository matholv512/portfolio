"use client";

import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { AboutSection } from "@/components/landing-page/about-section";
import { ContactSection } from "@/components/landing-page/contact-section";
import { ExperienceSection } from "@/components/landing-page/experience-section";
import { HeroSection } from "@/components/landing-page/hero-section";
import { ProjectsSection } from "@/components/landing-page/projects-section";
import { TechnologiesSection } from "@/components/landing-page/technologies-section";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />

        <TechnologiesSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
