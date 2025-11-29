"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n"

export default function AboutSection() {
  const { t } = useI18n()
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
            {t("about.title")} <span className="text-gradient">{t("about.name")}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              {t("about.p1")}
            </p>

            <p>
              {t("about.p2")}
            </p>

            <p>
              {t("about.p3")}
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
              { label: t("about.stat1Label"), value: t("about.stat1Value") },
              { label: t("about.stat2Label"), value: t("about.stat2Value") },
              { label: t("about.stat3Label"), value: t("about.stat3Value") },
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
