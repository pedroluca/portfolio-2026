export type Theme = 'light' | 'dark'

// Mesma chave e valores do site em Vite, então quem já escolheu o tema claro continua com ele
const STORAGE_KEY = 'theme'

// Roda inline no <head>, antes do primeiro paint. O HTML sai do servidor com `.dark` (o padrão);
// o script só tira a classe se o visitante escolheu o tema claro
export const themeScript = `try{if(localStorage.getItem('${STORAGE_KEY}')==='light')document.documentElement.classList.remove('dark')}catch(e){}`

export function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // localStorage bloqueado (ex.: cookies desativados): o tema só não persiste
  }
}
