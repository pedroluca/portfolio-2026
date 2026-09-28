export const site = {
  name: 'Pedro Luca Prates',
  url: 'https://pedroluca.dev.br',
  title: 'Pedro Luca Prates | Desenvolvedor Fullstack',
  jobTitle: 'Desenvolvedor Fullstack',
  description:
    'Pedro Luca Prates é desenvolvedor fullstack especializado em aplicações web modernas, React, Node.js e sistemas escaláveis.',
  locale: 'pt_BR',
  // Mês 0-indexado, como no Date
  birthDate: { year: 2003, month: 0, day: 28 },
}

export const social = {
  linkedin: 'https://linkedin.com/in/pedrolucaofc',
  github: 'https://github.com/pedroluca',
  instagram: 'https://instagram.com/pedroluca.p',
  threads: 'https://www.threads.net/@pedroluca.p',
  youtube: 'https://youtube.com/channel/@pedrolucaofc',
  duolingo: 'https://www.duolingo.com/profile/pedroluca.p',
  email: 'mailto:pedrolucadev@outlook.com',
}

export function getAge({ year, month, day }: typeof site.birthDate, today = new Date()) {
  const age = today.getFullYear() - year
  const hadBirthdayThisYear =
    today.getMonth() > month || (today.getMonth() === month && today.getDate() >= day)
  return hadBirthdayThisYear ? age : age - 1
}
