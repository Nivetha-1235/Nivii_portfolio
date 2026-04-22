"use client"

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowDown, Linkedin, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const roles = [
  "SQL Developer",
  "Data Analyst",
  "Database Engineer",
  "Frontend Developer"
]

const sqlCode = `SELECT name, skills, passion
FROM nivetha_v
WHERE available = true
ORDER BY impact DESC;`

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typedCode, setTypedCode] = useState("")
  const [codeIndex, setCodeIndex] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  // Role typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(displayedRole.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, roleIndex])

  // SQL code typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (codeIndex < sqlCode.length) {
        setTypedCode(sqlCode.slice(0, codeIndex + 1))
        setCodeIndex((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setTypedCode("")
          setCodeIndex(0)
        }, 3000)
      }
    }, 50)

    return () => clearTimeout(timeout)
  }, [codeIndex])

  // Card tilt effect
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const scrollToExperience = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 pulse-dot"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities ✦
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
                className="text-lg md:text-xl text-muted-foreground"
              >
                {"Hi, I'm"}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-syne)] shimmer"
              >
                Nivetha V
              </motion.h1>
            </div>

            {/* Role Rotator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="h-10"
            >
              <span className="text-xl md:text-2xl font-mono text-primary">
                {displayedRole}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.1 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Crafting data-driven solutions with SQL Server, Power BI & Python.
              <br />
              Based in Chennai, open to the world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="magnetic-btn group bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="/resume.pdf" download="Nivetha_V_Resume.pdf">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="magnetic-btn group glass-card"
                onClick={scrollToExperience}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/nivethavenkatraman", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Nivetha-1235", label: "GitHub" },
                { icon: Mail, href: "mailto:nivethavenkatraman48@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl glass-card hover:glow transition-all duration-300 group relative"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - SQL Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="hidden lg:block"
          >
            <div
              ref={cardRef}
              className="glass-card rounded-2xl p-6 float transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono">query.sql</span>
              </div>
              
              {/* Code Content */}
              <pre className="font-mono text-sm md:text-base leading-relaxed">
                <code>
                  {typedCode.split('\n').map((line, i) => (
                    <div key={i} className="flex">
                      <span className="text-muted-foreground mr-4 select-none">{i + 1}</span>
                      <span>
                        {line.split(' ').map((word, j) => {
                          const keywords = ['SELECT', 'FROM', 'WHERE', 'ORDER', 'BY', 'DESC', 'true']
                          const isKeyword = keywords.includes(word)
                          const isString = word.includes("'") || word === 'true'
                          return (
                            <span
                              key={j}
                              className={
                                isKeyword 
                                  ? 'text-primary font-semibold' 
                                  : isString 
                                    ? 'text-secondary' 
                                    : 'text-foreground'
                              }
                            >
                              {word}{' '}
                            </span>
                          )
                        })}
                      </span>
                    </div>
                  ))}
                  <span className="animate-pulse text-primary">|</span>
                </code>
              </pre>
              
              {/* Result Preview */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="text-xs text-muted-foreground mb-2">-- Result Preview</div>
                <div className="text-sm text-secondary">
                  → 1 row returned: Nivetha V, Ready to Excel!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToExperience}
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
