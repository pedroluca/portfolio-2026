import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo.svg'
import { SiteNav } from './site-nav'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className='fixed z-30 flex h-16 w-full items-center justify-between border-b border-white/20 px-3 py-1 backdrop-blur-md lg:px-[20%]'>
      <div className='flex items-center gap-4'>
        <Link href='/' className='flex items-center'>
          <Image src={logo} alt='Pedro Luca Prates — início' loading='eager' className='size-10 invert dark:invert-0' />
        </Link>
        <ThemeToggle />
      </div>
      <SiteNav />
    </header>
  )
}
