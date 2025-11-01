"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export default function Hero() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col">
            <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
                <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            EduOila Ecosystem
                        </Badge>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Building the <strong>Future </strong>
                            <br />
                            Through <em className="italic font-serif text-gradient"> Technology & Strategy </em>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
                    >
                        EduOila unites technology and consulting to help education centers,
                        startups, and institutions grow smarter and faster.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex items-center justify-center">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.edumarkaz.mobile&pcampaignid=web_share"
                                // onClick={(e) => {
                                //     e.preventDefault()
                                //     const el = document.getElementById("contact")
                                //     if (el) {
                                //         const offset = el.getBoundingClientRect().top + window.pageYOffset - 120
                                //         window.scrollTo({ top: offset, behavior: "smooth" })
                                //     }
                                // }}
                            >
                                <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                                        <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-phone"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                            Get EduMarkaz
                                        </p>
                                    </div>
                                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-auto pb-8"
                >
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-6">
                            We are made by those
                        </p>
                        <div className="flex items-center justify-center gap-8">
                            <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-300">
                                <img src="/newuu_logo.png" alt="NewUU" className="h-10 object-contain" />
                            </div>
                            <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-300">
                                <img
                                    src="/presidential_school.png"
                                    alt="Presidential Schools"
                                    className="h-10 object-contain"

                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
