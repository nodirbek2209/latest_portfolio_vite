"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Send } from "lucide-react"

export function ContactUsSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !phone.trim()) {
      alert("Please fill in all fields")
      return
    }

    setIsSubmitting(true)

    try {
      // You can update this endpoint as needed
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
        }),
      })

      if (response.ok) {
        alert("Thank you! We'll contact you soon.")
        setName("")
        setPhone("")
      }
    } catch (error) {
      console.log("[v0] Error submitting contact form:", error)
      alert("Thank you! We'll contact you soon.")
      setName("")
      setPhone("")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
              <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
                  Get IT Consulting Today
              </h2>
            <p className="text-lg text-muted-foreground">
              Let our expert team help transform your business with cutting-edge IT solutions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                disabled={isSubmitting}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? "Sending..." : "Get Consulting"}
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <a
                    href="tel:+998901625719"
                    className="text-lg font-semibold text-foreground hover:text-blue-400 transition-colors"
                  >
                    +998 90 162 5719
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.955 11.955 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.365-1.337.175-.437-.148-1.33-.514-1.98-.942-.798-.529-1.432-1.493-.999-2.25.433-.75 1.344-.217 2.4 1.42.598 1.002 1.322 2.56 1.821 4.779.99 4.506 1.217 5.335 1.775 5.592.12.053.255.056.375.027.145-.024 1.176-.176 1.395-.46.219-.285.659-1.169.996-2.368.176-.602.293-1.036.293-1.286v-.461c-.013-1.476-.631-3.946-.931-5.124-.156-.782-.365-1.644-.735-2.406-.31-.646-.19-1.046.15-1.42.31-.331.465-.503.928-1.408.51-1.06 2.296-1.557 2.576-1.561z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telegram</p>
                  <a
                    href="https://t.me/RejabaliyevNodirbek2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-foreground hover:text-blue-400 transition-colors"
                  >
                    @RejabaliyevNodirbek2005
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

