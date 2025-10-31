"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
    ({ className, children }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_25px_-12px_rgba(0,0,0,0.8)]",
                    className,
                )}
            >
                {children}
            </div>
        )
    },
)

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Left side circles
    const leftRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null))
    // Right side circles
    const rightRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null))
    // Center circle
    const centerRef = useRef<HTMLDivElement>(null)

    const beams = [
        { from: leftRefs[0], to: centerRef, curvature: 90, endYOffset: -20 },
        { from: leftRefs[1], to: centerRef, curvature: 45, endYOffset: -10 },
        { from: leftRefs[2], to: centerRef, curvature: 0, endYOffset: 0 },
        { from: leftRefs[3], to: centerRef, curvature: -45, endYOffset: 10 },
        { from: leftRefs[4], to: centerRef, curvature: -90, endYOffset: 20 },
        { from: rightRefs[0], to: centerRef, curvature: 90, endYOffset: -20, reverse: true },
        { from: rightRefs[1], to: centerRef, curvature: 45, endYOffset: -10, reverse: true },
        { from: rightRefs[2], to: centerRef, curvature: 0, endYOffset: 0, reverse: true },
        { from: rightRefs[3], to: centerRef, curvature: -45, endYOffset: 10, reverse: true },
        { from: rightRefs[4], to: centerRef, curvature: -90, endYOffset: 20, reverse: true },
    ]

    // Tech stack images
    const leftIcons = [
        { src: "/icons/fastapi.png", label: "FastAPI" },
        { src: "/icons/graphql.png", label: "GraphQL" },
        { src: "/icons/restapi.png", label: "REST API" },
        { src: "/icons/python.png", label: "Python" },
        { src: "/icons/docker.png", label: "Docker" },
    ]

    const rightIcons = [
        { src: "/icons/react.png", label: "React" },
        { src: "/icons/tailwind.png", label: "TailwindCSS" },
        { src: "/icons/flutter.png", label: "Flutter" },
        { src: "/icons/bloc.png", label: "BLoC" },
        { src: "/icons/dart.png", label: "Dart" },
    ]

    return (
        <div className="space-y-16">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    <span className="font-sans text-foreground">Powered by </span>
                    <span className="font-serif text-foreground">Modern </span>
                    <span className="text-gradient font-serif">Technologies</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Seamlessly integrating the best tools and frameworks to deliver{" "}
                    <span className="text-gradient font-serif">cutting-edge solutions</span>
                </p>
            </div>

            {/* Animated Beam Section */}
            <div
                className="relative flex w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
                ref={containerRef}
            >
                <div className="flex size-full max-h-[420px] max-w-6xl flex-row items-center justify-between gap-20">
                    {/* Left side icons */}
                    <div className="flex flex-col items-center justify-center gap-8">
                        {leftIcons.map((item, index) => (
                            <Circle key={index} ref={leftRefs[index]}>
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </Circle>
                        ))}
                    </div>

                    {/* Center circle (EduOila logo) */}
                    <Circle ref={centerRef} className="size-20 bg-white">
                        <img
                            src="/eduoila_logo.png"
                            alt="AI"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </Circle>

                    {/* Right side icons */}
                    <div className="flex flex-col items-center justify-center gap-8">
                        {rightIcons.map((item, index) => (
                            <Circle key={index} ref={rightRefs[index]}>
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </Circle>
                        ))}
                    </div>
                </div>

                {/* Beams animation */}
                {beams.map((beam, index) => (
                    <AnimatedBeam
                        key={index}
                        containerRef={containerRef}
                        fromRef={beam.from}
                        toRef={beam.to}
                        curvature={beam.curvature}
                        endYOffset={beam.endYOffset}
                        reverse={beam.reverse}
                        gradientStartColor="#6366f1"
                        gradientStopColor="#ec4899"
                    />
                ))}
            </div>
        </div>
    )
}
