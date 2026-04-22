"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: 3, label: 'Internships' },
  { value: 9, label: 'Certifications' },
  { value: 8.6, label: 'GPA', isDecimal: true },
  { value: 2, label: 'Years Learning', suffix: '+' },
]

function Counter({ value, isDecimal, suffix }: { value: number; isDecimal?: boolean; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value, isDecimal])

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl opacity-60" />
              
              {/* Image container - 4:3 ratio with rounded corners */}
              <div className="relative w-72 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nivii-oNx3h9NrlMnBr8X6LQY22g4hSGbVCq.jpg"
                  alt="Nivetha V - SQL Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block font-mono text-sm text-primary"
            >
              {"// ABOUT ME"}
            </motion.span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-syne)]">
              Passionate about Data & Development
            </h2>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm a BE Computer Science & Engineering graduate from VELS University with an 8.6 GPA, passionate about databases, SQL, and building clean data solutions."}
              </p>
              <p>
                My expertise lies in SQL development, data analysis, and creating efficient database solutions. I combine my SQL expertise with frontend development exposure to understand the full application lifecycle.
              </p>
              <p>
                {"I'm always eager to learn new technologies and apply my skills to solve real-world problems through data-driven approaches."}
              </p>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-xl glass-card hover:glow transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text font-[family-name:var(--font-syne)]">
                    <Counter value={stat.value} isDecimal={stat.isDecimal} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="text-sm text-muted-foreground">Languages:</span>
              <div className="flex gap-2">
                {['English', 'Tamil'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-sm rounded-full glass-card text-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
