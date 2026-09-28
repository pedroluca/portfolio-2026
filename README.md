# pedroluca.dev.br

Portfólio do Pedro Luca Prates em Next.js 16 (App Router), React 19, Tailwind CSS v4 e TypeScript.

```bash
pnpm dev     # desenvolvimento
pnpm build   # build de produção: pré-renderiza as páginas e gera as imagens OG
pnpm start   # serve o build
pnpm lint
```

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Aplicativos e projetos da home | `data/projects.ts` (imagens em `assets/images/projects`) |
| Itens do /setup | `data/setup.ts` (imagens em `assets/images/setup`) |
| Cards do /links | `data/links.ts` |
| Timeline do "Sobre mim" | `data/career.ts` |
| Nome, URL, descrição e redes sociais | `lib/site.ts` (alimenta metadata, JSON-LD e rodapé) |
| Rotas do sitemap | `app/sitemap.ts` (rota nova precisa entrar aqui) |

Itens comentados em `data/setup.ts` e `data/projects.ts` já têm a imagem na pasta: basta importar e descomentar.

## Como funciona

- **Renderização:** todas as rotas são pré-renderizadas no build. A home é regerada uma vez por dia (`revalidate`) para a idade no "Sobre mim" acompanhar o aniversário.
- **Tema:** o HTML sai com a classe `dark` no `<html>`; o script inline de `components/theme-script.tsx` a remove antes do primeiro paint se o visitante escolheu o tema claro. Os componentes usam a variante `dark:` do Tailwind, e a escolha fica no `localStorage` (chave `theme`).
- **Imagens:** sempre via `next/image` com import estático, que dá tamanho, blur e AVIF/WebP automáticos.
- **Ícones:** os de interface vêm do pacote `lucide`, renderizados como SVG por `components/icon.tsx` (o `lucide-react` transformaria cada ícone em Client Component). Os de marca vêm do `simple-icons`, via `components/brand-icon.tsx`.
- **SEO:** metadata por página em `lib/metadata.ts`, JSON-LD em `lib/structured-data.ts`, imagens OG em `app/**/opengraph-image.tsx` (fonte Geist em `assets/fonts`, licença OFL).
- **Redirect:** `pedroluca.vercel.app` → `pedroluca.dev.br` fica em `next.config.ts`.
