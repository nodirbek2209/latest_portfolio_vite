"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
    }

    const faqs = [
        {
            question: "What is EduMarkaz?",
            answer:
                "EduMarkaz is an innovative education management platform designed to connect students, teachers, and education centers. It provides tools for managing courses, results, and reviews in a single integrated ecosystem.",
        },
        {
            question: "What does EduManage offer?",
            answer:
                "EduManage is our professional platform tailored for education administrators. It helps centers manage classes, track performance, handle payments, and generate reports effortlessly using modern dashboards.",
        },
        {
            question: "Do you provide IT consulting for education businesses?",
            answer:
                "Yes. Our team specializes in IT consulting for education startups and organizations — from system architecture and database design to full product development using Flutter, FastAPI, and modern cloud technologies.",
        },
        {
            question: "Can you develop custom software or mobile apps for our institution?",
            answer:
                "Absolutely. We offer custom web and mobile app development based on your specific requirements, including student management systems, learning platforms, and internal analytics dashboards.",
        },
        {
            question: "What technologies does your team use?",
            answer:
                "Our tech stack includes Flutter, FastAPI, React, TailwindCSS, Supabase, Docker, and Dart. We focus on creating scalable, maintainable systems with seamless performance and intuitive design.",
        },
    ]

    return (
        <section id="faq" className="relative overflow-hidden pb-32 pt-24">
            {/* Purple background gradient glows for dark BG */}
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#7c3aed]/30 to-[#a78bfa]/20 blur-3xl opacity-80 z-[-1]" />
            <div className="absolute -bottom-24 -left-28 h-96 w-96 rounded-full bg-gradient-to-tr from-[#6d28d9]/20 to-[#8b5cf6]/18 blur-3xl opacity-80 z-[-1]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

            <div className="z-10 container mx-auto px-4">
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase bg-gradient-to-r from-[#7c3aed]/10 to-[#6d28d9]/6 border-[#7c3aed]/30 text-[#e9d5ff]">
                        <span className="text-[#c4b5fd]">✶</span>
                        <span className="text-sm font-medium">FAQs</span>
                    </div>
                </motion.div>

                <motion.h2
                    className="mx-auto mt-6 max-w-3xl text-center text-4xl font-semibold md:text-[50px] md:leading-[56px] text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Frequently Asked{" "}
                    <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#d946ef] bg-clip-text text-transparent">
                        Questions
                    </span>
                </motion.h2>

                <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-6">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl border bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-black/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/40 p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.995 }}
                            onClick={() => toggleItem(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault()
                                    toggleItem(index)
                                }
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <h3 className="m-0 font-medium text-white pr-4 text-lg">{faq.question}</h3>
                                <motion.div
                                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    {openItems.includes(index) ? (
                                        <Minus className="text-[#c4b5fd] flex-shrink-0 transition duration-300" size={24} />
                                    ) : (
                                        <Plus className="text-[#c4b5fd] flex-shrink-0 transition duration-300" size={24} />
                                    )}
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openItems.includes(index) && (
                                    <motion.div
                                        className="mt-4 text-white/75 leading-relaxed overflow-hidden"
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                            opacity: { duration: 0.2 },
                                        }}
                                    >
                                        {faq.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
