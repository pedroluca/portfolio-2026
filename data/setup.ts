import type { StaticImageData } from 'next/image'
import laptop from '@/assets/images/setup/laptop.webp'
import monitor from '@/assets/images/setup/monitor.webp'
import monitor2 from '@/assets/images/setup/monitor2.webp'
import earpods from '@/assets/images/setup/earpods.webp'
import headphone from '@/assets/images/setup/headphone.webp'
import mouse from '@/assets/images/setup/mouse.webp'
import mousepad from '@/assets/images/setup/mousepad.webp'
import smartphone2 from '@/assets/images/setup/smartphone2.webp'
import smartwatch from '@/assets/images/setup/smartwatch.webp'
import alexa from '@/assets/images/setup/alexa.webp'
import hub from '@/assets/images/setup/hub-usbc.webp'
import moleskine from '@/assets/images/setup/moleskine.webp'
import vscode from '@/assets/images/setup/vscode.webp'
import vesper from '@/assets/images/setup/vesper.webp'
import jetbrains from '@/assets/images/setup/jetbrains.webp'
import hyper from '@/assets/images/setup/hyper.webp'
import gitBash from '@/assets/images/setup/git-bash.webp'
import brave from '@/assets/images/setup/brave.webp'
import arc from '@/assets/images/setup/arc.webp'
import chrome from '@/assets/images/setup/chrome.webp'
import notion from '@/assets/images/setup/notion.webp'
import spotify from '@/assets/images/setup/spotify.webp'
import github from '@/assets/images/setup/github.webp'
import codigoLimpo from '@/assets/images/setup/codigo.webp'
import arquitetura from '@/assets/images/setup/arquitetura.webp'
import essencialismo from '@/assets/images/setup/essencialismo.webp'
import pinho from '@/assets/images/setup/pinho.webp'
import deschamps from '@/assets/images/setup/deschamps.webp'
import codecon from '@/assets/images/setup/codecon.webp'
import designDev from '@/assets/images/setup/design-dev-logo.webp'
import birobirobiro from '@/assets/images/setup/birobirobiro.webp'
import theNews from '@/assets/images/setup/the_news.webp'

export interface SetupItem {
  name: string
  category: string
  url: string
  image: StaticImageData
  roundImage?: boolean
  // Logos pretos somem no tema escuro e logos brancos no claro
  invertOn?: 'light' | 'dark'
}

export interface SetupSection {
  id: string
  title: string
  items: SetupItem[]
}

