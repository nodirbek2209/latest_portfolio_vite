"use client"

import { useState, useEffect } from "react"
import { Marquee } from "@/components/magicui/marquee"

interface Testimonial {
    id?: string
    name: string
    username?: string
    body: string
    img?: string
    comment?: string
    timestamp?: string
}

const MOCK_TESTIMONIALS: Testimonial[] = [
    {
        name: "Miraziz Hakimjonov",
        username: "@miraziz",
        body: "EduOila and their consulting team built a complete digital system for our education center — website, mobile app, and management tools. They truly understood our workflow and made it smarter.",
        img: "/miraziz.jpg",
    },
    {
        name: "Iftikhorbek Muminov",
        username: "@softwareEngineer",
        body: "Their consulting and development service turned our ideas into a working platform — from backend to mobile APK. The team combines creativity with solid technical expertise.",
        img: "/iftixor.jpg",
    },
    {
        name: "Oybek Mahmudjonov",
        username: "@economist",
        body: "As a private tutor, I needed a personal portfolio and scheduling tool. EduOila’s team delivered a modern website and app integration that made managing lessons effortless.",
        img: "/oybek.jpg",
    },
    {
        name: "Muhammad Yunus",
        username: "@MuhammadYunus",
        body: "We partnered with EduOila Consulting for a full-scale digital transformation — from branding and website design to data automation. Their work helped us scale faster and operate efficiently.",
        img: "muhammadYunus.jpg",
    },
    {
        name: "Farhod Ro'ziboyev",
        username: "@farhod",
        body: "The EduOila Consulting team developed our custom business website and mobile solution exactly how we envisioned it. Clear communication, fast delivery, and professional results.",
        img: "/farhod.jpg",
    },
    {
        name: "Compass Education Center",
        username: "@compassEdu",
        body: "EduOila Consulting transformed our education center's digital presence with a sleek website and user-friendly mobile app. Their expertise in both design and functionality exceeded our expectations.",
        img: "/compass.jpg",
    },

    {
        name: "Abdulhafiz Abduraimov",
        username: "@abdulhafiz",
        body: "Their consulting team helped us design a digital strategy and create a custom APK for our platform. EduOila delivers both technology and business insight — a rare combination.",
        img: "/abdulhafiz_abduraimov.jpg",
    },
]


const TestimonialCard = ({
                             img,
                             name,
                             username,
                             body,
                         }: {
    img?: string
    name: string
    username?: string
    body: string
}) => {
    return (
        <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
            <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

            <div className="text-white/90 leading-relaxed">{body}</div>

            <div className="mt-5 flex items-center gap-2">
                <img src={img || "/placeholder.svg"} alt={name} height="40" width="40" className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                    <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
                    {username && <div className="leading-5 tracking-tight text-white/60">{username}</div>}
                </div>
            </div>
        </div>
    )
}

export function TestimonialsSection() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(MOCK_TESTIMONIALS)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchTestimonials = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("/api/comments", {
                    method: "GET",
                })

                if (response.ok) {
                    const data = await response.json()
                    // Transform comments to testimonials format
                    const fetchedTestimonials =
                        data.comments?.map((comment: any) => ({
                            name: comment.name,
                            username: comment.username || `@${comment.name.toLowerCase().replace(/\s+/g, "")}`,
                            body: comment.comment || comment.body,
                            img:
                                comment.img || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.name)}&background=random`,
                        })) || MOCK_TESTIMONIALS

                    setTestimonials(fetchedTestimonials)
                } else {
                    // Always use mock data if request fails
                    setTestimonials(MOCK_TESTIMONIALS)
                }
            } catch (error) {
                // Always use mock data as fallback
                setTestimonials(MOCK_TESTIMONIALS)
            } finally {
                setIsLoading(false)
            }
        }

        fetchTestimonials()

        const handleNewComment = (event: CustomEvent) => {
            const newComment = event.detail
            const newTestimonial: Testimonial = {
                id: newComment.id,
                name: newComment.name,
                username: `@${newComment.name.toLowerCase().replace(/\s+/g, "")}`,
                body: newComment.comment,
                img: newComment.img,
            }
            setTestimonials((prev) => [newTestimonial, ...prev])
        }

        window.addEventListener("newComment" as any, handleNewComment as any)

        return () => {
            window.removeEventListener("newComment" as any, handleNewComment as any)
        }
    }, [])

    const firstColumn = testimonials.slice(0, Math.ceil(testimonials.length / 3))
    const secondColumn = testimonials.slice(Math.ceil(testimonials.length / 3), Math.ceil((testimonials.length * 2) / 3))
    const thirdColumn = testimonials.slice(Math.ceil((testimonials.length * 2) / 3))

    return (
        <section id="testimonials" className="mb-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-[540px]">
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
                        >
                            <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                            <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
                            <span className="relative text-white">Testimonials</span>
                        </button>
                    </div>
                    <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
                        What our users say
                    </h2>

                    <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
                        From intuitive design to powerful features, our app has become an essential tool for users around the world.
                    </p>
                </div>

                {isLoading ? (
                    <div className="my-16 text-center text-muted-foreground">Loading testimonials...</div>
                ) : (
                    <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                        <div>
                            <Marquee pauseOnHover vertical className="[--duration:20s]">
                                {firstColumn.map((testimonial, index) => (
                                    <TestimonialCard key={testimonial.username || index} {...testimonial} />
                                ))}
                            </Marquee>
                        </div>

                        <div className="hidden md:block">
                            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
                                {secondColumn.map((testimonial, index) => (
                                    <TestimonialCard key={testimonial.username || index} {...testimonial} />
                                ))}
                            </Marquee>
                        </div>

                        <div className="hidden lg:block">
                            <Marquee pauseOnHover vertical className="[--duration:30s]">
                                {thirdColumn.map((testimonial, index) => (
                                    <TestimonialCard key={testimonial.username || index} {...testimonial} />
                                ))}
                            </Marquee>
                        </div>
                    </div>
                )}

                <div className="-mt-8 flex justify-center">
                    <a
                        href="#comments"
                        className="group relative inline-flex items-center gap-2 rounded-full border border-[#e78a53]/30 bg-black/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#e78a53]/60 hover:bg-[#e78a53]/10 active:scale-95"
                    >
                        <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#e78a53]/40 to-transparent"></div>
                        <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#e78a53]/40 to-transparent"></div>
                        <svg className="h-4 w-4 text-[#e78a53]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                        Share your experience
                    </a>
                </div>
            </div>
        </section>
    )
}
