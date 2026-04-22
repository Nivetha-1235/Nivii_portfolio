"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nivethavenkatraman48@gmail.com',
    action: 'copy',
    href: 'mailto:nivethavenkatraman48@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'nivethavenkatraman',
    action: 'link',
    href: 'https://www.linkedin.com/in/nivethavenkatraman',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Nivetha-1235',
    action: 'link',
    href: 'https://github.com/Nivetha-1235',
  },
]

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const section = sectionRef.current
    section?.addEventListener('mousemove', handleMouseMove)
    return () => section?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedEmail(true)
      toast.success('Email copied to clipboard!')
      setTimeout(() => setCopiedEmail(false), 2000)
    } catch {
      toast.error('Failed to copy email')
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Interactive Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Mouse follow gradient */}
        <div
          className="absolute w-96 h-96 rounded-full transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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
            {"// GET IN TOUCH"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] mb-6">
            <span className="block sm:inline">{"Let's Build Something"}</span>{' '}
            <span className="shimmer">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to SQL Developer, Database Developer & Data Analyst roles.
            <br />
            Available for remote, on-site, and relocation.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              {method.action === 'copy' ? (
                <button
                  onClick={() => copyToClipboard(method.value)}
                  className="w-full glass-card rounded-2xl p-6 text-left hover:glow transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold font-[family-name:var(--font-syne)]">{method.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-primary">
                    {copiedEmail ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Click to copy
                      </>
                    )}
                  </div>
                </button>
              ) : (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card rounded-2xl p-6 hover:glow transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold font-[family-name:var(--font-syne)]">{method.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                  <p className="text-xs text-primary mt-4">{"Open profile →"}</p>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Location & Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card backdrop-blur-xl">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card backdrop-blur-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm">Open to Opportunities</span>
          </div>
        </motion.div>

        {/* Direct CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="magnetic-btn bg-primary hover:bg-primary/90 text-lg px-8"
            asChild
          >
            <a href="mailto:nivethavenkatraman48@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Me a Message
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
