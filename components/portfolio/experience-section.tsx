"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, MapPin, Calendar, ChevronRight, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

const experiences = [
  {
    company: 'Photon',
    role: 'SQL Project Trainee',
    duration: 'Jul 2025 – Dec 2025',
    location: 'Chennai, India',
    description: 'Contributed to the full development lifecycle of SQL-based projects, working with senior developers on real-time database solutions.',
    responsibilities: [
      'Wrote complex queries, stored procedures and optimized performance',
      'Assisted in module design, implementation & documentation',
      'Collaborated with senior devs using agile workflows',
      'Prepared documentation and reports for ongoing tasks',
    ],
    tags: ['SQL', 'SSMS', 'T-SQL', 'Agile', 'Documentation'],
    link: 'https://www.photon.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'VR Della Smart Tech',
    role: 'Frontend Web Developer Intern',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Trichy, India',
    description: 'Involved in the complete front-end development process, building responsive web pages for live client projects.',
    responsibilities: [
      'Built responsive web pages with HTML, CSS, JS, Bootstrap',
      'Implemented UI features for live client projects',
      'Ensured cross-browser compatibility & clean code standards',
      'Used Git for version control',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    link: null,
    color: 'from-violet-500 to-purple-500',
  },
  {
    company: 'Core Idea Innovations',
    role: 'UI Designer',
    duration: 'Aug 2022 – Sep 2022',
    location: 'Chennai, India',
    description: 'Designed user interfaces using FlutterFlow and conducted user testing sessions to validate designs.',
    responsibilities: [
      'Designed UI using FlutterFlow',
      'Conducted prototyping and user testing sessions',
    ],
    tags: ['FlutterFlow', 'UI/UX', 'Prototyping', 'User Testing'],
    link: null,
    color: 'from-amber-500 to-orange-500',
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block font-mono text-sm text-primary mb-4"
          >
            {"// CAREER JOURNEY"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)] mb-4">
            Work{' '}
            <span className="relative">
              Experience
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary origin-left"
              />
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My professional journey through internships and training programs that shaped my skills
          </p>
        </motion.div>

        {/* Experience Selector - Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Company Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:w-72 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0"
          >
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal min-w-fit lg:min-w-0 ${
                  activeIndex === index
                    ? 'glass-card glow'
                    : 'hover:bg-muted/50'
                }`}
              >
                {/* Active Indicator */}
                <motion.div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-gradient-to-b ${exp.color} hidden lg:block`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? 32 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon */}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                
                {/* Company Info */}
                <div>
                  <div className={`font-semibold font-[family-name:var(--font-syne)] transition-colors ${
                    activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {exp.company}
                  </div>
                  <div className="text-xs text-muted-foreground">{exp.duration}</div>
                </div>

                {/* Arrow */}
                <ChevronRight className={`w-4 h-4 ml-auto transition-all hidden lg:block ${
                  activeIndex === index ? 'opacity-100 translate-x-0 text-primary' : 'opacity-0 -translate-x-2'
                }`} />
              </motion.button>
            ))}
          </motion.div>

          {/* Right Side - Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-syne)] mb-2">
                      {experiences[activeIndex].role}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${experiences[activeIndex].color} text-white`}>
                      {experiences[activeIndex].company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {experiences[activeIndex].duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {experiences[activeIndex].location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {experiences[activeIndex].description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeIndex].responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experiences[activeIndex].color} mt-2 flex-shrink-0`} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {experiences[activeIndex].tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-foreground border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Link */}
                {experiences[activeIndex].link && (
                  <Button variant="outline" size="sm" asChild className="group">
                    <a href={experiences[activeIndex].link} target="_blank" rel="noopener noreferrer">
                      Visit Company Website
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-2 mt-8 lg:hidden"
        >
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-8 bg-primary' : 'bg-muted-foreground/30'
              }`}
              aria-label={`View experience ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
