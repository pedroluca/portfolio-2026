import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import { ThemeScript } from '@/components/theme-script'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // `dark` é o tema padrão e já sai no HTML; o script abaixo só troca se o visitante escolheu o claro.
    // suppressHydrationWarning porque essa classe pode diferir do JSX antes da hidratação.
    // data-scroll-behavior: o Next desliga o scroll suave ao trocar de rota, mantendo nas âncoras
    <html lang='pt-BR' className='dark' data-scroll-behavior='smooth' suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      {/* Extensões como ColorZilla e Grammarly injetam atributos no <body> antes da hidratação */}
      <body className='flex min-h-screen w-full flex-col' suppressHydrationWarning>
        <Header />
        <main className='flex w-full flex-1 flex-col'>{children}</main>
        <Footer />
        {/* O Vercel Web Analytics só existe em deploys na Vercel; em outro host o script dá 404 */}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
