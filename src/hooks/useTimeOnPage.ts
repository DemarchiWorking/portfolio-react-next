'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { readAttribution, generateId } from '@/lib/attribution'
import { pushEvent } from '@/lib/dataLayer'

// ─── Time on page: 30s, 60s, 120s ────────────────────────────────────────────
// Reset automático a cada navegação de página

const MILESTONES: Array<{ seconds: 30 | 60 | 120; event: `TimeOnPage_${number}s` }> = [
  { seconds: 30,  event: 'TimeOnPage_30s'  },
  { seconds: 60,  event: 'TimeOnPage_60s'  },
  { seconds: 120, event: 'TimeOnPage_120s' },
]

export function useTimeOnPage(): void {
  const pathname = usePathname()

  useEffect(() => {
    const sessionId = readAttribution()?.session_id

    const timers = MILESTONES.map(({ seconds, event }) =>
      setTimeout(() => {
        pushEvent({
          event,
          event_id:   generateId(),
          session_id: sessionId,
          seconds,
        })
      }, seconds * 1_000),
    )

    return () => timers.forEach(clearTimeout)
  }, [pathname]) // recria timers a cada troca de página
}
