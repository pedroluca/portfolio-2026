import Image from 'next/image'
import profile from '@/assets/images/profile.webp'
import { PageTitle } from '@/components/page-title'
import { getAge, site } from '@/lib/site'
import { Age } from './age'
import { CareerTimeline } from './career-timeline'

export function About() {
  return (
    <section id='about-section' className='flex w-full flex-col gap-3 px-6 py-4 pt-24 text-justify lg:px-[20%]'>
      <PageTitle as='h2'>Sobre mim</PageTitle>
      <div>
        <Image
          src={profile}
          alt='Foto de Pedro Luca Prates'
          sizes='(min-width: 1024px) 256px, 160px'
          placeholder='blur'
          className='mx-auto mb-4 h-40 w-auto lg:float-left lg:mr-5 lg:mb-0 lg:h-64'
        />

        <p>
          Meu nome é Pedro Luca Prates, tenho <Age atBuild={getAge(site.birthDate)} /> anos e sou Desenvolvedor
          Fullstack, formado em Análise e Desenvolvimento de Sistemas e Técnico em Informática para Internet pelo IF
          Baiano - <em>Campus</em> Guanambi. Programo desde 2018 e atuo tanto no front-end quanto no back-end,
          desenvolvendo aplicações web, APIs, integrações e estruturas de banco de dados.
        </p>

        <br />

        <p>
          Atualmente trabalho na PROCEDE, desenvolvendo soluções voltadas à gestão pública municipal. Participei do
          planejamento e fui o responsável pelo desenvolvimento do novo portal municipal fornecido pela empresa, reunindo módulos
          como transparência, Diário Oficial, licitações, e-SIC, ouvidoria, notícias e serviços públicos. Também atuo no
          GECOF, sistema de Gestão de Conteúdo Oficial utilizado na administração e publicação das informações desses
          portais.
        </p>

        <br />

        <p>
          Também desenvolvo projetos próprios, como o Tractus, para criação de treinos e acompanhamento da evolução de
          cargas; o Finances, para organização de faturas, compras parceladas e gastos compartilhados; e o Presenzo,
          voltado à criação de convites para eventos, confirmação de presença online e listas de presentes.
        </p>

        <br />

        <p>
          Trabalho principalmente com React, Next.js, TypeScript e Tailwind CSS no front-end, além de Node.js, PHP,
          Firebase e bancos SQL no back-end. Atualmente também estou iniciando meus estudos com React Native, que será
          utilizado na futura migração do Tractus para uma aplicação mobile nativa.
        </p>
      </div>
      <CareerTimeline />
    </section>
  )
}
