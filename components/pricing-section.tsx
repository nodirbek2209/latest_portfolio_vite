"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
    {
        name: "EduMarkaz",
        price: "Free",
        description: "A free platform connecting students, teachers, and education centers.",
        features: [
            "Public profiles & discovery",
            "Ratings & reviews",
            "Basic search & filters",
            "Mobile & web access",
        ],
        popular: false,
        cta: "Start Free",
        type: "free",
    },
    {
        name: "EduManage + EduQuiz",
        monthlyPrice: 29,
        annualPrice: 20,
        description: "Professional tools for managing education centers, classes, and quizzes.",
        features: [
            "Class & schedule management",
            "Teacher workload & attendance",
            "Payments & reports",
            "Quiz creation & analytics",
            "Parent notifications",
            "Student progress tracking",
        ],
        popular: true,
        cta: "Start Subscription",
        type: "subscription",
    },
    {
        name: "Consulting & Custom Projects",
        startingPrice: 500,
        description: "Portfolio websites, mobile APKs, and custom solutions — built just for you.",
        features: [
            "Custom UI/UX & branding",
            "Next.js & Flutter development",
            "FastAPI & GraphQL backend setup",
            "Deployment & analytics integration",
            "SEO optimization",
        ],
        popular: false,
        cta: "Request Quote",
        type: "onetime",
    },
]

export function PricingSection() {
    const [isAnnual, setIsAnnual] = useState(false)

    return (
        <section className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-[#7c3aed]" />
                        <span className="text-sm font-medium text-white/80">Pricing</span>
                    </motion.div>

                    <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
                        EduOila products & services
                    </h2>

                    <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
                        EduMarkaz is free forever. EduManage + EduQuiz are subscription-based. Consulting projects start at $500 — no yearly plan.
                    </p>

                    {/* Monthly/Annual Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center gap-4 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm w-fit mx-auto"
                    >
                        <button
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                !isAnnual ? "bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white shadow-lg" : "text-white/60 hover:text-white/80"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                                isAnnual ? "bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white shadow-lg" : "text-white/60 hover:text-white/80"
                            }`}
                        >
                            Annual
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 31%
              </span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 ${
                                plan.popular
                                    ? "bg-gradient-to-b from-[#7c3aed]/10 to-transparent border-[#7c3aed]/30 shadow-lg shadow-[#7c3aed]/10"
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white text-sm font-medium px-4 py-2 rounded-full">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                    {plan.type === "free" && <span className="text-4xl font-bold text-white">{plan.price}</span>}

                                    {plan.type === "subscription" && (
                                        <>
                      <span className="text-4xl font-bold text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                                            <span className="text-white/60 text-lg">{isAnnual ? "/month (billed yearly)" : "/month"}</span>
                                        </>
                                    )}

                                    {plan.type === "onetime" && (
                                        <>
                                            <span className="text-4xl font-bold text-white">${plan.startingPrice}+</span>
                                            <span className="text-white/60 text-lg">/one-time</span>
                                        </>
                                    )}
                                </div>
                                <p className="text-white/60 text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-[#7c3aed]" />
                                        <span className="text-white/80 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                                    plan.popular
                                        ? "bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white shadow-lg shadow-[#7c3aed]/25 hover:shadow-[#7c3aed]/40"
                                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                                }`}
                            >
                                {plan.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-white/60 mb-4">
                        Need a unique project? We build custom portfolio websites, APKs, and integrations for any business.
                    </p>
                    <a href={"#consulting"}>
                        <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#a78bfa] hover:text-[#a78bfa]/80 font-medium transition-colors"
                    >
                        Contact our team →
                    </motion.button>
                    </a>

                </motion.div>
            </div>
        </section>
    )
}
