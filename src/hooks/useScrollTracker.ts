'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { readAttribution, generateId } from '@/lib/attribution'
import { pushEvent } from '@/lib/dataLayer'

// ─── Scroll depth tracking: 50% e 90% ────────────────────────────────────────
// Reset automático a cada navegação de página (usePathname)

export function useScrollTracker(): void {
  const pathname = usePathname()
  const fired50  = useRef(false)
  const fired90  = useRef(false)

  // Reset quando a rota muda (App Router não remonta o layout)
  useEffect(() => {
    fired50.current = false
    fired90.current = false
  }, [pathname])

  useEffect(() => {
    function getScrollPercent(): number {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    }

    function fire(depth: 50 | 90): void {
      const eventId   = generateId()
      const sessionId = readAttribution()?.session_id

      pushEvent({
        event:      `ScrollDepth_${depth}`,
        event_id:   eventId,
        session_id: sessionId,
        depth,
      })
    }

    function handleScroll(): void {
      const pct = getScrollPercent()

      if (!fired50.current && pct >= 50) {
        fired50.current = true
        fire(50)
      }
      if (!fired90.current && pct >= 90) {
        fired90.current = true
        fire(90)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])
}
