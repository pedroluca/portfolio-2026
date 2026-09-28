import type { Metadata } from 'next'
import { site } from './site'

interface PageMetadataOptions {
  // Sem título, a página usa o título padrão do layout (caso da home)
  title?: string
  description: string
  path: string
}

// O `openGraph` de uma página substitui o do layout inteiro, então cada página monta o seu completo.
// A imagem vem do opengraph-image.tsx de cada rota, e o Next copia título, descrição e imagem pro Twitter
export function pageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title

  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
    },
  }
}
