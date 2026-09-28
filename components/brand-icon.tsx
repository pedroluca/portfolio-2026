import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
  icon: SimpleIcon
  size?: number
  // 'brand' usa a cor oficial da marca
  color?: string
  className?: string
}

export function BrandIcon({ icon, size = 24, color = 'currentColor', className }: BrandIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      fill={color === 'brand' ? `#${icon.hex}` : color}
      className={className}
      aria-hidden='true'
    >
      <path d={icon.path} />
    </svg>
  )
}
