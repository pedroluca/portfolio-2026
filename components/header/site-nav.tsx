'use client'

import { PanelRightClose, PanelRightOpen } from 'lucide'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import { Icon } from '@/components/icon'

const navItems = [
  { label: 'Sobre', href: '/#about-section' },
  { label: 'Projetos', href: '/#projects-section' },
  { label: 'Setup', href: '/setup' },
  { label: 'Links', href: '/links' },
]

const linkClassName =
  'relative flex w-full px-2 py-1 text-left font-semibold transition-colors duration-300 hover:text-black focus-visible:text-black focus-visible:outline-none lg:rounded-md dark:hover:text-white dark:focus-visible:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 dark:after:bg-white'

export function SiteNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className='flex'>
      <button
        type='button'
        onClick={() => setIsMenuOpen(true)}
        className='lg:hidden'
        aria-label='Abrir menu'
        aria-expanded={isMenuOpen}
        aria-controls='navbar'
      >
        <Icon icon={PanelRightOpen} />
      </button>
      {/* No mobile vira um painel lateral; fechado, fica `invisible` para sair da ordem de tab */}
      <nav
        id='navbar'
        aria-label='Principal'
        // Clique no fundo escurecido, fora do painel, fecha o menu
        onClick={(event) => event.target === event.currentTarget && closeMenu()}
        className={`flex max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:h-dvh max-lg:w-screen max-lg:flex-row-reverse max-lg:bg-black/40 max-lg:transition-[translate,visibility] max-lg:duration-300 dark:max-lg:bg-black/80 ${isMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:invisible max-lg:translate-x-full'}`}
      >
        <div className='flex flex-col max-lg:w-72 max-lg:border-l max-lg:border-white/20 max-lg:bg-white max-lg:px-5 max-lg:py-4 lg:flex-row lg:items-center dark:max-lg:bg-zinc-950'>
          <button type='button' onClick={closeMenu} className='self-end lg:hidden' aria-label='Fechar menu'>
            <Icon icon={PanelRightClose} />
          </button>
          <Image src={logo} alt='' className='mb-2 size-10 self-center invert lg:hidden dark:invert-0' />
          <hr className='border-black/20 lg:hidden dark:border-white/20' />
          <ul className='mt-4 flex flex-col gap-4 text-lg lg:mt-0 lg:flex-row lg:items-center'>
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`${linkClassName} ${isActive ? 'text-black dark:text-white' : 'text-zinc-600 dark:text-zinc-400'}`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}
