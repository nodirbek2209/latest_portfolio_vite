import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrambleHoverProps {
  text: string
  scrambleSpeed?: number
  maxIterations?: number
  sequential?: boolean
  revealDirection?: "start" | "end" | "center"
  useOriginalCharsOnly?: boolean
  characters?: string
  className?: string
  scrambledClassName?: string
  isHovering?: boolean
  setIsHovering?: (isHovering: boolean) => void
}

const ScrambleHover = ({
  text,
  scrambleSpeed = 50,
  maxIterations = 10,
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className,
  scrambledClassName,
  sequential = false,
  revealDirection = "start",
  isHovering,
  setIsHovering,
  ...props
}: ScrambleHoverProps) => {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices] = useState<Set<number>>(new Set())

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    let currentIteration = 0

    const availableChars = useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((c) => c !== " ")
      : characters.split("")

    const getNextIndex = (): number => {
      const len = text.length
      if (revealDirection === "start") return revealedIndices.size
      if (revealDirection === "end") return len - 1 - revealedIndices.size
      if (revealDirection === "center") {
        const middle = Math.floor(len / 2)
        const offset = Math.floor(revealedIndices.size / 2)
        const next =
          revealedIndices.size % 2 === 0
            ? middle + offset
            : middle - offset - 1
        return Math.max(0, Math.min(len - 1, next))
      }
      return revealedIndices.size
    }

    const shuffleText = (txt: string): string => {
      return txt
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (revealedIndices.has(i)) return txt[i]
          const randomChar =
            availableChars[Math.floor(Math.random() * availableChars.length)]
          return randomChar
        })
        .join("")
    }

    if (isHovering) {
      setIsScrambling(true)
      interval = setInterval(() => {
        if (sequential) {
          if (revealedIndices.size < text.length) {
            const next = getNextIndex()
            revealedIndices.add(next)
            setDisplayText(shuffleText(text))
          } else {
            clearInterval(interval)
            setIsScrambling(false)
          }
        } else {
          setDisplayText(shuffleText(text))
          currentIteration++
          if (currentIteration >= maxIterations) {
            clearInterval(interval)
            setIsScrambling(false)
            setDisplayText(text)
          }
        }
      }, scrambleSpeed)
    } else {
      setDisplayText(text)
      revealedIndices.clear()
    }

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isHovering,
    text,
    characters,
    scrambleSpeed,
    useOriginalCharsOnly,
    sequential,
    revealDirection,
    maxIterations,
  ])

  return (
    <motion.span
      onHoverStart={() => setIsHovering?.(true)}
      onHoverEnd={() => setIsHovering?.(false)}
      className={cn("inline-block whitespace-pre-wrap", className)}
      {...props}
    >
      {displayText.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            revealedIndices.has(i) || !isScrambling || !isHovering
              ? className
              : scrambledClassName
          )}
        >
          {char}
        </span>
      ))}
    </motion.span>
  )
}

export default ScrambleHover
