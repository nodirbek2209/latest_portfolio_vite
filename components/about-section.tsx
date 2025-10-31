"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute top-0 right-1/4 h-96 w-96 -translate-y-1/2 rounded-full opacity-15 blur-3xl select-none"></div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0, ease: "easeInOut" }}
        className="container mx-auto flex flex-col items-center gap-12 px-4"
      >
        <div className="text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
            className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground"
          >
            About <span className="text-gradient">Eduoila</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              Eduoila is a revolutionary EdTech startup founded by three passionate educators and technologists
              committed to transforming the way students learn and teachers teach. We believe that technology should
              empower education, not replace it.
            </p>

            <p>
              Our mission is to create accessible, engaging, and effective learning experiences that adapt to each
              student's unique needs. Through our suite of innovative products—Edumarkaz, Eduquiz, and Edumanage—we're
              building a comprehensive ecosystem that supports educators and inspires learners.
            </p>

            <p>
              With a focus on innovation, user experience, and measurable outcomes, Eduoila is dedicated to making
              quality education available to everyone, everywhere. We're not just building software; we're building the
              future of learning.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="w-full max-w-4xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Founded", value: "2025" },
              { label: "Team Size", value: "5+" },
              { label: "Products", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: 0.5 + 0.1 * index, ease: "easeInOut" }}
                className="rounded-xl border border-primary/30 bg-card/40 backdrop-blur-md p-6 text-center hover:border-primary/60 transition-colors"
              >
                <p className="text-3xl font-bold text-primary mb-2 font-sans">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
