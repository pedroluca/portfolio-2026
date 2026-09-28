export interface TimelineItem {
  id: string
  title: string
  place: string
  side: 'professional' | 'academic'
  start: [number, number] // [ano, mês 0-11]
  end?: [number, number] // undefined = presente
  isEvent?: true
}

// Timeline do desktop, agrupada por ano
export const timelineItems: TimelineItem[] = [
  // ─── Acadêmico ─────────────────────────────────────────────────────────────
  {
    id: 'cna',
    side: 'academic',
    title: 'Curso de Inglês - CNA Master in English',
    place: 'CNA • Guanambi, BA',
    start: [2016, 0],
    end: [2022, 11],
  },
  {
    id: 'em-tecnico',
    side: 'academic',
    title: 'Ensino Médio - Técnico em Informática para Internet',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2018, 0],
    end: [2021, 7],
  },
  {
    id: 'vila-ciencia',
    side: 'academic',
    title: 'Apresentação de Projeto - I Vila da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2018, 10],
    isEvent: true,
  },
  {
    id: 'ads',
    side: 'academic',
    title: 'Ensino Superior - Tecnologia em Análise e Desenvolvimento de Sistemas',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2022, 7],
    end: [2025, 2],
  },
  {
    id: '2-tenda-ciencia',
    side: 'academic',
    title: 'Apresentação de Projeto - II Tenda da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2024, 3],
    isEvent: true,
  },
  {
    id: '1-tenda-ciencia',
    side: 'academic',
    title: 'Apresentação de Projeto - I Tenda da Ciência',
    place: 'IFBAIANO - Campus Guanambi',
    start: [2023, 3],
    isEvent: true,
  },

  // ─── Profissional ──────────────────────────────────────────────────────────
  {
    id: 'estagio-suporte',
    side: 'professional',
    title: 'Estágio - Suporte em TI',
    place: 'VISDOM • Guanambi, BA',
    start: [2019, 5],
    end: [2020, 1],
  },
  {
    id: 'freelancer',
    side: 'professional',
    title: 'Desenvolvedor Web Fullstack',
    place: 'Freelancer • Brasil',
    start: [2021, 7],
  },
  {
    id: 'hospital',
    side: 'professional',
    title: 'Técnico de Suporte em TI',
    place: 'Hosp. Geral de Guanambi',
    start: [2021, 11],
    end: [2022, 7],
  },
  {
    id: 'estagio-dev-web',
    side: 'professional',
    title: 'Estágio - Desenvolvedor Web',
    place: 'VISDOM • Guanambi, BA',
    start: [2024, 3],
    end: [2024, 5],
  },
  {
    id: 'estagio-dev-fullstack',
    side: 'professional',
    title: 'Estágio - Desenvolvedor Fullstack',
    place: 'VISDOM • Guanambi, BA',
    start: [2024, 11],
    end: [2025, 1],
  },
  {
    id: 'estagio-procede',
    side: 'professional',
    title: 'Estágio - Desenvolvedor Fullstack',
    place: 'PROCEDE • Salvador, BA',
    start: [2025, 5],
    end: [2025, 6],
  },
  {
    id: 'procede',
    side: 'professional',
    title: 'Desenvolvedor Fullstack',
    place: 'PROCEDE • Salvador, BA',
    start: [2025, 6],
  },
]

export interface CareerEntry {
  title: string
  place: string
  period: string
}

// Listas empilhadas do mobile
export const professionalCareer: CareerEntry[] = [
  { title: 'Desenvolvedor Fullstack', place: 'PROCEDE • Salvador, Bahia, Brasil', period: 'Jun. 2025 -- Presente' },
  { title: 'Desenvolvedor Web Fullstack', place: 'Freelancer • Brasil', period: 'Ago. 2021 -- Presente' },
  { title: 'Estágio como Desenvolvedor Fullstack', place: 'VISDOM • Guanambi, Bahia, Brasil', period: 'Dez. 2024 -- Fev. 2025' },
  { title: 'Estágio como Desenvolvedor Web', place: 'VISDOM • Guanambi, Bahia, Brasil', period: 'Abr. 2024 -- Jun. 2024' },
  { title: 'Técnico de Suporte em TI', place: 'Hospital Geral de Guanambi • Guanambi, Bahia, Brasil', period: 'Dez. 2021 -- Ago. 2022' },
  { title: 'Estágio como Técnico de Suporte em TI', place: 'VISDOM • Guanambi, Bahia, Brasil', period: 'Jun. 2019 -- Fev. 2020' },
]

export const academicCareer: CareerEntry[] = [
  // { title: 'II Tenda da Ciência - Sistema para 1ª Olimpíadas Científicas', place: 'IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil', period: 'Abr. 2024' },
  { title: 'Ensino Superior de Tecnologia em Análise e Desenvolvimento de Sistemas', place: 'IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil', period: 'Ago. 2022 -- Mar. 2025' },
  { title: 'I Vila da Ciência - Sistema de alarme com Arduino UNO', place: 'IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil', period: 'Nov. 2018' },
  { title: 'Ensino Médio Integrado ao Curso Técnico em Informática para Internet', place: 'IF Baiano - Campus Guanambi • Guanambi, Bahia, Brasil', period: 'Jan. 2018 -- Ago. 2021' },
  { title: 'CNA Master in English Course', place: 'CNA • Guanambi, Bahia, Brasil', period: '2016 -- Dez. 2022' },
]
