'use client'

import { readAttribution, generateId } from '@/lib/attribution'
import { pushEvent, sendToCAPI } from '@/lib/dataLayer'
import type { TrackingEventName } from '@/types/tracking'

// ─── API pública de eventos tipados ──────────────────────────────────────────

export function useMetaEvents() {
  function track(
    name: TrackingEventName,
    params: Record<string, unknown> = {},
    options: { capi?: boolean } = {},
  ): void {
    if (typeof window === 'undefined') return

    const eventId    = generateId()
    const attr       = readAttribution()
    const sessionId  = attr?.session_id

    // Push ao dataLayer → GTM → Meta Pixel
    pushEvent({ event: name, event_id: eventId, session_id: sessionId, ...params })

    // Envio CAPI opcional (apenas para eventos de conversão)
    if (options.capi) {
      sendToCAPI({
        event_name:       name,
        event_id:         eventId,
        event_source_url: window.location.href,
        custom_data:      { ...params, session_id: sessionId },
      })
    }
  }

  return {
    // Clique no CTA principal ("Meus projetos", "Saiba Mais", etc.)
    trackCTAClick(ctaName: string, destination?: string) {
      track('CTA_Clicado', { cta_name: ctaName, destination })
    },

    // Download do CV
    trackCVDownload() {
      track('CV_Download', {})
    },

    // Visualização de conteúdo (página de portfólio, serviços, etc.)
    trackViewContent(contentName: string) {
      track('ViewContent', { content_name: contentName })
    },

    // Lead — conversão principal (clique em WhatsApp, submit de formulário)
    // Envia via Pixel + CAPI para máxima qualidade de sinal
    trackLead(leadSource: string, extra: Record<string, unknown> = {}) {
      track(
        'Lead',
        { lead_source: leadSource, timestamp: new Date().toISOString(), ...extra },
        { capi: true },
      )
    },

    // Contato confirmado (formulário enviado com sucesso)
    trackContact(source: string) {
      track('Contact', { contact_source: source }, { capi: true })
    },

    // Clique em link externo rastreado (LinkedIn, GitHub, etc.)
    trackOutboundLink(label: string, url: string) {
      track('CTA_Clicado', { cta_name: label, destination: url, type: 'outbound' })
    },
  }
}
