"use client"

import { motion, useInView, type PanInfo } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, GithubIcon, LinkedinIcon, Send, Code2 } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Rejabaliyev Nodirbek",
    role: "Founder && CEO",
    title: "Educational Visionary && Flutter Dev",
    bio: "With 1+ years of experience in educational technology, Nodirbek founded Eduoila to digitilize heducational system. His passion for innovation drives our mission to make quality education accessible to everyone.",
    image: "/nodirbek.png",
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "GraphQl",
      "Python",
      "OOP && SOLID",
      "Problem Solving",
      "Tailwind CSS",
    ],
    experience: [
      { company: "Eduoila", role: "Founder && CEO", period: "2025 — Present" },
      { company: "EduMarkaz", role: "Mobile Developer", period: "2024 — 2025" },
      { company: "SBM", role: "Python Automation", period: "2023 — 2025" },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/nodirbek-rejabaliyev-b7bb87262/",
      leetcode: "https://leetcode.com/u/nodirbekrejabaliyev/",
      github: "https://github.com/nodirbek2209",
      telegram: "https://t.me/RejabaliyevNodirbek2005",
    },
  },
  {
    id: 2,
    name: "Dilnoza Eraliyeva",
    role: "Flutter && Web Developer",
    title: "Frontend Developer",
    bio: "Dilnoza is a Flutter and web developer who focuses on building smooth, visually appealing, and efficient user interfaces. At Eduoila, she works on crafting responsive web and mobile experiences that simplify learning for everyone.",
    image: "/dilnoza.jpg",
    skills: ["Flutter", "Dart", "React", "UI/UX Design", "Data Analytics", "REST APIs"],
    experience: [{ company: "Eduoila", role: "Flutter && Web Developer", period: "2025 — Present" }],
    socials: {
      linkedin: "https://www.linkedin.com/in/dilnoza-eraliyeva-3575b7293",
      github: "https://github.com/dilnoza471",
      telegram: "https://t.me/your_handle",
    },
  },
  {
    id: 3,
    name: "Yoqubjonov Abdulhafiz",
    role: "Project Manager && Frontend Dev",
    title: "Full-Stack Dev && Tech Innovator",
    bio: "I am a passionate software engineer and project manager focused on building scalable, user-centric applications. With strong experience in React, TypeScript, and Python, he leads projects that blend clean design with solid architecture and team collaboration.",
    image: "/abdulhafiz.jpg",
    skills: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Python",
      "Node.js",
      "REST APIs",
      "Frontend Architecture",
      "Project Management",
      "Problem Solving",
    ],
    experience: [
      { company: "Eduoila", role: "Project Manager && Software Engineer", period: "2025 — Present" },
      { company: "1Doc", role: "Frontend Developer", period: "Aug 2025 — Oct 2025" },
      { company: "MaxCyberCom", role: "Frontend Developer", period: "2024 — 2025" },
      { company: "Freelance", role: "Frontend Developer", period: "2023 — 2025" },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/abdulhafiz1205/",
      github: "https://github.com/Abdulhafiz0512",
      telegram: "https://t.me/Abdulhafiz_Yoqubjonov",
    },
  },
  {
    id: 4,
    name: "Musayev Ximmatilloxon",
    role: "Founder && CEO",
    title: "Backend Dev && Product Architect",
    image: "/ximmatilloxon.png",
    bio: "As co-founder of Eduoila, Ximmatilloxon leads the vision and development of our technology ecosystem. With deep expertise in backend engineering and automation, he builds scalable, high-quality solutions that enhance education.",
    skills: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker && Nginx",
      "WebSockets",
      "GraphQL",
      "System Design",
      "Automation",
      "Clean Architecture",
      "Problem Solving",
    ],
    experience: [
      { company: "Eduoila", role: "Founder && CEO", period: "2025 — Present" },
      { company: "EduMarkaz", role: "Lead Backend Developer", period: "2024 — Present" },
      { company: "SBM Tech Solutions", role: "Python Automation Developer", period: "2024" },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/ximmatilloxon-musayev/",
      github: "https://github.com/Himmatilloxon",
      telegram: "https://t.me/Ximmatilloxon",
    },
  },
  {
    id: 5,
    name: "Diyorbek Umaraliyev",
    role: "Backend && AI Specialist",
    title: "ML and Backend Engineer",
    bio: "Diyorbek is a backend and AI specialist passionate about building efficient, data-driven systems. At EduOila, he focuses on integrating machine learning models with scalable backend services.",
    image: "/diyorbek.jpg",
    skills: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "PyTorch",
      "Docker && Nginx",
      "WebSockets",
      "LLMs",
      "System Design",
      "TensorFlow",
      "Deep Learning",
      "Problem Solving",
    ],
    experience: [
      { company: "Digital Generation Uzbekistan", role: "ML Engineer", period: "2025 — Present" },
      { company: "EduMarkaz", role: "Backend Developer", period: "2024 — Present" },
    ],
    socials: {
      linkedin: "https://www.linkedin.com/in/umaraliyev0101/",
      github: "https://github.com/umaraliyev0101",
      telegram: "https://t.me/umaraliyev0101",
    },
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  // Auto-advance timer that we can reset on manual navigation
  const autoRef = useRef<number | null>(null)
  const dragRef = useRef<HTMLDivElement>(null)

  const clearAuto = () => {
    if (autoRef.current != null) {
      clearInterval(autoRef.current)
      autoRef.current = null
    }
  }

  const startAuto = () => {
    clearAuto()
    autoRef.current = window.setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    }, 9000)
  }

  const resetAuto = () => {
    startAuto()
  }

  useEffect(() => {
    startAuto()
    return () => clearAuto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
    resetAuto()
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
    resetAuto()
  }

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      handlePrev()
    } else if (info.offset.x < -swipeThreshold) {
      handleNext()
    }
  }

  const currentMember = teamMembers[currentIndex]
  const nextMember = teamMembers[(currentIndex + 1) % teamMembers.length]
  const prevMember = teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length]

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
      id="team"
      className="relative min-h-[700px] md:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-32 overflow-hidden bg-transparent"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 w-full"
      >
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-foreground"
          >
            Meet Our <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans px-4"
          >
            Passionate educators and technologists building the future of learning
          </motion.p>
        </div>

        <div className="relative min-h-[500px] md:h-[500px] flex items-center justify-center">
          {/* Left peek member - hidden on mobile */}
          <motion.div
            key={`prev-${prevMember.id}`}
            className="hidden lg:flex absolute left-8 w-1/3 h-full items-center justify-center opacity-30 pointer-events-none"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-xs">
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/20 backdrop-blur-md">
                <img
                  src={prevMember.image || "/placeholder.svg"}
                  alt={prevMember.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Center main member */}
          <motion.div
            ref={dragRef}
            key={`center-${currentMember.id}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            drag="x"
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: 0, right: 0 }}
            className="relative w-full md:absolute md:inset-0 flex items-center justify-center z-10 cursor-grab active:cursor-grabbing"
          >
            <div className="w-full max-w-4xl px-2 sm:px-4 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-12 items-center">
                {/* Image with navigation arrows */}
                <motion.div
                  className="relative order-1 md:order-1 w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center justify-center gap-2 md:gap-0 md:block">
                    {/* Back arrow - visible on mobile only */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrev()
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="md:hidden p-2 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 transition-all duration-300 text-foreground"
                      aria-label="Previous member"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    {/* Image container */}
                    <div className="relative md:flex-none w-full md:w-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-amber-200/20 rounded-2xl blur-2xl"></div>
                      <div className="relative rounded-2xl overflow-hidden border border-primary/40 bg-card/40 backdrop-blur-md p-2 max-w-sm mx-auto md:max-w-none">
                        <div className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-24 sm:h-28 md:h-32 rounded-full bg-orange-300/40 blur-3xl opacity-80 z-0" />
                        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 w-[70%] h-16 sm:h-20 md:h-24 rounded-full bg-amber-200/60 blur-2xl opacity-75 z-0" />
                        <div className="pointer-events-none absolute bottom-9 left-1/2 -translate-x-1/2 w-[50%] h-12 sm:h-14 md:h-16 rounded-full bg-orange-200/70 blur-xl opacity-70 z-0" />

                        <img
                          src={currentMember.image || "/placeholder.svg"}
                          alt={currentMember.name}
                          className="relative z-10 w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Forward arrow - visible on mobile only */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNext()
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="md:hidden p-2 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 transition-all duration-300 text-foreground"
                      aria-label="Next member"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>

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
                    {/* Name and greeting */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <p className="text-primary font-sans text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">
                        Hello! I am <span className="text-secondary">{currentMember.name}</span>
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <p className="text-muted-foreground font-sans text-xs sm:text-sm mb-1.5 sm:mb-2">
                          {currentMember.role}
                        </p>
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                          {currentMember.title.split(" ").map((word, i) => (
                            <span key={i}>
                              {i === currentMember.title.split(" ").length - 1 ? (
                                <span className="text-gradient">{word}</span>
                              ) : (
                                word
                              )}{" "}
                            </span>
                          ))}
                        </h3>
                      </div>

                      <div className="hidden md:flex flex-col gap-2 items-center">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleNext()
                          }}
                          whileHover={{ scale: 1.15, x: 2 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 transition-all duration-300 text-foreground flex items-center justify-center"
                          aria-label="Next member"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.button>
                        <div className="text-xs text-muted-foreground">Swipe</div>
                      </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-muted-foreground font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-md mt-2 sm:mt-3"
                    >
                      {currentMember.bio}
                    </motion.p>

                    {/* Social links (kept under the bio) */}
                    <div className="mt-4 sm:mt-5 flex items-center gap-3 sm:gap-4">
                      {currentMember.socials?.linkedin && (
                        <a
                          href={currentMember.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn profile"
                          className="w-9 h-9 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 flex items-center justify-center text-foreground transition"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      )}
                      {currentMember.socials?.leetcode && (
                        <a
                          href={currentMember.socials.leetcode}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LeetCode profile"
                          className="w-9 h-9 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 flex items-center justify-center text-foreground transition"
                        >
                          <Code2 className="w-4 h-4" />
                        </a>
                      )}
                      {currentMember.socials?.github && (
                        <a
                          href={currentMember.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub profile"
                          className="w-9 h-9 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 flex items-center justify-center text-foreground transition"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {currentMember.socials?.telegram && (
                        <a
                          href={currentMember.socials.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Telegram"
                          className="w-9 h-9 rounded-full border border-primary/40 bg-card/40 hover:bg-card/60 hover:border-primary/80 flex items-center justify-center text-foreground transition"
                        >
                          <Send className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right peek member - hidden on mobile */}
          <motion.div
            key={`next-${nextMember.id}`}
            className="hidden lg:flex absolute right-8 w-1/3 h-full items-center justify-center opacity-30 pointer-events-none"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.3, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-xs">
              <div className="rounded-2xl overflow-hidden border border-primary/20 bg-card/20 backdrop-blur-md">
                <img
                  src={nextMember.image || "/placeholder.svg"}
                  alt={nextMember.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom full-width Skills + Experience (moved above controls) */}
        {(currentMember.skills?.length || currentMember.experience?.length) && (
          <div className="mt-8 sm:mt-12 px-6 sm:px-10 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Skills card */}
              {currentMember.skills?.length ? (
                <div className="rounded-2xl border border-primary/20 bg-card/20 backdrop-blur-md p-6 sm:p-8 md:pl-12 lg:pl-16">
                  <h4 className="text-foreground font-semibold text-sm sm:text-base mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {currentMember.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="hidden md:block" />
              )}

              {/* Experience card */}
              {currentMember.experience?.length ? (
                <div className="rounded-2xl border border-primary/20 bg-card/20 backdrop-blur-md p-6 sm:p-8 md:pr-12 lg:pr-16">
                  <h4 className="text-foreground font-semibold text-sm sm:text-base mb-4">Experience</h4>
                  <ul className="space-y-3">
                    {currentMember.experience.map((exp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <div>
                          <p className="text-sm text-foreground">
                            {exp.role} <span className="text-muted-foreground">· {exp.company}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">{exp.period}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-8 md:mt-12">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/40 bg-card/40 backdrop-blur-md hover:border-primary/80 hover:bg-card/60 transition-all duration-300 text-foreground"
            aria-label="Previous member"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Indicators */}
          <div className="flex gap-1.5 sm:gap-2">
            {teamMembers.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  resetAuto()
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-5 sm:w-6 md:w-8"
                    : "bg-primary/30 w-1.5 sm:w-2 hover:bg-primary/60"
                }`}
                aria-label={`Go to member ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 sm:p-2.5 md:p-3 rounded-full border border-primary/40 bg-card/40 backdrop-blur-md hover:border-primary/80 hover:bg-card/60 transition-all duration-300 text-foreground"
            aria-label="Next member"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
