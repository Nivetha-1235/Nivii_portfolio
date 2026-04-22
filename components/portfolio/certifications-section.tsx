"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink, Database, BarChart3, Shield, Code, Layers, Sparkles } from 'lucide-react'

const certifications = [
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    badge: 'SQL',
    icon: Database,
    link: 'https://www.hackerrank.com',
  },
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'Nov 2025',
    badge: 'SQL',
    icon: Database,
    link: 'https://www.hackerrank.com',
  },
  {
    name: 'Hands-on SSMS, SQL Queries & Azure Data Studio',
    issuer: 'Udemy',
    date: 'Dec 2025',
    badge: 'SQL',
    icon: Database,
    link: null,
  },
  {
    name: 'Mastering Power BI: From Data to Dashboard',
    issuer: 'Udemy',
    date: 'Dec 2025',
    badge: 'Power BI',
    icon: BarChart3,
    link: null,
  },
  {
    name: 'Data Analytics & Data Science Using Python',
    issuer: 'Professional Certification',
    date: 'Sep 2024',
    badge: 'Python',
    icon: Code,
    link: null,
  },
  {
    name: 'Cyber Security Expert Level 1',
    issuer: 'Professional Certification',
    date: 'Oct 2023',
    badge: 'Security',
    icon: Shield,
    link: null,
  },
  {
    name: 'Workshop on Virtual Reality',
    issuer: 'Workshop Certificate',
    date: 'Aug 2024',
    badge: 'VR',
    icon: Sparkles,
    link: null,
  },
  {
    name: 'JavaScript Beginner Level',
    issuer: 'Udemy',
    date: 'Mar 2024',
    badge: 'JavaScript',
    icon: Code,
    link: null,
  },
  {
    name: 'Full Stack Development',
    issuer: 'Skill India',
    date: 'Sep 2024',
    badge: 'Full Stack',
    icon: Layers,
    link: null,
  },
]

const badgeColors: Record<string, { bg: string; text: string; iconBg: string }> = {
  SQL: { bg: 'from-blue-500 to-cyan-500', text: 'text-blue-400', iconBg: 'bg-blue-500/20' },
  'Power BI': { bg: 'from-yellow-500 to-orange-500', text: 'text-yellow-400', iconBg: 'bg-yellow-500/20' },
  Python: { bg: 'from-green-500 to-emerald-500', text: 'text-green-400', iconBg: 'bg-green-500/20' },
  Security: { bg: 'from-red-500 to-pink-500', text: 'text-red-400', iconBg: 'bg-red-500/20' },
  VR: { bg: 'from-purple-500 to-violet-500', text: 'text-purple-400', iconBg: 'bg-purple-500/20' },
  JavaScript: { bg: 'from-yellow-400 to-amber-500', text: 'text-amber-400', iconBg: 'bg-amber-500/20' },
  'Full Stack': { bg: 'from-primary to-secondary', text: 'text-primary', iconBg: 'bg-primary/20' },
}

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30px" })
  const colors = badgeColors[cert.badge] || badgeColors['Full Stack']
  const IconComponent = cert.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="glass-card rounded-2xl p-5 h-full card-shine border border-border/50 hover:border-primary/30 transition-all duration-300">
        {/* Badge Ribbon */}
        <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${colors.bg} shadow-lg`}>
          {cert.badge}
        </div>

        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0`}>
            <IconComponent className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold font-[family-name:var(--font-syne)] line-clamp-2 group-hover:text-primary transition-colors">
              {cert.name}
            </h3>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{cert.date}</span>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline flex items-center gap-1"
            >
              Verify <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="certifications" ref={sectionRef} className="py-24 md:py-32">
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
            {"// ACHIEVEMENTS"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)]">
            <span className="block sm:inline">Licenses &</span>{' '}
            <span className="shimmer">Certifications</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
