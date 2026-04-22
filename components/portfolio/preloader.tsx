"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const letters = "NIVETHA V".split("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="flex gap-1 md:gap-2">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  y: -100, 
                  scale: 0.5,
                  rotateX: 90,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  exit: { delay: index * 0.05, duration: 0.3 }
                }}
                className="text-4xl md:text-7xl font-bold font-[family-name:var(--font-syne)] shimmer"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-muted rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: 1, ease: "linear" }}
              className="h-full w-1/2 bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
