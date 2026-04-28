'use client'

import Cookies from 'js-cookie'
import type { Attribution } from '@/types/tracking'

const ATTR_COOKIE    = 'demarchi_attr'
const SESSION_COOKIE = 'demarchi_sid'
const FBC_COOKIE     = '_fbc'
const COOKIE_DAYS    = 7
const OPTS           = { expires: COOKIE_DAYS, path: '/', sameSite: 'lax' as const }

// ─── UUID sem dependência externa ────────────────────────────────────────────

export function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  // Fallback polyfill para browsers muito antigos
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

// ─── _fbc — formato oficial Meta ─────────────────────────────────────────────
// Formato: fb.1.{creation_time_ms}.{fbclid}

export function buildFbc(fbclid: string): string {
  return `fb.1.${Date.now()}.${fbclid}`
}

// ─── Detecção de tráfego Instagram ───────────────────────────────────────────

const IG_SOURCES = [
  'instagram', 'instagram_story', 'instagram_paid',
  'instagram_ad', 'instagram_reel', 'fb', 'facebook',
]

export function isInstagramTraffic(
  params: URLSearchParams,
  referrer: string,
): boolean {
  const source = (params.get('utm_source') ?? '').toLowerCase()
  return (
    params.has('fbclid') ||
    IG_SOURCES.some((s) => source.includes(s)) ||
    referrer.includes('instagram.com') ||
    referrer.includes('l.instagram.com') ||
    referrer.includes('facebook.com')
  )
}

// ─── Session ID ───────────────────────────────────────────────────────────────

export function getOrCreateSessionId(): string {
  const existing = Cookies.get(SESSION_COOKIE)
  if (existing) return existing
  const id = generateId()
  Cookies.set(SESSION_COOKIE, id, OPTS)
  return id
}

// ─── Cookie de atribuição ────────────────────────────────────────────────────

export function readAttribution(): Attribution | null {
  const raw = Cookies.get(ATTR_COOKIE)
  if (!raw) return null
  try {
    return JSON.parse(raw) as Attribution
  } catch {
    return null
  }
}

export function writeAttribution(data: Attribution): void {
  Cookies.set(ATTR_COOKIE, JSON.stringify(data), OPTS)
  // _fbc separado — lido automaticamente pelo pixel Meta JS
  if (data.fbc) {
    Cookies.set(FBC_COOKIE, data.fbc, OPTS)
  }
}

export function readFbc(): string | undefined {
  return Cookies.get(FBC_COOKIE)
}

export function readFbp(): string | undefined {
  return Cookies.get('_fbp') // gerado pelo pixel Meta — não sobrescrever
}

// ─── Construção do objeto de atribuição completo ──────────────────────────────

export function buildAttribution(
  params: URLSearchParams,
  referrer: string,
): Attribution {
  const sessionId = getOrCreateSessionId()
  const fbclid    = params.get('fbclid') ?? undefined
  const fbc       = fbclid ? buildFbc(fbclid) : readFbc()

  return {
    utm_source:   params.get('utm_source')   ?? undefined,
    utm_medium:   params.get('utm_medium')   ?? undefined,
    utm_campaign: params.get('utm_campaign') ?? undefined,
    utm_content:  params.get('utm_content')  ?? undefined,
    utm_term:     params.get('utm_term')     ?? undefined,
    fbclid,
    fbc,
    session_id:  sessionId,
    landing_url: typeof window !== 'undefined' ? window.location.href : '',
    referrer,
    first_seen:  Date.now(),
  }
}
