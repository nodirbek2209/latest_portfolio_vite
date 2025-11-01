// src/components/FollowerPointerCard.tsx

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useMotionValue, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

type FollowerPointerCardProps = {
  children: React.ReactNode
  className?: string
  title?: string | React.ReactNode
}

export const FollowerPointerCard: React.FC<FollowerPointerCardProps> = ({
  children,
  className,
  title,
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = useRef<HTMLDivElement>(null)
  const [, setRect] = useState<DOMRect | null>(null)

  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect())
      }
    }

    updateRect()
    window.addEventListener("resize", updateRect)
    window.addEventListener("scroll", updateRect)

    return () => {
      window.removeEventListener("resize", updateRect)
      window.removeEventListener("scroll", updateRect)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX)
    y.set(e.clientY)
  }

  const handleMouseLeave = () => setIsInside(false)
  const handleMouseEnter = () => setIsInside(true)

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn("relative", className)}
      style={{ cursor: "none" }}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  )
}

type FollowPointerProps = {
  x: MotionValue<number>
  y: MotionValue<number>
  title?: string | React.ReactNode
}

export const FollowPointer: React.FC<FollowPointerProps> = ({ x, y, title }) => {
  return (
    <motion.div
      className="fixed z-[99999] pointer-events-none"
      style={{
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <div className="flex items-center pointer-events-none">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -rotate-[70deg] transform stroke-orange-400 text-orange-500 drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <motion.div
          className="ml-2 min-w-max rounded-full px-2 py-1 text-xs whitespace-nowrap text-white shadow-lg border border-white/20"
          style={{ backgroundColor: "#e78a53" }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          {title || "Dynamic Layout"}
        </motion.div>
      </div>
    </motion.div>
  )
}
