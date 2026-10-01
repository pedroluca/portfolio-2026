import type { StaticImageData } from 'next/image'
import financesLogo from '@/assets/images/projects/finances-app.webp'
import presenzoLogo from '@/assets/images/projects/presenzo-app.webp'
import tractusLogo from '@/assets/images/projects/tractus-app.webp'
import appFinances from '@/assets/images/projects/app-finances.webp'
import appTractus from '@/assets/images/projects/app-tractus.webp'
import sitePresenzo from '@/assets/images/projects/site-presenzo.webp'
import siteTractus from '@/assets/images/projects/site-tractus.webp'
import olimpiadas from '@/assets/images/projects/olimpiadas.webp'
import painelEstanciaA from '@/assets/images/projects/painel-estanciaa.webp'
import fazendaCedro from '@/assets/images/projects/fazenda-cedro.webp'
import crianca from '@/assets/images/projects/crianca.webp'
import ifbaiano from '@/assets/images/projects/ifbaiano.webp'

export interface Project {
  title: string
  description: string
  url: string
  // Imagem exibida no modal de detalhes
  image: StaticImageData
}

export interface App extends Project {
  logo: StaticImageData
}

export const apps: App[] = [
  {
    title: 'Tractus',
    description: 'Aplicativo para acompanhamento de treinos e exercícios.',
    url: 'https://apptractus.com.br/',
    logo: tractusLogo,
    image: appTractus,
  },
  {
    title: 'Finances',
    description: 'Aplicativo de Gestão Financeira.',
    url: 'https://finances.pedroluca.dev.br/',
    logo: financesLogo,
    image: appFinances,
  },
  {
    title: 'Presenzo',
    description: 'Site de Gestão e Convite de convidados para eventos.',
    url: 'https://presenzo.com.br/',
    logo: presenzoLogo,
    image: sitePresenzo,
  },
]

export const projects: Project[] = [
  // {
  //   title: 'App TrainLog',
  //   description: 'Webapp para acompanhamento de treinos e exercícios, com temporizador de intervalos incluso e compartilhamento de treinos.',
  //   url: 'https://app.trainlog.site/',
  //   image: appTrainlog, // import appTrainlog from '@/assets/images/projects/app-trainlog.webp'
  // },
  {
    title: 'Site Tractus',
    description: 'Site institucional explicativo para o aplicativo Tractus.',
    url: 'https://apptractus.com.br/',
    image: siteTractus,
  },
  {
    title: 'I Olimpíadas Científicas do Território Sertão Produtivo',
    description:
      'Site para divulgação de datas, inscrições, e contato dos participantes das I Olimpíadas Científicas do Território Sertão Produtivo.',
    url: 'https://olimpiadas-cientificas.vercel.app/',
    image: olimpiadas,
  },
  {
    title: 'Presenzo Convites',
    description:
      'Sistema de Gestão e Convite de convidados para eventos, com confirmação online e lista de sugestão de presentes.',
    url: 'https://presenzo.com.br/',
    image: presenzoLogo,
  },
  {
    title: 'Painel de Produção - Estância A',
    description:
      'Um painel de produção e gerenciamento de pedidos no setor de produção de buquês e arranjos da Floricultura Estância A.',
    url: 'https://pedroluca.dev.br/',
    image: painelEstanciaA,
  },
  {
    title: 'Site Fazenda Cedro',
    description:
      'Site Institucional para a Fazenda Cedro. Servindo como Landing Page e fonte de informações para visitantes e pessoas interessadas.',
    url: 'https://fazendacedro.vercel.app/',
    image: fazendaCedro,
  },
  {
    title: 'Blog Criança Alerta',
    description:
      'Blog educativo com o intuito de ensinar para as crianças e adolescentes sobre seus direitos. Cards interativos e joguinho Scratch integrado.',
    url: 'https://tan-ant-672552.hostingersite.com/',
    image: crianca,
  },
  {
    title: 'Site do IFBAIANO - Guanambi',
    description: 'Atividade acadêmica cujo intuito era desenvolver ou repaginar um site.',
    url: 'https://repage-if-baiano.vercel.app/',
    image: ifbaiano,
  },
]
