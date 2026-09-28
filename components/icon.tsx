import type { IconNode } from 'lucide'
import { createElement, type SVGProps } from 'react'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  icon: IconNode
  size?: number
}

// Renderiza os dados de ícone do pacote `lucide` como SVG puro. O `lucide-react` marca todo ícone
// como Client Component, o que mandaria o runtime dele pro navegador até em Server Components
export function Icon({ icon, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      {icon.map(([tag, attrs], index) => createElement(tag, { key: index, ...attrs }))}
    </svg>
  )
}

// O Lucide removeu os ícones de marca na v1; este é o LinkedIn da versão que o site usava (0.364)
export const Linkedin: IconNode = [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9' }],
  ['circle', { cx: '4', cy: '4', r: '2' }],
]
