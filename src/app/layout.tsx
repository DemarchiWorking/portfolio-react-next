import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import { ThemeFeature } from '@/features/theme/theme-provider'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { InstagramTracker } from '@/components/tracking/InstagramTracker'
import { ConsentBanner } from '@/components/tracking/ConsentBanner'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Antonio Demarchi | Engenheiro de Software · .NET · AWS · DevOps',
    template: '%s | Antonio Demarchi',
  },
  description:
    'Engenheiro de Software com 8+ anos de experiência em .NET, AWS, DevOps e Arquitetura Cloud. Ex-Itaú, Globo, nstech.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfoliodemarchi.com.br',
  ),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Antonio Demarchi — Engenheiro de Software',
  },
  robots: { index: true, follow: true },
}

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? ''

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className="dark"
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      {/*
       * Consent Mode v2 — executa ANTES do GTM (beforeInteractive).
       * Lê a escolha anterior do localStorage e define o estado de consent
       * para que o GTM não dispare nenhuma tag de publicidade sem permissão.
       * Compatível com LGPD e Google Consent Mode v2 (Março 2024+).
       */}
      <Script id="consent-init" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        var _consent = null;
        try { _consent = localStorage.getItem('lgpd_consent'); } catch(e){}
        var _state = _consent === 'accepted' ? 'granted' : 'denied';
        gtag('consent', 'default', {
          ad_storage:         _state,
          analytics_storage:  _state,
          ad_user_data:       _state,
          ad_personalization: _state,
          wait_for_update:    _consent === null ? 2000 : 0
        });
      `}</Script>

      {/* GTM — carrega de forma lazy, respeita o consent acima */}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      <body
        className={`${inter.className} ${poppins.className} antialiased bg-background text-foreground`}
      >
        {/* Rastreamento invisível — zero impacto visual */}
        <InstagramTracker />

        {/* Banner LGPD — aparece só se o usuário ainda não escolheu */}
        <ConsentBanner />

        <Navbar />
        <ThemeFeature>{children}</ThemeFeature>
        <Footer />
      </body>
    </html>
  )
}
