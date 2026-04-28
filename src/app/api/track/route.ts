import { type NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import type { CAPIPayload } from '@/types/tracking'

// ─── Hashing SHA-256 para PII (e-mail, telefone) ─────────────────────────────

async function sha256(value: string): Promise<string> {
  const buffer = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(value.toLowerCase().trim()),
  )
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// ─── Extração de IP real (Vercel / Cloudflare / proxy genérico) ───────────────

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    req.headers.get('cf-connecting-ip') ??
    ''
  )
}

// ─── POST /api/track ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Pixel ID não é secret — NEXT_PUBLIC_ funciona server-side também
  const pixelId   = process.env.NEXT_PUBLIC_META_PIXEL_ID
  const token     = process.env.META_CAPI_ACCESS_TOKEN
  const testCode  = process.env.META_CAPI_TEST_EVENT_CODE

  if (!pixelId || !token) {
    return NextResponse.json({ ok: false, error: 'CAPI not configured' }, { status: 200 })
  }

  let body: CAPIPayload
  try {
    body = (await req.json()) as CAPIPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  // ─── Dados do usuário (lidos server-side — Event Match Quality máximo) ───
  const cookieStore = await cookies()
  const fbc = cookieStore.get('_fbc')?.value
  const fbp = cookieStore.get('_fbp')?.value

  const ip = getClientIp(req)
  const ua = req.headers.get('user-agent') ?? ''

  // ─── Hash de PII se enviados pelo cliente ──────────────────────────────────
  const userData: Record<string, string> = {
    client_ip_address: ip,
    client_user_agent: ua,
    ...(fbc && { fbc }),
    ...(fbp && { fbp }),
  }

  if (body.user_data?.em) {
    userData.em = await sha256(body.user_data.em)
  }
  if (body.user_data?.ph) {
    userData.ph = await sha256(body.user_data.ph)
  }

  // ─── Payload CAPI ──────────────────────────────────────────────────────────
  const capiBody: Record<string, unknown> = {
    data: [
      {
        event_name:       body.event_name,
        event_id:         body.event_id,
        event_time:       Math.floor(Date.now() / 1_000),
        event_source_url: body.event_source_url,
        action_source:    'website',
        user_data:        userData,
        ...(body.custom_data && { custom_data: body.custom_data }),
      },
    ],
    // test_event_code só em ambiente de desenvolvimento
    ...(testCode && { test_event_code: testCode }),
  }

  // ─── Envio ao Meta ─────────────────────────────────────────────────────────
  try {
    const res = await fetch(
      `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capiBody),
      },
    )

    const result = (await res.json()) as Record<string, unknown>

    if (!res.ok) {
      console.error('[CAPI] Error:', result)
      return NextResponse.json({ ok: false, error: result }, { status: 200 })
    }

    return NextResponse.json({ ok: true, events_received: result.events_received })
  } catch (err) {
    console.error('[CAPI] Fetch failed:', err)
    return NextResponse.json({ ok: false, error: 'fetch_failed' }, { status: 200 })
  }
}
