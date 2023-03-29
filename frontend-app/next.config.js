/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|tx)x?$/] },
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig
