"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import type { RefObject } from "react"
import { formatStatValue } from "@/lib/gsap/format-stat-value"
import { registerScrollTrigger } from "@/lib/gsap/register-scroll-trigger"
import { usePrefersReducedMotion } from "@/lib/gsap/use-prefers-reduced-motion"

registerScrollTrigger()

interface UseHomeStatsGsapOptions {
  sectionRef: RefObject<HTMLElement | null>
}

function setFinalValues(section: HTMLElement) {
  const valueEls = gsap.utils.toArray<HTMLElement>("[data-stat-counter]", section)
  for (const el of valueEls) {
    const end = Number(el.dataset.statEnd ?? 0)
    const prefix = el.dataset.statPrefix ?? ""
    const suffix = el.dataset.statSuffix ?? ""
    el.textContent = formatStatValue(end, prefix, suffix)
  }
}

export function useHomeStatsGsap({ sectionRef }: UseHomeStatsGsapOptions) {
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const section = sectionRef.current
      if (!section) return

      if (reducedMotion) {
        setFinalValues(section)
        return
      }

      const valueEls = gsap.utils.toArray<HTMLElement>("[data-stat-counter]", section)
      if (valueEls.length === 0) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      })

      valueEls.forEach((el, index) => {
        const end = Number(el.dataset.statEnd ?? 0)
        const prefix = el.dataset.statPrefix ?? ""
        const suffix = el.dataset.statSuffix ?? ""
        const counter = { value: 0 }

        tl.to(
          counter,
          {
            value: end,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = formatStatValue(counter.value, prefix, suffix)
            },
          },
          index * 0.12
        )
      })

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion], revertOnUpdate: true }
  )
}