// Itens comentados continuam com a imagem em assets/images/setup: basta importar e descomentar
export const setupSections: SetupSection[] = [
  {
    id: 'workstation-section',
    title: 'Workstation',
    items: [
      { image: laptop, name: 'Samsung Galaxy Book3 360 13.3"', category: 'Laptop', url: 'https://www.amazon.com.br/dp/B0C5RY1WG9?psc=1&ref=ppx_yo2ov_dt_b_product_details' },
      { image: monitor, name: 'LG Ultrawide 25UM58G-P 25"', category: 'Monitor', url: 'https://www.lg.com/br/monitores/monitores-ultrawide/25um58g-p/' },
      { image: monitor2, name: 'Samsung S3 24"', category: 'Monitor', url: 'https://www.mercadolivre.com.br/monitor-gamer-samsung-24-fhd100-hz-hdmi-vgapreto-s3/p/MLB46560669#polycard_client=recommendations_cart_list_history&reco_backend=user_navigation_cart&reco_client=cart_list_history&reco_item_pos=2&reco_backend_type=function&reco_id=f7137fde-c7aa-4626-9bf9-6642a0a9be2d&wid=MLB5398777122&sid=recos' },
      // { image: monitor2, name: 'Samsung S3 24"', category: 'Monitor', url: 'https://www.artsolutioninformatica.com.br/monitor-lg-flatron-e1941c-185-polegadas' },
      { image: earpods, name: 'QCY HT08 Pro', category: 'Earpods', url: 'https://www.amazon.com.br/dp/B0D4QRHDZ9?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1' },
      { image: headphone, name: 'QCY H3', category: 'Headphone', url: 'https://www.amazon.com.br/QCY-ANC-Cancelamento-Certifica%C3%A7%C3%A3o-Multipontos/dp/B0CFFD7K4F/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-2' },
      // { image: headset, name: 'Razer Kraken Lite', category: 'Headset', url: 'https://www.amazon.com.br/gp/product/B07XC936P8/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' },
      { image: mouse, name: 'App-Tech MWR560', category: 'Mouse', url: 'https://www.kalunga.com.br/prod/mouse-sem-fio-ergonomico-recarregavel-1600dpi-preto-mwr560-app-tech-cx-1-un/436344' },
      { image: mousepad, name: 'Eddias Deskpad Office', category: 'Mousepad', url: 'https://www.eddias.com.br/products/mousepad-deskpad-office?variant=44281336103229' },
      { image: smartphone2, name: 'Samsung Galaxy S25 5G', category: 'Smartphone', url: 'https://www.mercadolivre.com.br/samsung-galaxy-s25-5g-256gb-12gb-camera-tripla-azul-marinho/p/MLB45502223?pdp_filters=item_id:MLB4646112803' },
      // { image: smartphone, name: 'Redmi Note 11 Pro', category: 'Smartphone', url: 'https://www.mi.com/br/product/redmi-note-11-pro/' },
      { image: smartwatch, name: 'Samsung Galaxy Fit3', category: 'Smartband', url: 'https://www.mercadolivre.com.br/samsung-smartwatch-galaxy-fit3-grafite/p/MLB34163245?pdp_filters=item_id:MLB3956720093' },
      { image: alexa, name: 'Alexa Echo Dot 4ª gen', category: 'Assistente', url: 'https://www.amazon.com.br/Echo-Dot-com-Rel%C3%B3gio-Cor-Branca/dp/B084J4WP6J' },
      { image: hub, name: 'Hub USB-C -> USB-A', category: 'Acessório', url: 'https://pt.aliexpress.com/item/1005005445851704.html?spm=a2g0o.order_list.order_list_main.30.21efcaa40xX5Os&gatewayAdapt=glo2bra' },
      { image: moleskine, name: 'Moleskine', category: 'Acessório', url: 'https://www.desenherabisque.com.br/' },
    ],
  },
  {
    id: 'coding-section',
    title: 'Coding',
    items: [
      // { image: antigravity, name: 'Antigravity', category: 'IDE', url: 'https://antigravity.google/' },
      { image: vscode, name: 'VS Code', category: 'IDE', url: 'https://code.visualstudio.com/' },
      { image: vesper, name: 'Vesper++', category: 'Tema', url: 'https://marketplace.visualstudio.com/items?itemName=Obstinate.vesper-pp', roundImage: true },
      // { image: vesper, name: 'Vesper Extended Cursor', category: 'Tema', url: 'https://open-vsx.org/extension/oreofreakshake/vesper-extended-cursor', roundImage: true },
      { image: jetbrains, name: 'JetBrains Mono', category: 'Fonte', url: 'https://www.jetbrains.com/pt-br/lp/mono/', invertOn: 'light' },
      { image: hyper, name: 'Hyper', category: 'Terminal', url: 'https://hyper.is/' },
      { image: gitBash, name: 'Git Bash for Windows', category: 'Shell', url: 'https://git-scm.com/' },
    ],
  },
  {
    id: 'web-tools-section',
    title: 'Web Tools',
    items: [
      { image: brave, name: 'Brave Browser', category: 'Navegador', url: 'https://brave.com', roundImage: true },
      { image: arc, name: 'Arc Browser for Windows', category: 'Navegador', url: 'https://arc.net', roundImage: true },
      { image: chrome, name: 'Google Chrome', category: 'Navegador', url: 'https://www.google.com/intl/pt-BR/chrome' },
      { image: notion, name: 'Notion', category: 'Anotações', url: 'https://notion.com', invertOn: 'dark' },
      { image: spotify, name: 'Spotify', category: 'Música', url: 'https://spotify.com' },
      // { image: googleDrive, name: 'Google Drive', category: 'Cloud', url: 'https://drive.google.com' },
      { image: github, name: 'GitHub', category: 'Controle de Versão', url: 'https://github.com', invertOn: 'dark' },
    ],
  },
  {
    id: 'books-section',
    title: 'Books',
    items: [
      { image: codigoLimpo, name: 'Código Limpo', category: 'Livro', url: 'https://www.amazon.com.br/gp/product/8576082675/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' },
      { image: arquitetura, name: 'Arquitetura Limpa', category: 'Livro', url: 'https://www.amazon.com.br/gp/product/8550804606/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1' },
      { image: essencialismo, name: 'Essencialismo', category: 'Livro', url: 'https://www.amazon.com.br/Essencialismo-Greg-Mckeown/dp/8543102146' },
      // { image: estruturaDados, name: 'Estrutura de Dados', category: 'Livro', url: '/setup' },
      // { image: devAndroid, name: 'Aplicativos para o Android', category: 'Livro', url: '/setup' },
      // { image: lotrBox, name: 'O Senhor dos Anéis', category: 'Box de livros', url: 'https://www.amazon.com.br/dp/8595086354?ref=ppx_yo2ov_dt_b_fed_asin_title' },
      // { image: solasterion, name: 'Solasterion', category: 'Livro', url: 'https://solasterion.com' },
    ],
  },
  {
    id: 'newsletter-section',
    title: 'Newsletter',
    items: [
      { image: pinho, name: 'Pinho', category: 'Newsletter', url: 'https://pinhoco.substack.com/about', roundImage: true },
      { image: deschamps, name: 'Filipe Deschamps', category: 'Newsletter', url: 'https://filipedeschamps.com.br/newsletter', roundImage: true },
      { image: codecon, name: 'Codecon', category: 'Newsletter', url: 'https://codecon.substack.com' },
      { image: designDev, name: 'Design Dev', category: 'Newsletter', url: 'https://design.dev/', invertOn: 'light' },
      { image: birobirobiro, name: 'Birobirobiro', category: 'Newsletter', url: 'https://birobirobiro.substack.com', roundImage: true },
      { image: theNews, name: 'The News', category: 'Newsletter', url: 'https://thenewscc.beehiiv.com/subscribe?ref=huLORfHEBz' },
    ],
  },
]
