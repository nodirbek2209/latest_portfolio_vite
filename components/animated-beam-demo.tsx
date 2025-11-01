"use client"

import * as React from "react"
import { forwardRef, useMemo, useRef, createRef } from "react"
import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_25px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  ),
)
Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Left & right refs
    const leftRefs = useMemo(() => Array.from({ length: 5 }, () => createRef<HTMLDivElement>()), [])
    const rightRefs = useMemo(() => Array.from({ length: 5 }, () => createRef<HTMLDivElement>()), [])
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
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="font-sans text-foreground"><h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
                        Powered by
                    </h2> </span>
            <span className="font-serif text-foreground">Modern </span>
            <span className="text-gradient font-serif">Technologies</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrating the best tools and frameworks to deliver{" "}
            <span className="text-gradient font-serif">cutting-edge solutions</span>
          </p>
        </div>

        <div
          className="relative flex w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
          ref={containerRef}
        >
          <div className="flex size-full max-h-[420px] max-w-6xl flex-row items-center justify-between gap-20">
            <div className="flex flex-col items-center justify-center gap-8">
              {leftIcons.map((item, i) => (
                <Circle key={i} ref={leftRefs[i]}>
                  <img src={item.src} alt={item.label} width={40} height={40} className="object-contain" />
                </Circle>
              ))}
            </div>

            <Circle ref={centerRef} className="size-20 bg-white">
              <img src="/eduoila_logo.png" alt="EduOila" width={48} height={48} className="object-contain" />
            </Circle>

            <div className="flex flex-col items-center justify-center gap-8">
              {rightIcons.map((item, i) => (
                <Circle key={i} ref={rightRefs[i]}>
                  <img src={item.src} alt={item.label} width={40} height={40} className="object-contain" />
                </Circle>
              ))}
            </div>
          </div>

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
