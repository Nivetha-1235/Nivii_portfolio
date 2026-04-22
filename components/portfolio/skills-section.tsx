"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Database, 
  Code, 
  Wrench, 
  Users,
  Server,
  BarChart3,
  FileCode,
  GitBranch,
  Palette,
  Workflow,
  MessageSquare,
  FileText
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Databases & Data',
    icon: Database,
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'SSMS', level: 90 },
      { name: 'T-SQL', level: 85 },
      { name: 'Azure Data Studio', level: 75 },
      { name: 'Power BI', level: 80 },
      { name: 'SSRS', level: 70 },
      { name: 'SSIS', level: 70 },
      { name: 'DAX', level: 70 },
    ],
  },
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'JavaScript', level: 70 },
      { name: 'jQuery', level: 65 },
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'PL/SQL', level: 60 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git', level: 75 },
      { name: 'GitHub', level: 80 },
      { name: 'Bootstrap', level: 80 },
      { name: 'FlutterFlow', level: 65 },
      { name: 'Microsoft Power BI', level: 80 },
      { name: 'Azure SQL', level: 70 },
      { name: 'Power Query', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', level: 90 },
      { name: 'Agile Workflow', level: 85 },
      { name: 'Technical Documentation', level: 80 },
      { name: 'Cross-functional Collaboration', level: 85 },
    ],
  },
]

const skillIcons: Record<string, typeof Database> = {
  'SQL Server': Server,
  'SSMS': Database,
  'T-SQL': FileCode,
  'Azure Data Studio': Database,
  'Power BI': BarChart3,
  'SSRS': BarChart3,
  'SQL': Database,
  'Python': Code,
  'JavaScript': FileCode,
  'jQuery': Code,
  'HTML5': Code,
  'CSS3': Palette,
  'Git': GitBranch,
  'GitHub': GitBranch,
  'Bootstrap': Palette,
  'FlutterFlow': Palette,
  'Microsoft Power BI': BarChart3,
  'Problem Solving': Workflow,
  'Agile Workflow': Workflow,
  'Technical Documentation': FileText,
  'Cross-functional Collaboration': MessageSquare,
  'SSIS': Workflow,
  'DAX': BarChart3,
  'PL/SQL': FileCode,
  'Azure SQL': Server,
  'Power Query': Workflow,
}

function SkillPill({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  const Icon = skillIcons[skill.name] || Code

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="skill-tag group relative"
    >
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        Proficiency: {skill.level}%
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary" />
      </div>
    </motion.div>
  )
}
// Pre-calculated to avoid SSR hydration mismatch
const FLOATING_SYMBOLS = [
  { left: 15, top: 20, dx: 30, dy: -20, dur: 12 },
  { left: 75, top: 10, dx: -40, dy: 35, dur: 15 },
  { left: 45, top: 60, dx: 25, dy: -30, dur: 18 },
  { left: 85, top: 75, dx: -20, dy: 40, dur: 13 },
  { left: 10, top: 85, dx: 45, dy: -25, dur: 16 },
  { left: 60, top: 40, dx: -35, dy: 20, dur: 14 },
]
export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {FLOATING_SYMBOLS.map((sym, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? {
              opacity: 0.1,
              x: [0, sym.dx, 0],
              y: [0, sym.dy, 0],
            } : {}}
            transition={{ duration: sym.dur, repeat: Infinity, delay: i * 0.5 }}
            className="absolute text-6xl text-primary"
            style={{ left: `${sym.left}%`, top: `${sym.top}%` }}
          >
            {['</', '{}', '()', '[]', '=>', '/*'][i]}
          </motion.div>
        ))}
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
            {"// EXPERTISE"}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-syne)]">
            Tech{' '}
            <span className="shimmer">Arsenal</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-syne)]">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    delay={0.1 + categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
