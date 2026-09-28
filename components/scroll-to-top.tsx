'use client'

import { ArrowUp } from 'lucide'
import { useSyncExternalStore } from 'react'
import { Icon } from '@/components/icon'

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true })
  window.addEventListener('resize', onChange)
  return () => {
    window.removeEventListener('scroll', onChange)
    window.removeEventListener('resize', onChange)
  }
}

const hasScrolledPastHalfScreen = () => window.scrollY > window.innerHeight * 0.5

export function ScrollToTopButton() {
  // No servidor o botão sai escondido; no cliente já nasce certo mesmo se a página recarregar no meio
  const isVisible = useSyncExternalStore(subscribe, hasScrolledPastHalfScreen, () => false)

  return (
    <button
      type='button'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label='Voltar ao topo'
      className={`fixed right-4 bottom-4 rounded-full bg-blue-500 p-3 text-white shadow-lg transition-[opacity,visibility,background-color] hover:bg-blue-700 ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <Icon icon={ArrowUp} />
    </button>
  )
}
