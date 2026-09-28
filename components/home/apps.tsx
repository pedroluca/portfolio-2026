import Image from 'next/image'
import { PageTitle } from '@/components/page-title'
import { ProjectDialog } from '@/components/project-dialog'
import { apps } from '@/data/projects'
import { ProjectDetails } from './project-details'

export function Apps() {
  return (
    <section id='apps-section' className='relative mb-16 flex w-full flex-col gap-3 px-6 py-4 pt-24 text-justify lg:px-[20%]'>
      <PageTitle as='h2'>Aplicativos</PageTitle>
      <ul className='grid grid-cols-2 gap-6 md:grid-cols-3'>
        {apps.map((app) => (
          <li key={app.title}>
            <ProjectDialog
              title={app.title}
              className='h-full cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ease-in-out'
              card={
                <div className='flex flex-col items-center p-2'>
                  <Image
                    src={app.logo}
                    alt={`Logo do ${app.title}`}
                    sizes='160px'
                    placeholder='blur'
                    className='h-auto w-full max-w-40 object-cover'
                  />
                  <h3 className='mt-2 text-center text-lg font-semibold'>{app.title}</h3>
                </div>
              }
            >
              <ProjectDetails project={app} />
            </ProjectDialog>
          </li>
        ))}
      </ul>
    </section>
  )
}
