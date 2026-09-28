import Image from 'next/image'
import profile from '@/assets/images/profile.webp'
import { PageTitle } from '@/components/page-title'
import { getAge, site } from '@/lib/site'
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
          Meu nome é Pedro Luca Prates, tenho {getAge(site.birthDate)} anos e sou Desenvolvedor Web Fullstack e
          Técnico em Informática.
        </p>
        <br />
        <p>
          Em 2021, conclui a minha formação como Técnico em Informática para Internet no IF Baiano - <em>Campus</em>{' '}
          Guanambi, e em agora em 2025 me formei em Análise e Desenvolvimento de Sistemas. Sou apaixonado pelo mundo
          da programação desde que iniciei meus estudos na área, em 2018, e tenho muita afinidade com Front-End, apesar
          de também gostar e compreender facilmente as complexidades do Back-End (Já desenvolvi alguns projetos como
          Dev Full-Stack).
        </p>
        <br />
        <p>
          Tenho experiência com as tecnologias: HTML, CSS, JavaScript, TypeScript, Python, Django, PHP, Laravel, SQL,
          Java, C e atualmente estou estudando React.JS.
        </p>
      </div>
      <CareerTimeline />
    </section>
  )
}
