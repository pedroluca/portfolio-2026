import { renderOgImage } from '@/lib/og-image'
import { site } from '@/lib/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage({ title: site.name, subtitle: site.jobTitle })
}
