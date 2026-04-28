'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  isInstagramTraffic,
  buildAttribution,
  writeAttribution,
  generateId,
} from '@/lib/attribution'
import { pushEvent, sendToCAPI } from '@/lib/dataLayer'

const SESSION_FLAG = 'ig_tracked' // sessionStorage — limpa ao fechar a aba

export function useInstagramTracker(): void {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const params   = new URLSearchParams(searchParams.toString())
    const referrer = document.referrer

    // 1. Só prossegue se for tráfego do Instagram / Facebook
    if (!isInstagramTraffic(params, referrer)) return

    // 2. Previne disparo duplicado na mesma aba (refresh, SPA navigation)
    if (sessionStorage.getItem(SESSION_FLAG)) return

    // 3. Constrói e persiste atribuição completa em cookie de 7 dias
    const attr    = buildAttribution(params, referrer)
    writeAttribution(attr)

    // 4. event_id único — chave de deduplicação entre Pixel e CAPI
    const eventId = generateId()

    // 5. Push ao dataLayer → GTM → Meta Pixel (client-side)
    pushEvent({
      event:        'Visitante_Instagram',
      event_id:     eventId,
      session_id:   attr.session_id,
      utm_source:   attr.utm_source,
      utm_medium:   attr.utm_medium,
      utm_campaign: attr.utm_campaign,
      utm_content:  attr.utm_content,
      utm_term:     attr.utm_term,
      fbclid:       attr.fbclid,
    })

    // 6. CAPI server-side em paralelo (mesmo event_id = deduplicação perfeita)
    sendToCAPI({
      event_name:       'Visitante_Instagram',
      event_id:         eventId,
      event_source_url: window.location.href,
      custom_data: {
        utm_source:   attr.utm_source,
        utm_medium:   attr.utm_medium,
        utm_campaign: attr.utm_campaign,
        utm_content:  attr.utm_content,
        fbclid:       attr.fbclid,
      },
    })

    // 7. Marca sessão como rastreada
    sessionStorage.setItem(SESSION_FLAG, '1')
  }, [searchParams])
}
