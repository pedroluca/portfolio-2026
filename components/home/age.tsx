'use client'

import { useSyncExternalStore } from 'react'
import { getAge, site } from '@/lib/site'

// A idade não muda enquanto a página está aberta
const subscribe = () => () => {}

// O export estático congela a idade no build; no navegador ela é recalculada com a data de hoje
export function Age({ atBuild }: { atBuild: number }) {
  return useSyncExternalStore(subscribe, () => getAge(site.birthDate), () => atBuild)
}
