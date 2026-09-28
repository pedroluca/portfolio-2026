'use client'

import { themeScript } from '@/lib/theme'

// No SSR sai como text/javascript e roda durante o parse do HTML, antes do primeiro paint.
// No cliente vira text/plain: se o React recriar o <head> (HMR em dev), o script não roda de novo
// nem dispara o aviso de <script> renderizado no cliente. A diferença de `type` na hidratação é esperada
export function ThemeScript() {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  )
}
