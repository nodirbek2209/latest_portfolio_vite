"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PhoneMockup } from "@/components/phone-mockup"

export function PhoneVideoCollage() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    const allVideos: string[] = [
        "/videos/video1.webm",
        "/videos/video2.webm",
        "/videos/video3.webm",
        "/videos/video4.webm",
        "/videos/video5.webm",
        "/videos/video6.webm",
        "/videos/video7.webm",
        "/videos/video8.webm",
        "/videos/video9.webm",
        "/videos/video10.webm",
        "/videos/video11.webm",
        "/videos/video12.webm",
    ]

    const shuffled = [...allVideos].sort(() => 0.5 - Math.random())
    const columns: string[][] = [[], [], []]
    shuffled.forEach((v, i) => columns[i % 3].push(v))

    // 💻 Desktop layout
    if (!isMobile) {
        const translate = ["translateY(3rem)", "translateY(-1.8rem)", "translateY(3rem)"]

        return (
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0",
                    flexDirection: "column",
                    padding: "0",
                    maxHeight: "1800px",
                }}
            >
                <div
                    style={{
                        width: "68vw",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        justifyItems: "center",
                        gap: "2.5rem",
                        transform: "scale(0.55)",
                        transformOrigin: "center",
                        transition: "all 0.5s ease",
                        margin: "0",
                        padding: "0",
                    }}
                >
                    {columns.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "3rem",
                                transform: translate[colIndex],
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {col.map((src, vidIndex) => (
                                <motion.div
                                    key={vidIndex}
                                    style={{
                                        margin: 0,
                                        padding: 0,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ margin: 0, padding: 0 }}>
                                        <PhoneMockup videoSrc={src} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    // 📱 Mobile layout
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxHeight: "900px",
                padding: "0",
                margin: "0",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    justifyItems: "center",
                    alignItems: "center",
                    gap: "1.8rem",
                    transform: "scale(0.36)",
                    transformOrigin: "center",
                    width: "fit-content",
                    padding: "0",

                }}
            >
                {shuffled.slice(0, 6).map((src, i) => (
                    <motion.div
                        key={i}
                        style={{
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        whileHover={{ scale: 1.04, rotate: Math.random() * 5 - 2.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{ margin: 0, padding: 0 }}>
                            <PhoneMockup videoSrc={src} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default PhoneVideoCollage

