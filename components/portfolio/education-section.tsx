"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: 'VELS University',
    degree: 'BE in Computer Science & Engineering',
    duration: '2021 – 2025',
    location: 'Chennai',
    grade: '8.6 / 10 GPA',
    coursework: 'DBMS, Data Structures, Web Dev, Python, Computer Networks, Software Engineering',
    icon: GraduationCap,
  },
  {
    institution: 'SVM Hr. Sec School',
    degree: '12th Standard · Biomaths',
    duration: '2021',
    location: 'Trichy',
    grade: '82%',
    coursework: null,
    icon: Award,
  },
  {
    institution: 'YWCA Matriculation School',
    degree: 'SSLC',
    duration: '2019',
    location: 'Trichy',
    grade: '74%',
    coursework: null,
    icon: Award,
  },
]

function FlipCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="flip-card h-72 perspective-1000"
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Front */}
        <div className="flip-card-front absolute w-full h-full glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden">
          <div className="p-4 rounded-2xl bg-primary/10 mb-4">
            <edu.icon className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-2">
            {edu.institution}
          </h3>
          <p className="text-sm text-primary font-medium mb-2">{edu.degree}</p>
          <p className="text-sm text-muted-foreground">{edu.duration} · {edu.location}</p>
          <div className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
            <span className="text-lg font-bold gradient-text">{edu.grade}</span>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back absolute w-full h-full glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden rotate-y-180">
          <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-4">
            {edu.institution}
          </h3>
          {edu.coursework ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">Coursework:</p>
              <p className="text-sm text-foreground leading-relaxed">
                {edu.coursework}
              </p>
            </>
          ) : (
            <>
              <p className="text-lg font-bold gradient-text mb-2">{edu.grade}</p>
              <p className="text-sm text-muted-foreground">
                {edu.degree}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {edu.location} · {edu.duration}
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={sectionRef} className="py-24 md:py-32">
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
            {"// ACADEMIC BACKGROUND"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)]">
            Education
          </h2>
          <p className="text-muted-foreground mt-4">
            Hover over cards to see more details
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <FlipCard key={edu.institution} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
