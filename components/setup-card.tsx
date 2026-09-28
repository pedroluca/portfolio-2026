import Image from 'next/image'
import type { SetupItem } from '@/data/setup'

const invertClassName = {
  light: 'invert dark:invert-0',
  dark: 'dark:invert',
}

export function SetupCard({ name, category, url, image, roundImage, invertOn }: SetupItem) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='flex h-full flex-col items-center overflow-hidden rounded-lg bg-white p-3 text-black shadow-[0_1px_4px_rgba(30,144,255,0.3)] transition-[box-shadow,scale] duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_8px_rgba(30,144,255,0.4),0_0_16px_rgba(30,144,255,0.2)] dark:bg-zinc-900 dark:text-white'
    >
      {/* Altura fixa (h-28/h-36): com `height` o srcset sai só em 1x/2x, na medida do card */}
      <Image
        src={image}
        alt=''
        height={144}
        placeholder='blur'
        className={`h-28 w-auto object-contain p-1 md:h-36 ${invertOn ? invertClassName[invertOn] : ''} ${roundImage ? 'rounded-xl' : ''}`}
      />
      <div className='w-full p-0.5'>
        <h3 className='mb-2 text-left text-lg font-semibold'>{name}</h3>
        <p className='w-fit rounded-2xl bg-zinc-200 px-3 py-1 text-left text-sm text-gray-600 dark:bg-zinc-800 dark:text-gray-400'>
          {category}
        </p>
      </div>
    </a>
  )
}
