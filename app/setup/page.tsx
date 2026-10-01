import { JsonLd } from '@/components/json-ld'
import { PageTitle } from '@/components/page-title'
import { ScrollToTopButton } from '@/components/scroll-to-top'
import { SetupCard } from '@/components/setup-card'
import { setupSections } from '@/data/setup'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbJsonLd } from '@/lib/structured-data'

export const metadata = pageMetadata({
  title: 'Setup',
  description:
    'Os equipamentos, ferramentas, livros e newsletters que Pedro Luca Prates usa no dia a dia como desenvolvedor.',
  path: '/setup/',
})

export default function SetupPage() {
  return (
    <div className='mb-16 flex w-full flex-col gap-3 px-6 py-4 pt-24 text-justify lg:px-[20%]'>
      <JsonLd data={breadcrumbJsonLd('Setup', '/setup')} />
      <PageTitle>Setup</PageTitle>
      <nav aria-label='Seções do setup' className='mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-none'>
        {setupSections.map(({ id, title }) => (
          <a
            key={id}
            href={`#${id}`}
            className='rounded-full bg-blue-500/10 px-4 py-2 whitespace-nowrap text-blue-500 transition-colors hover:bg-blue-500/20'
          >
            {title}
          </a>
        ))}
      </nav>
      <div className='flex flex-col gap-20'>
        {setupSections.map(({ id, title, items }) => (
          // scroll-mt para o título não ficar atrás do header fixo ao clicar nos atalhos
          <section key={id} id={id} className='scroll-mt-20'>
            <h2 className='mb-3 text-2xl'>{title}</h2>
            <ul className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
              {items.map((item) => (
                <li key={item.name}>
                  <SetupCard {...item} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  )
}
