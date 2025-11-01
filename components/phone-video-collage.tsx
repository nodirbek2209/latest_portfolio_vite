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

  // 💻 Desktop & Laptop layout
  if (!isMobile) {
    const translate = ["translateY(3rem)", "translateY(-1.8rem)", "translateY(3rem)"]

    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
          margin: "0 auto",
          padding: "0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyItems: "center",
            alignItems: "center",
            gap: "3rem",
            transform: "scale(0.6)",
            transformOrigin: "center center",
            transition: "all 0.4s ease",
            margin: "0 auto",
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
              }}
            >
              {col.map((src, vidIndex) => (
                <motion.div
                  key={vidIndex}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  whileHover={{ scale: 1.05, rotate: Math.random() * 6 - 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhoneMockup videoSrc={src} />
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
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          justifyItems: "center",
          alignItems: "center",
          gap: "2rem",
          transform: "scale(0.38)",
          transformOrigin: "center center",
          width: "fit-content",
        }}
      >
        {shuffled.slice(0, 6).map((src, i) => (
          <motion.div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            whileHover={{ scale: 1.04, rotate: Math.random() * 5 - 2.5 }}
            transition={{ duration: 0.3 }}
          >
            <PhoneMockup videoSrc={src} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PhoneVideoCollage
