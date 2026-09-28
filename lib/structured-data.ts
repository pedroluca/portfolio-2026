import profile from '@/assets/images/profile.webp'
import { site, social } from './site'

const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`

export const personSchema = {
  '@type': 'Person',
  '@id': personId,
  name: site.name,
  url: site.url,
  image: `${site.url}${profile.src}`,
  jobTitle: site.jobTitle,
  worksFor: { '@type': 'Organization', name: 'PROCEDE' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Instituto Federal Baiano - Campus Guanambi' },
  knowsAbout: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'Django', 'PHP', 'Laravel', 'SQL', 'Java', 'C'],
  sameAs: [social.github, social.linkedin, social.instagram, social.threads, social.youtube],
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: site.url,
  name: site.name,
  inLanguage: 'pt-BR',
  author: { '@id': personId },
}

// A home é a página de perfil: o Google usa ProfilePage + Person para entender quem é o autor do site
export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/#profile`,
        url: site.url,
        name: site.title,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
      },
      personSchema,
      websiteSchema,
    ],
  }
}

export function breadcrumbJsonLd(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: site.url },
      { '@type': 'ListItem', position: 2, name, item: `${site.url}${path}` },
    ],
  }
}
