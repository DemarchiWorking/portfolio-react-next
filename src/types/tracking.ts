// ─── Event Names ─────────────────────────────────────────────────────────────

export type TrackingEventName =
  | 'Visitante_Instagram'
  | 'PageView'
  | 'ViewContent'
  | 'Lead'
  | 'Contact'
  | 'ScrollDepth_50'
  | 'ScrollDepth_90'
  | 'TimeOnPage_30s'
  | 'TimeOnPage_60s'
  | 'TimeOnPage_120s'
  | 'CTA_Clicado'
  | 'CV_Download'

// ─── Attribution (salvo em cookie por 7 dias) ────────────────────────────────

export interface Attribution {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  fbclid?: string
  fbc?: string        // formato Meta: fb.1.{timestamp}.{fbclid}
  session_id: string  // UUID v4, persiste 7 dias
  landing_url: string // URL completa incluindo params
  referrer: string    // document.referrer
  first_seen: number  // timestamp em ms
}

// ─── DataLayer Event base ────────────────────────────────────────────────────

export interface DataLayerEvent {
  event: TrackingEventName | string
  event_id: string        // UUID v4 — chave de deduplicação Pixel ↔ CAPI
  session_id?: string
  [key: string]: unknown
}

// ─── Payloads específicos ────────────────────────────────────────────────────

export interface InstagramEventPayload extends DataLayerEvent {
  event: 'Visitante_Instagram'
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  fbclid?: string
}

export interface LeadEventPayload extends DataLayerEvent {
  event: 'Lead'
  lead_source: string
  timestamp: string
}

export interface ScrollEventPayload extends DataLayerEvent {
  event: 'ScrollDepth_50' | 'ScrollDepth_90'
  depth: 50 | 90
}

export interface TimeEventPayload extends DataLayerEvent {
  event: 'TimeOnPage_30s' | 'TimeOnPage_60s' | 'TimeOnPage_120s'
  seconds: 30 | 60 | 120
}

export interface CTAEventPayload extends DataLayerEvent {
  event: 'CTA_Clicado'
  cta_name: string
  destination?: string
}

// ─── Payload enviado ao Route Handler /api/track (CAPI) ─────────────────────

export interface CAPIPayload {
  event_name: string
  event_id: string
  event_source_url: string
  user_data?: {
    em?: string  // SHA-256 do e-mail (se disponível)
    ph?: string  // SHA-256 do telefone (se disponível)
  }
  custom_data?: Record<string, unknown>
}

// ─── Consent Mode v2 ─────────────────────────────────────────────────────────

export type ConsentState = 'granted' | 'denied'

export interface ConsentConfig {
  ad_storage: ConsentState
  analytics_storage: ConsentState
  ad_user_data: ConsentState
  ad_personalization: ConsentState
}

export type ConsentChoice = 'accepted' | 'declined'
