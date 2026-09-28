import { ChevronDown } from 'lucide'
import { Icon } from '@/components/icon'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className='flex h-screen w-full flex-col items-center justify-center border-b border-zinc-200 p-4 dark:border-zinc-800'>
      <div className='flex flex-col'>
        <h1 className='text-4xl text-black dark:text-white'>{site.name}</h1>
        <p className='text-xl text-black dark:text-white'>Fullstack Developer</p>
        <p className='text-xl text-zinc-500'>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
      </div>
      {/* Âncora comum: a rolagem suave vem do scroll-behavior do CSS, sem JS */}
      <a href='#about-section' className='mt-8' aria-label='Ir para Sobre mim'>
        <Icon icon={ChevronDown} className='size-10 animate-bounce text-black dark:text-white' />
      </a>
    </section>
  )
}
