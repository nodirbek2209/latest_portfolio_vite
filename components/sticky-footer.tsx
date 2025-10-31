"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Home, Instagram, Youtube, Send } from "lucide-react"

export function StickyFooter() {
    const [isAtBottom, setIsAtBottom] = useState(false)

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY
                    const windowHeight = window.innerHeight
                    const documentHeight = document.documentElement.scrollHeight
                    const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

                    setIsAtBottom(isNearBottom)
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const LINKS = {
        telegram: "https://t.me/your_handle",
        instagram: "https://instagram.com/your_profile",
        youtube: "https://youtube.com/@your_channel",
    }

    return (
        <AnimatePresence>
            {isAtBottom && (
                <motion.div
                    className="fixed bottom-0 left-0 z-50 w-full h-80 flex justify-center items-center overflow-hidden"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* 🟣 Glassmorphic Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-violet-700/60 to-indigo-800/70 backdrop-blur-2xl border-t border-white/20 shadow-2xl" />

                    {/* ✨ Inner Content */}
                    <div className="relative w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
                        <motion.div
                            className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Telegram */}
                            <a
                                href={LINKS.telegram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Telegram"
                                className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Send className="h-5 w-5 text-white" />
                            </a>

                            {/* Instagram */}
                            <a
                                href={LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Instagram"
                                className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="h-5 w-5 text-white" />
                            </a>

                            {/* Scroll to Top */}
                            <button
                                type="button"
                                aria-label="Go to top"
                                onClick={scrollToTop}
                                className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Home className="h-5 w-5 text-white" />
                            </button>

                            {/* YouTube */}
                            <a
                                href={LINKS.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open YouTube"
                                className="h-12 w-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                            >
                                <Youtube className="h-5 w-5 text-white" />
                            </a>
                        </motion.div>

                        {/* 🟣 Large Blurred Text */}
                        <motion.h2
                            className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[90px] font-extrabold select-none text-transparent bg-clip-text bg-gradient-to-r from-purple-300/90 via-white/80 to-purple-200/80 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            EduOila
                        </motion.h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
