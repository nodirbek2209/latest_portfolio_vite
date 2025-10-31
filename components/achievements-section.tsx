"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Odoo Hackaton 2025 Winners",
    description: "Learning across our platform",
    image: "/odoo.png",
  },
  {
    id: 2,
    title: "4 Innovative Products",
    description: "Eduoila, Edumarkaz, Eduquiz & Edumanage",
    image: "/innovations.png",
  }
]

export default function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
  }

  const currentAchievement = achievements[currentIndex]
  const nextAchievement = achievements[(currentIndex + 1) % achievements.length]
  const prevAchievement = achievements[(currentIndex - 1 + achievements.length) % achievements.length]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  }

  return (
    <section
      id="achievements"
      className="relative min-h-[600px] md:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-32 overflow-hidden bg-transparent"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 w-full"
      >
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-foreground"
          >
            Our <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans px-4"
          >
            Milestones that define our commitment to educational excellence
          </motion.p>
        </div>

        <div className="relative min-h-[400px] md:h-[450px] flex items-center justify-center">
          {/* Left peek image - hidden on mobile */}
          <motion.div
            key={`prev-${prevAchievement.id}`}
            className="hidden lg:flex absolute left-8 w-1/4 h-full items-center justify-center opacity-30 pointer-events-none"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-xs aspect-square">
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/20 backdrop-blur-md w-full h-full">
                <img
                  src={prevAchievement.image || "/placeholder.svg"}
                  alt={prevAchievement.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Center main achievement */}
          <motion.div
            key={`center-${currentAchievement.id}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="relative w-full md:absolute md:inset-0 flex items-center justify-center z-10"
          >
            <div className="w-full max-w-4xl px-2 sm:px-4 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center">
                {/* Image */}
                <motion.div
                  className="relative order-1 md:order-1 w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-2xl blur-2xl"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-primary/40 bg-card/40 backdrop-blur-md p-2 aspect-square max-w-sm mx-auto md:max-w-none">
                      <img
                        src={currentAchievement.image || "/placeholder.svg"}
                        alt={currentAchievement.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text content with dark blur background */}
                <motion.div
                  className="order-2 md:order-2 space-y-3 sm:space-y-4 md:space-y-6 relative"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {/* Dark blur background layer */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -z-10"></div>

                  <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-6">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        {currentAchievement.title.split(" ").map((word, i) => (
                          <span key={i}>
                            {i === currentAchievement.title.split(" ").length - 1 ? (
                              <span className="text-gradient">{word}</span>
                            ) : (
                              word
                            )}{" "}
                          </span>
                        ))}
                      </h3>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-muted-foreground font-sans text-sm sm:text-base md:text-base leading-relaxed max-w-md mt-2 sm:mt-3 md:mt-4"
                    >
                      {currentAchievement.description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right peek image - hidden on mobile */}
          <motion.div
            key={`next-${nextAchievement.id}`}
            className="hidden lg:flex absolute right-8 w-1/4 h-full items-center justify-center opacity-30 pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-xs aspect-square">
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/20 backdrop-blur-md w-full h-full">
                <img
                  src={nextAchievement.image || "/placeholder.svg"}
                  alt={nextAchievement.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-8 md:mt-12">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/40 bg-card/40 backdrop-blur-md hover:border-primary/80 hover:bg-card/60 transition-all duration-300 text-foreground"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-1.5 sm:gap-2">
            {achievements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-5 sm:w-6 md:w-8"
                    : "bg-primary/30 w-1.5 sm:w-2 hover:bg-primary/60"
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/40 bg-card/40 backdrop-blur-md hover:border-primary/80 hover:bg-card/60 transition-all duration-300 text-foreground"
            aria-label="Next achievement"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
