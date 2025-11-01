"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/home/hero.tsx"
import Features from "@/components/features.tsx"
import { TestimonialsSection } from "@/components/testimonials.tsx"
import { FAQSection } from "@/components/faq-section.tsx"
import { PricingSection } from "@/components/pricing-section.tsx"
import { StickyFooter } from "@/components/sticky-footer.tsx"
import TeamSection from "@/components/team-section.tsx"
import AchievementsSection from "@/components/achievements-section.tsx"
import ProductsSection from "@/components/products-section.tsx"
import AboutSection from "@/components/about-section.tsx"

import { CommentsSection } from "@/components/comments-section.tsx"
import { ContactUsSection } from "@/components/contact-us-section.tsx"
import PhoneVideoCollage from "@/components/phone-video-collage.tsx"
import AnimatedBeamDemo from "@/components/animated-beam-demo.tsx";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Smooth scroll to top for logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }



  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Blue gradient blob 1 - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-60"></div>

        {/* Blue gradient blob 2 - top right */}
        <div className="absolute -top-20 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl opacity-50"></div>

        {/* Blue gradient blob 3 - center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-40"></div>

        {/* Blue gradient blob 4 - bottom left */}
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl opacity-50"></div>

        {/* Blue gradient blob 5 - bottom right */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-60"></div>

        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 backdrop-blur-2xl"></div>
      </div>

      <header
        className="fixed top-4 z-[9999] left-1/2 -translate-x-1/2 hidden w-full max-w-5xl flex-row items-center justify-between self-start rounded-2xl bg-background/80 md:flex backdrop-blur-md border border-border/50 shadow-lg transition-all duration-300 px-4 py-2"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        {/* Replace external v0 link + SVG with local logo that scrolls to top */}
        <button
          type="button"
          aria-label="Go to top"
          onClick={handleLogoClick}
          className={`z-50 flex items-center justify-center transition-all duration-300 rounded-none bg-transparent p-0 m-0 ${
            isScrolled ? "ml-4" : ""
          }`}
        >
          <img
            src="/mark.png"
            alt="Eduoila logo"
            className="h-10 w-auto rounded-none object-contain bg-transparent"
          />
        </button>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("features")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">Features</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("about")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">About</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("products")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">Products</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("team")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">Team</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("pricing")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">Pricing</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("testimonials")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">Testimonials</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("faq")
              if (element) {
                const headerOffset = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - headerOffset
                window.scrollTo({ top: offsetPosition, behavior: "smooth" })
              }
            }}
          >
            <span className="relative z-20">FAQ</span>
          </a>
        </div>
      </header>

      <header className="fixed top-4 z-[9999] left-4 right-4 flex flex-row items-center justify-between rounded-2xl bg-background/80 backdrop-blur-md border border-border/50 shadow-lg md:hidden px-4 py-3">
        {/* Replace external v0 link + SVG with local logo that scrolls to top (mobile) */}
        <button
          type="button"
          aria-label="Go to top"
          onClick={handleLogoClick}
          className="flex items-center justify-center rounded-none bg-transparent p-0 m-0"
        >
          <img
            src="/mark.png"
            alt="Eduoila logo"
            className="h-7 w-auto rounded-none object-contain bg-transparent"
          />
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-background/50 border border-border/50 transition-all hover:bg-background/80 hover:scale-105"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 rounded-full ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 rounded-full ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 rounded-full ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute top-24 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Features
              </button>
              <button
                onClick={() => handleMobileNavClick("about")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavClick("products")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Products
              </button>
              <button
                onClick={() => handleMobileNavClick("team")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Team
              </button>
              <button
                onClick={() => handleMobileNavClick("pricing")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Pricing
              </button>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                FAQ
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Team first */}
      <div id="team" className="relative z-10">
        <TeamSection />
      </div>

      {/* EduOila second */}
      <div id="about" className="relative z-10">
        <AboutSection />
      </div>

      {/* Animated Beam third */}
      <div className="w-full py-20 px-4 relative z-10">
        <AnimatedBeamDemo />
      </div>

      {/* Products */}
      <div id="products" className="relative z-10">
        <ProductsSection />
      </div>

      {/* Phone Collage (inserted after Products) */}
      <div className="relative z-10">
        <PhoneVideoCollage />
      </div>

      {/* Achievements */}
      <div id="achievements" className="relative z-10">
        <AchievementsSection />
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10">
        <Features />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="relative z-10">
        <TestimonialsSection />
      </div>

      <div className="relative z-10">
        <CommentsSection />
      </div>

      <div className="relative z-10" id="contact-us">
        <ContactUsSection />
      </div>

      {/*<div className="relative z-10">*/}
      {/*  <NewReleasePromo />*/}
      {/*</div>*/}

      {/* FAQ Section */}
      <div id="faq" className="relative z-10">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <div className="relative z-10">
        <StickyFooter />
      </div>
    </div>
  )
}
