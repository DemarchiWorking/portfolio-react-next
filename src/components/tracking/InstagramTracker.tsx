'use client'

import { Suspense } from 'react'
import { useInstagramTracker } from '@/hooks/useInstagramTracker'
import { useScrollTracker } from '@/hooks/useScrollTracker'
import { useTimeOnPage } from '@/hooks/useTimeOnPage'

// ─── Inner: precisa de Suspense por usar useSearchParams() ───────────────────

function TrackerInner(): null {
  useInstagramTracker()
  useScrollTracker()
  useTimeOnPage()
  return null
}

// ─── Componente público — adicionar no layout raiz ───────────────────────────
// Renderiza null, zero impacto visual e de performance

export function InstagramTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  )
}
