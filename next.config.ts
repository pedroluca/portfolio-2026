import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // O barrel do lucide exporta ~1.600 ícones; assim só os usados são carregados
    optimizePackageImports: ['lucide'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pedroluca.vercel.app' }],
        destination: 'https://pedroluca.dev.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
