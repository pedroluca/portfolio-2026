import { ImageResponse } from 'next/og'
import { logoSrc } from '@/lib/og-image'

// Ícone da tela inicial no iOS/Android: o logo é branco, então vai sobre o fundo do tema escuro
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renderiza <img>, não next/image */}
        <img src={logoSrc} width={132} height={132} alt='' />
      </div>
    ),
    size,
  )
}
