import type { ReactNode } from 'react'

interface PageTitleProps {
  // Na home as seções usam h2, já que o h1 é o nome no topo da página
  as?: 'h1' | 'h2'
  children: ReactNode
}

export function PageTitle({ as: Heading = 'h1', children }: PageTitleProps) {
  return <Heading className='mb-6 text-5xl font-bold lg:mb-12'>{children}</Heading>
}
