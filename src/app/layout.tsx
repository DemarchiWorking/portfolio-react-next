import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import { Suspense } from 'react'
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
  description: 'Engenheiro de Software com 8+ anos de experiência em .NET, AWS, DevOps e Arquitetura Cloud.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfoliodemarchi.com.br'),
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
      <head>
        {/* 1. Google Consent Mode v2 — OBRIGATÓRIO ANTES DO GTM */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>

      <body className={`${inter.className} ${poppins.className} antialiased bg-background text-foreground`}>
        {/* 2. Google Tag Manager (Substitui os códigos manuais 1 e 2 do painel) */}
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

        {/* 3. Instagram Tracker envolto em Suspense (Evita erro de build por causa de searchParams) */}
        <Suspense fallback={null}>
          <InstagramTracker />
        </Suspense>

        <ConsentBanner />
        <Navbar />
        <ThemeFeature>{children}</ThemeFeature>
        <Footer />
      </body>
    </html>
  )
}


/*import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'
import { ThemeFeature } from '@/features/theme/theme-provider'
import { Navbar } from '@/components/organisms/Navbar'
import { Footer } from '@/components/organisms/Footer'
import { InstagramTracker } from '@/components/tracking/InstagramTracker'
import { ConsentBanner } from '@/components/tracking/ConsentBanner'
import { MetaPixel } from '@/components/tracking/metaPixel'

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

      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}

      <body
        className={`${inter.className} ${poppins.className} antialiased bg-background text-foreground`}
      >
        <InstagramTracker />
        <ConsentBanner />
        <MetaPixel />
        <Navbar />
        <ThemeFeature>{children}</ThemeFeature>
        <Footer />
      </body>
    </html>
  )
}

*/