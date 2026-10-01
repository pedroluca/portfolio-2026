import { Mail, type IconNode } from 'lucide'
import type { StaticImageData } from 'next/image'
import { siDuolingo, siGithub, siInstagram, siThreads, siYoutube, type SimpleIcon } from 'simple-icons'
import financesLogo from '@/assets/images/projects/finances-app.webp'
import presenzoLogo from '@/assets/images/projects/presenzo-app.webp'
import tractusLogo from '@/assets/images/projects/tractus-app.webp'
import { Linkedin } from '@/components/icon'
import { social } from '@/lib/site'

export type LinkIcon =
  // `adaptive` usa a cor do texto: as marcas do GitHub e do Threads são quase pretas e sumiriam no tema escuro
  | { type: 'brand'; icon: SimpleIcon; adaptive?: boolean }
  | { type: 'lucide'; icon: IconNode; color: string }
  | { type: 'image'; image: StaticImageData }

export interface SocialLink {
  label: string
  user?: string
  url: string
  icon: LinkIcon
}

export const links: SocialLink[] = [
  { label: 'Instagram', user: '@pedroluca.p', url: social.instagram, icon: { type: 'brand', icon: siInstagram } },
  { label: 'Threads', user: '@pedroluca.p', url: social.threads, icon: { type: 'brand', icon: siThreads, adaptive: true } },
  { label: 'Tractus', user: '@pedroluca', url: 'https://apptractus.com.br/', icon: { type: 'image', image: tractusLogo } },
  { label: 'Finances', user: '@pedroluca', url: 'https://finances.pedroluca.dev.br/', icon: { type: 'image', image: financesLogo } },
  { label: 'Presenzo', user: '@pedroluca', url: 'https://presenzo.com.br/', icon: { type: 'image', image: presenzoLogo } },
  { label: 'Github', user: '@pedroluca', url: social.github, icon: { type: 'brand', icon: siGithub, adaptive: true } },
  { label: 'LinkedIn', user: 'Pedro Luca Prates', url: social.linkedin, icon: { type: 'lucide', icon: Linkedin, color: '#0a66c2' } },
  // { label: 'X (Twitter)', user: '@pedrolucaofc', url: 'https://twitter.com/pedrolucaofc', icon: { type: 'brand', icon: siX } },
  { label: 'YouTube', user: 'Pedro Luca Prates', url: social.youtube, icon: { type: 'brand', icon: siYoutube } },
  // { label: 'Twitch', user: 'PedroLucaOFC', url: 'https://twitch.tv/PedroLucaOFC', icon: { type: 'brand', icon: siTwitch } },
  { label: 'Duolingo', user: 'pedroluca.p', url: social.duolingo, icon: { type: 'brand', icon: siDuolingo } },
  { label: 'E-mail', url: social.email, icon: { type: 'lucide', icon: Mail, color: '#5e95eb' } },
]
