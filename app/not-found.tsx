import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import notFoundImage from '@/assets/images/dev.gif'

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <div className='flex h-[calc(100vh-4rem)] flex-col items-center justify-center p-4'>
      <h1 className='mb-4 animate-bounce text-4xl font-bold'>Oops...</h1>
      {/* GIF animado: o otimizador do Next não converte, então vai o arquivo original */}
      <Image
        src={notFoundImage}
        alt='Animated guy with dark blue hood coding in a laptop'
        unoptimized
        className='mb-4 h-64 w-auto'
      />
      <p className='mb-4 text-lg text-black dark:text-white'>Erro 404: Página não encontrada</p>
      <p className='mb-8 text-gray-500 dark:text-gray-400'>
        Parece que você se perdeu. Vamos te levar de volta para a página inicial.
      </p>
      <Link
        href='/'
        className='rounded-sm bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700'
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}
