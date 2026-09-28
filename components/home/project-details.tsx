import { ExternalLink } from 'lucide'
import Image, { type StaticImageData } from 'next/image'
import { Icon } from '@/components/icon'
import type { Project } from '@/data/projects'

// No modal a imagem vai até 16rem de altura (24rem no lg) e até a largura do conteúdo:
// max-w-3xl menos o padding no desktop, 100vw - 5rem no celular
function dialogImageSizes({ width, height }: StaticImageData) {
  const ratio = width / height
  const desktop = Math.round(Math.min(720, 384 * ratio))
  const mobile = Math.round(256 * ratio)
  return `(min-width: 1024px) ${desktop}px, (min-width: ${mobile + 80}px) ${mobile}px, calc(100vw - 5rem)`
}

// Conteúdo do modal de detalhes, renderizado no servidor. Fora da tela o <dialog> fica com
// display: none, então a imagem (lazy) só é baixada quando o modal abre
export function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <Image
        src={project.image}
        alt={`Screenshot do projeto ${project.title}`}
        sizes={dialogImageSizes(project.image)}
        placeholder='blur'
        className='mx-auto mb-6 h-auto max-h-64 w-auto max-w-full rounded-lg shadow-md lg:max-h-96'
      />
      <p className='mb-6 text-left text-lg leading-relaxed text-gray-700 dark:text-gray-300'>{project.description}</p>
      <a
        href={project.url}
        target='_blank'
        rel='noopener noreferrer'
        className='flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg'
      >
        Visitar Projeto
        <Icon icon={ExternalLink} size={18} />
      </a>
    </>
  )
}
