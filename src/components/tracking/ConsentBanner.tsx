'use client'

import { useEffect, useState } from 'react'
import { updateConsent } from '@/lib/dataLayer'
import type { ConsentChoice } from '@/types/tracking'

const STORAGE_KEY = 'lgpd_consent'

const GRANTED_CONFIG = {
  ad_storage:         'granted'  as const,
  analytics_storage:  'granted'  as const,
  ad_user_data:       'granted'  as const,
  ad_personalization: 'granted'  as const,
}

const DENIED_CONFIG = {
  ad_storage:         'denied' as const,
  analytics_storage:  'denied' as const,
  ad_user_data:       'denied' as const,
  ad_personalization: 'denied' as const,
}

export function ConsentBanner() {
  // null = ainda não lemos o localStorage (evita hydration mismatch)
  const [visible, setVisible] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === null) {
        setVisible(true)
      } else {
        // Já decidiu antes — apenas re-aplica o consentimento ao GTM
        updateConsent(stored === 'accepted' ? GRANTED_CONFIG : DENIED_CONFIG)
        setVisible(false)
      }
    } catch {
      setVisible(false) // localStorage bloqueado (modo privado iOS) → não exibir
    }
  }, [])

  function handleChoice(choice: ConsentChoice): void {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch { /* ignorar */ }

    updateConsent(choice === 'accepted' ? GRANTED_CONFIG : DENIED_CONFIG)
    setVisible(false)
  }

  // Não renderiza nada até saber o estado real (evita flash)
  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies e privacidade"
      aria-modal="false"
      className="
        fixed bottom-0 left-0 right-0 z-[9999]
        bg-slate-900/95 backdrop-blur-sm border-t border-slate-700
        px-4 py-4 sm:px-6
        flex flex-col sm:flex-row items-start sm:items-center
        gap-4 sm:gap-6
        shadow-2xl
      "
    >
      {/* Texto */}
      <p className="flex-1 text-sm text-slate-300 leading-relaxed">
        Usamos cookies próprios para análise de visitas e remarketing.{' '}
        Nenhum dado sensível é compartilhado sem sua autorização.{' '}
        <a
          href="/privacidade"
          className="underline text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </a>
      </p>

      {/* Botões */}
      <div className="flex gap-3 shrink-0">
        <button
          onClick={() => handleChoice('declined')}
          className="
            px-4 py-2 text-sm font-medium
            border border-slate-600 text-slate-400
            hover:border-slate-400 hover:text-slate-200
            rounded-lg transition-colors cursor-pointer
          "
        >
          Recusar
        </button>

        <button
          onClick={() => handleChoice('accepted')}
          className="
            px-5 py-2 text-sm font-semibold
            bg-blue-700 hover:bg-blue-600
            text-white rounded-lg transition-colors cursor-pointer
          "
        >
          Aceitar todos
        </button>
      </div>
    </div>
  )
}
