"use client"

import { Toaster } from 'sonner'
import { Preloader } from '@/components/portfolio/preloader'
import { CustomCursor } from '@/components/portfolio/custom-cursor'
import { Navbar } from '@/components/portfolio/navbar'
import { ProgressBar } from '@/components/portfolio/progress-bar'
import { HeroSection } from '@/components/portfolio/hero-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { CertificationsSection } from '@/components/portfolio/certifications-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { Footer } from '@/components/portfolio/footer'
import { ScrollToTop } from '@/components/portfolio/scroll-to-top'

export default function Portfolio() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <ProgressBar />
      <Navbar />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-center" richColors />
    </>
  )
}
