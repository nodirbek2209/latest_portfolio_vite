import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia?.(query).matches ?? false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handleChange = () => setMatches(mediaQuery.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
    } else {
      // Safari fallback
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}
