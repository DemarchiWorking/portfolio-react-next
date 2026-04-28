"use client"

import { useEffect } from "react"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return
    if (typeof window === "undefined") return
    if (window.fbq) return

    const w = window as any

    w.fbq =
      w.fbq ||
      function (...args: any[]) {
        (w.fbq.q = w.fbq.q || []).push(args)
      }

    w.fbq.loaded = true
    w.fbq.version = "2.0"
    w.fbq.queue = []

    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"

    document.head.appendChild(script)

    w.fbq("init", PIXEL_ID)
    w.fbq("track", "PageView")
  }, [])

  return null
}