import { renderOgImage } from '@/lib/og-image'
import { site } from '@/lib/site'

export const alt = `Links | ${site.name}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({
    eyebrow: site.name,
    title: 'Links',
    subtitle: 'Redes sociais, aplicativos e contato',
  })
}
