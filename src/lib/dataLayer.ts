'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import type { DataLayerEvent, ConsentConfig } from '@/types/tracking'

// ─── Push de evento para o dataLayer → GTM → Meta Pixel ─────────────────────

export function pushEvent(payload: DataLayerEvent): void {
  sendGTMEvent(payload)
}

// ─── Consent Mode v2 — chamado pelo ConsentBanner ────────────────────────────

export function updateConsent(config: ConsentConfig): void {
  if (typeof window === 'undefined') return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag as ((...args: unknown[]) => void) | undefined
  if (typeof gtag === 'function') {
    gtag('consent', 'update', config)
  }
}

// ─── Envio paralelo para CAPI (server-side) ──────────────────────────────────

export async function sendToCAPI(payload: {
  event_name: string
  event_id: string
  event_source_url: string
  custom_data?: Record<string, unknown>
  user_data?: { em?: string; ph?: string }
}): Promise<void> {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // keepalive garante o envio mesmo se o usuário navegar imediatamente
      keepalive: true,
    })
  } catch {
    // Falha silenciosa — nunca bloquear a experiência do usuário por tracking
  }
}
