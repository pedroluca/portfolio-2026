import { MoveRight } from 'lucide'
import { Icon } from '@/components/icon'
import { PageTitle } from '@/components/page-title'
import { ProjectDialog } from '@/components/project-dialog'
import { projects } from '@/data/projects'
import { social } from '@/lib/site'
import { ProjectDetails } from './project-details'

export function Projects() {
  return (
    <section className='relative mb-16 flex w-full flex-col gap-3 px-6 py-4 pt-24 text-justify lg:px-[20%]'>
      <PageTitle as='h2'>Projetos</PageTitle>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <li key={project.title}>
            <ProjectDialog
              title={project.title}
              className='h-full cursor-pointer overflow-hidden rounded-lg bg-white text-black shadow-[0_1px_4px_rgba(30,144,255,0.3)] transition-[box-shadow,scale] duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_8px_rgba(30,144,255,0.4),0_0_16px_rgba(30,144,255,0.2)] dark:bg-zinc-900 dark:text-white'
              card={
                <div className='p-4'>
                  <h3 className='mb-2 text-left text-lg font-semibold'>{project.title}</h3>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>{project.description}</p>
                </div>
              }
            >
              <ProjectDetails project={project} />
            </ProjectDialog>
          </li>
        ))}
      </ul>
      <a
        href={social.github}
        target='_blank'
        rel='noreferrer'
        className='mt-6 flex w-fit items-center gap-2 text-gray-600 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white'
      >
        Veja mais projetos
        <Icon icon={MoveRight} />
      </a>
    </section>
  )
}
