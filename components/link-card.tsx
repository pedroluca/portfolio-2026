import Image from 'next/image'
import { BrandIcon } from '@/components/brand-icon'
import { Icon } from '@/components/icon'
import type { LinkIcon, SocialLink } from '@/data/links'

function SocialIcon({ icon }: { icon: LinkIcon }) {
  const className = 'size-12 shrink-0'

  switch (icon.type) {
    case 'brand':
      return <BrandIcon icon={icon.icon} color={icon.adaptive ? 'currentColor' : 'brand'} className={className} />
    case 'lucide':
      return <Icon icon={icon.icon} color={icon.color} className={className} />
    case 'image':
      return <Image src={icon.image} alt='' width={48} placeholder='blur' className={`${className} rounded-xl object-cover`} />
  }
}

export function LinkCard({ label, user, url, icon }: SocialLink) {
  const isWebLink = url.startsWith('http')

  return (
    <a
      href={url}
      {...(isWebLink && { target: '_blank', rel: 'noopener noreferrer' })}
      className='flex flex-row items-center justify-between rounded-3xl border border-gray-200 px-2.5 py-3 text-black shadow-md transition-all duration-300 hover:bg-zinc-100 hover:shadow-lg dark:text-white dark:hover:bg-zinc-900'
    >
      <SocialIcon icon={icon} />
      <div className='flex flex-col sm:mt-0 sm:ml-4 sm:items-center sm:text-right'>
        <h2 className='w-full text-xl font-semibold'>{label}</h2>
        <p className='hidden w-full text-sm text-gray-600 sm:block'>{user}</p>
      </div>
      {/* Espaço do mesmo tamanho do ícone para centralizar o texto no mobile */}
      <span aria-hidden='true' className='size-12 shrink-0 sm:hidden' />
    </a>
  )
}
