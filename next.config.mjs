/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Nivii_portfolio',
  assetPrefix: '/Nivii_portfolio',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
