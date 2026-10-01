import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Export estático (pasta out/) para subir direto no public_html da Hostinger
  output: 'export',
  // Gera /links/index.html em vez de /links.html, que o Apache/LiteSpeed serve sem regra de rewrite
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // Sem servidor não há otimização sob demanda: as imagens saem como estão em assets/
    unoptimized: true,
  },
  experimental: {
    // O barrel do lucide exporta ~1.600 ícones; assim só os usados são carregados
    optimizePackageImports: ['lucide'],
  },
}

export default nextConfig
