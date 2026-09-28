import type { ReactNode } from 'react'
import { siGithub, siInstagram, siThreads, siYoutube } from 'simple-icons'
import { BrandIcon } from '@/components/brand-icon'
import { Icon, Linkedin } from '@/components/icon'
import { social } from '@/lib/site'

const footerLinks: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'LinkedIn', href: social.linkedin, icon: <Icon icon={Linkedin} /> },
  { label: 'GitHub', href: social.github, icon: <BrandIcon icon={siGithub} /> },
  { label: 'Instagram', href: social.instagram, icon: <BrandIcon icon={siInstagram} /> },
  { label: 'Threads', href: social.threads, icon: <BrandIcon icon={siThreads} /> },
  { label: 'YouTube', href: social.youtube, icon: <BrandIcon icon={siYoutube} /> },
]

export function Footer() {
  return (
    <footer className='flex h-16 items-center justify-center gap-3 bg-white px-3 py-1 dark:bg-neutral-950'>
      {footerLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noreferrer'
          aria-label={label}
          className='flex size-10 items-center justify-center rounded-sm text-[#888] hover:bg-black/10 dark:hover:bg-white/20'
        >
          {icon}
        </a>
      ))}
    </footer>
  )
}
