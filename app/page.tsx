import { JsonLd } from '@/components/json-ld'
import { About } from '@/components/home/about'
import { Apps } from '@/components/home/apps'
import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import { ScrollToTopButton } from '@/components/scroll-to-top'
import { pageMetadata } from '@/lib/metadata'
import { site } from '@/lib/site'
import { homeJsonLd } from '@/lib/structured-data'

export const metadata = pageMetadata({
  description: site.description,
  path: '/',
})

// Página estática, regerada uma vez por dia para a idade no "Sobre mim" não ficar desatualizada
export const revalidate = 86400

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <Hero />
      <About />
      {/* "Projetos" no menu leva ao início deste bloco, que começa pelos aplicativos */}
      <div id='projects-section'>
        <Apps />
        <Projects />
      </div>
      <ScrollToTopButton />
    </>
  )
}
