import { JsonLd } from '@/components/json-ld'
import { LinkCard } from '@/components/link-card'
import { PageTitle } from '@/components/page-title'
import { links } from '@/data/links'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd } from '@/lib/structured-data'

export const metadata = pageMetadata({
  title: 'Links',
  description: 'Redes sociais, aplicativos e contato de Pedro Luca Prates.',
  path: '/links/',
})

export default function LinksPage() {
  return (
    <div className='mb-16 flex w-full flex-col gap-3 px-6 py-4 pt-24 text-justify lg:px-[20%]'>
      <JsonLd data={breadcrumbJsonLd('Links', '/links')} />
      <PageTitle>Links</PageTitle>
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {links.map((link) => (
          <li key={link.label}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </div>
  )
}
