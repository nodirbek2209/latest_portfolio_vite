"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Sparkles } from "lucide-react"

const products = [
    {
        id: 1,
        name: "EduMarkaz",
        image: "/logos/edumarkaz.png",
        description:
            "A modern education hub connecting students, teachers, and education centers with intelligent matching and learning tools.",
        features: ["Teacher & Center Profiles", "Smart Matching", "Ratings & Reviews", "Learning Insights"],
        color: "from-purple-500 to-violet-600",
        link: "https://play.google.com/store/apps/details?id=com.edumarkaz.mobile&pcampaignid=web_share",
    },
    {
        id: 2,
        name: "EduGame",
        image: "/logos/edugame.png",
        description:
            "An engaging gamified learning platform that turns lessons into challenges, rewards progress, and makes studying fun.",
        features: ["Gamified Learning", "Achievements & Rewards", "Leaderboards", "Interactive Challenges"],
        color: "from-fuchsia-500 to-purple-600",
        link: "https://play.google.com/store/apps/details?id=com.edumarkaz.mobile&pcampaignid=web_share",
    },
    {
        id: 3,
        name: "EduManage Soon",
        image: "/logos/edumanage.png",
        description:
            "A complete education management system for schools and learning centers to manage classes, schedules, and performance.",
        features: ["Class Scheduling", "Student Reports", "Payment Tracking", "Center Analytics"],
        color: "from-indigo-500 to-purple-500",
        link: "#",
    },
    {
        id: 4,
        name: "EduQuiz Soon",
        image: "/logos/eduquiz.png",
        description:
            "A smart quiz and assessment system for teachers and institutions to evaluate student knowledge in real time.",
        features: ["Quiz Builder", "Auto Grading", "Performance Tracking", "Result Analytics"],
        color: "from-pink-500 to-violet-600",
        link: "#",
    },
]

export default function ProductsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section id="products" className="relative overflow-hidden py-16 sm:py-24 md:py-32">
            {/* Subtle accent glow */}
            <div className="absolute -bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-3xl select-none z-[-1]" />

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="mx-auto max-w-7xl flex flex-col items-center gap-12 px-4"
            >
                {/* Section Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
                        <span className="text-sm font-medium text-white/80">Products</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
                        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4"
                    >
                        Explore our suite
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Empowering education with innovation — from learning and management to gamification and
                        evaluation.
                    </motion.p>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: 0.08 * (index + 1) }}
                            whileHover={{ y: -6 }}
                            className="group relative rounded-2xl overflow-hidden border bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-lg hover:shadow-[#8b5cf6]/10"
                        >
                            {/* Accent top stripe */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-[#8b5cf6] via-[#8b5cf6]/80 to-transparent"></div>

                            {/* Card Content */}
                            <div className="relative z-10 p-6 flex flex-col h-full">
                                {/* Logo */}
                                <motion.div
                                    className="relative w-24 h-24 rounded-xl overflow-hidden mb-4 bg-white/80 shadow-md shadow-black/10"
                                    whileHover={{ rotate: -6, scale: 1.06 }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Title */}
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                    className="text-xl font-bold text-white mb-2"
                                >
                                    {product.name}
                                </motion.h3>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 * (index + 1) }}
                                    className="text-white/60 text-sm mb-5 leading-relaxed"
                                >
                                    {product.description}
                                </motion.p>

                                {/* Features */}
                                <div className="space-y-3 flex-grow">
                                    <p className="text-xs uppercase tracking-wider text-white/55">Key features</p>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                transition={{ duration: 0.45, delay: 0.08 * index + 0.04 * i }}
                                                className="flex items-center gap-2 text-sm text-white/80"
                                            >
                                                <Check className="w-4 h-4 text-[#8b5cf6]" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-6">
                                    {product.link === "#" ? (
                                        <div className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white/70 text-sm cursor-not-allowed">
                                            Coming Soon
                                        </div>
                                    ) : (
                                        <motion.a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9]/80 text-white text-sm font-semibold shadow-lg shadow-[#8b5cf6]/20 hover:shadow-[#8b5cf6]/35"
                                        >
                                            <img
                                                src="/icons/playmarket.png"
                                                alt="Play Market"
                                                width={18}
                                                height={18}
                                                className="opacity-90"
                                            />
                                            <span>Get it on Play Store</span>
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
