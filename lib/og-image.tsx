import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from './site'

// As imagens OG são geradas no build (as rotas não leem nada da requisição), então isso roda uma vez só.
// Caminhos literais para o rastreamento do build standalone levar só esses arquivos, não a assets/ inteira
const [geistRegular, geistBold, logoSvg] = await Promise.all([
  readFile(join(process.cwd(), 'assets/fonts/Geist-Regular.ttf')),
  readFile(join(process.cwd(), 'assets/fonts/Geist-Bold.ttf')),
  readFile(join(process.cwd(), 'assets/images/logo.svg')),
])

export const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString('base64')}`

interface OgImageOptions {
  title: string
  subtitle: string
  // Linha pequena acima do título, usada nas páginas internas para manter o nome visível
  eyebrow?: string
}

// O Satori posiciona cada palavra separadamente e erra o espaço depois de algumas letras
// ("Desenvolvedor  Fullstack"). Com espaço não separável a linha é medida inteira; os textos
// cabem numa linha, então perder a quebra automática não faz falta
const nbsp = (text: string) => text.replaceAll(' ', '\u00a0')

export function renderOgImage(options: OgImageOptions) {
  const title = nbsp(options.title)
  const subtitle = nbsp(options.subtitle)
  const eyebrow = options.eyebrow && nbsp(options.eyebrow)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(30, 144, 255, 0.28), transparent 55%)',
          color: '#fafafa',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renderiza <img>, não next/image */}
          <img src={logoSrc} width={96} height={96} alt='' />
          <span style={{ fontSize: 32, color: '#a1a1aa' }}>{site.url.replace('https://', '')}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {eyebrow && <span style={{ fontSize: 36, color: '#a1a1aa', marginBottom: 12 }}>{eyebrow}</span>}
          <span style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>{title}</span>
          <span style={{ fontSize: 42, color: '#d4d4d8', marginTop: 24 }}>{subtitle}</span>
          <div style={{ display: 'flex', width: 160, height: 8, marginTop: 48, borderRadius: 4, backgroundColor: '#1e90ff' }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: geistRegular, weight: 400, style: 'normal' },
        { name: 'Geist', data: geistBold, weight: 700, style: 'normal' },
      ],
    },
  )
}
