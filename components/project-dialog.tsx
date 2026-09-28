'use client'

import { X } from 'lucide'
import { useId, useRef, type ReactNode } from 'react'
import { Icon } from '@/components/icon'

interface ProjectDialogProps {
  title: string
  // Classes do card que abre o modal
  className: string
  // Card e conteúdo do modal chegam prontos do servidor; aqui só fica o abrir/fechar
  card: ReactNode
  children: ReactNode
}

export function ProjectDialog({ title, className, card, children }: ProjectDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  return (
    <>
      <article className={`relative ${className}`}>
        {card}
        {/* Botão esticado sobre o card inteiro, para o título continuar sendo um heading de verdade.
            O anel de foco fica por dentro porque o card corta o que passa da borda (overflow-hidden) */}
        <button
          type='button'
          aria-haspopup='dialog'
          onClick={() => dialogRef.current?.showModal()}
          className='absolute inset-0 rounded-[inherit] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-500'
        >
          <span className='sr-only'>Ver detalhes de {title}</span>
        </button>
      </article>
      {/* O <dialog> nativo cuida de ESC, foco preso no modal e devolução do foco ao fechar.
          Fica fora do card para o hover do card não disparar com o mouse em cima do modal */}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        // Clique fora do conteúdo cai no ::backdrop, que tem o próprio <dialog> como alvo
        onClick={(event) => event.target === event.currentTarget && event.currentTarget.close()}
        className='project-dialog m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-lg bg-white text-black shadow-2xl open:animate-slide-up dark:bg-zinc-900 dark:text-white'
      >
        <div className='relative p-6'>
          <form method='dialog'>
            <button
              aria-label='Fechar'
              className='absolute top-4 right-4 rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-200'
            >
              <Icon icon={X} />
            </button>
          </form>
          <h2 id={titleId} className='mb-4 pr-10 text-left text-3xl font-bold'>
            {title}
          </h2>
          {children}
        </div>
      </dialog>
    </>
  )
}
