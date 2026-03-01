import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const mont = localFont({
  src: [
    {
      path: '../public/fonts/Mont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mont-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Mont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mont',
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Adrexo.net - Distribution en boîtes aux lettres professionnelle',
  description: 'Distribution en boîtes aux lettres fiable, traçable et professionnelle avec GPS et garantie SOLO',
  icons: {
    icon: '/images/favicon-adrexo.png',
  },
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={mont.variable}>
      <head>
        {/* Préconnexion pour réduire la latence des requêtes critiques */}
        <link rel="preconnect" href="https://adrexo.net" />
        {supabaseUrl && (
          <link rel="preconnect" href={supabaseUrl} crossOrigin="anonymous" />
        )}
      </head>
      <body className={mont.className}>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

