'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useMetaEvents } from '@/hooks/useMetaEvents'

// ─── Inner — usa useSearchParams, precisa de Suspense ────────────────────────

function ObrigadoInner() {
  const searchParams = useSearchParams()
  const { trackLead } = useMetaEvents()

  useEffect(() => {
    // Dispara Lead server-confirmed via CAPI na chegada nesta página
    const source = searchParams.get('source') ?? 'obrigado_page'
    trackLead(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-[#121F28]">
      <div className="max-w-lg w-full text-center space-y-8 py-20">

        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Mensagem recebida!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Obrigado pelo contato. Antonio vai retornar em até{' '}
            <strong className="text-gray-900 dark:text-white">2 horas</strong>{' '}
            em dias úteis.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl font-semibold
              bg-blue-800 hover:bg-blue-700 text-white
              transition-colors
            "
          >
            Voltar ao início
          </Link>

          <a
            href="https://linkedin.com/in/demarchi1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-xl font-semibold
              border border-slate-600 text-slate-300
              hover:border-slate-400 hover:text-white
              transition-colors
            "
          >
            LinkedIn
          </a>
        </div>

      </div>
    </main>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={null}>
      <ObrigadoInner />
    </Suspense>
  )
}
