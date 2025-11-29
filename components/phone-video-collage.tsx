"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { PhoneMockup } from "@/components/phone-mockup"
import { useI18n } from "@/lib/i18n"

export function PhoneVideoCollage() {
  const { t } = useI18n()
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

  if (!isMobile) {
    const translate = ["translateY(3rem)", "translateY(-1.8rem)", "translateY(3rem)"]

    return (
      <section className="flex flex-col items-center w-full overflow-hidden py-24">
        {/* Title Section */}
        <div className="mx-auto max-w-[540px] text-center">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#9c40ff] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#9c40ff] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">{t("collage.tag")}</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-4xl md:text-[54px] font-semibold tracking-tighter text-transparent md:leading-[60px] relative z-10">
            {t("collage.title")}
          </h2>
          <p className="mt-4 relative z-10 text-lg text-zinc-500">
            {t("collage.subtitle")}
          </p>
        </div>

        {/* Collage Wrapper (centered vertically) */}
        <div
          className="relative w-full max-w-6xl overflow-hidden mt-12 flex items-center justify-center"
          style={{
            height: "2000px",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              alignItems: "center",
              gap: "3rem",
              transform: "scale(0.7)",
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
        </div>
      </section>
    )
  }

  const mobileOffsets = ["translateY(6rem)", "translateY(-2rem)", "translateY(6rem)"]

  return (
    <section className="flex flex-col justify-start items-center w-full overflow-hidden py-20">
      <div className="mx-auto max-w-[540px] text-center mb-10">
        <div className="flex justify-center">
          <button
            type="button"
            className="group relative z-[60] mx-auto rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#9c40ff] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#9c40ff] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
            <span className="relative text-white">{t("collage.tag")}</span>
          </button>
        </div>
        <h2 className="mt-5 bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-3xl md:text-[40px] font-semibold tracking-tighter text-transparent leading-tight relative z-10">
          {t("collage.title")}
        </h2>
        <p className="mt-3 text-base text-zinc-500">
          {t("collage.subtitle")}
        </p>
      </div>

      {/* Mobile collage centered vertically */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ height: "600px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyItems: "center",
            alignItems: "center",
            gap: "2rem",
            transform: "scale(0.42)",
            transformOrigin: "center center",
          }}
        >
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                transform: mobileOffsets[colIndex],
              }}
            >
              {col.slice(0, 2).map((src, vidIndex) => (
                <motion.div
                  key={vidIndex}
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhoneVideoCollage
