'use client'

import { MoonStar, Sun } from 'lucide'
import { useLayoutEffect } from 'react'
import { Icon } from '@/components/icon'
import { applyTheme, readStoredTheme, storeTheme } from '@/lib/theme'

export function ThemeToggle() {
  // Em dev, o remount do Strict Mode volta o <html> aos atributos do JSX e desfaz o que o script
  // inline aplicou. Reaplicar aqui não muda nada em produção
  useLayoutEffect(() => {
    applyTheme(readStoredTheme())
  }, [])

  const toggleTheme = () => {
    const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    applyTheme(theme)
    storeTheme(theme)
  }

  // Os dois ícones vêm no HTML e o CSS mostra o do tema atual: sem estado, sem flash nem mismatch
  return (
    <button
      type='button'
      onClick={toggleTheme}
      aria-label='Alternar entre tema claro e escuro'
      className='flex items-center justify-center rounded-md border border-transparent p-2 hover:border-black/60 dark:hover:border-white/60'
    >
      <Icon icon={Sun} className='dark:hidden' />
      <Icon icon={MoonStar} className='hidden dark:block' />
    </button>
  )
}
