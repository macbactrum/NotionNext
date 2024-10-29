const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const { THEME } = require('./blog.config')
const fs = require('fs')
const path = require('path')

/**
 * Scan the folder names in the specified directory to obtain how many topics there are currently
 * @param {*} directory
 * @returns
 */
function scanSubdirectories(directory) {
  const subdirectories = []

  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file)
    const stats = fs.statSync(fullPath)

    // landing The theme is special and is not displayed in switchable themes.
    if (stats.isDirectory() && file !== 'landing') {
      subdirectories.push(file)
    }
  })

  return subdirectories
}
// Scan the directory name under project/themes
const themes = scanSubdirectories(path.resolve(__dirname, 'themes'))
module.exports = withBundleAnalyzer({
  images: {
    // Image compression
    formats: ['image/avif', 'image/webp'],
    // Allow next/image to load image domain name
    domains: [
      'gravatar.com',
      'www.notion.so',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'p1.qhimg.com',
      'webmention.io'
    ]
  },
  // Redirect feed to /public/rss/feed.xml by default
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/rss/feed.xml',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat'
    //   })
    // }
    // Dynamic theme: add resolve.alias configuration to map dynamic paths to actual paths
    config.resolve.alias['@theme-components'] = path.resolve(__dirname, 'themes', THEME)
    return config
  },
  experimental: {
    scrollRestoration: true
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Ignore /pages/sitemap.xml.js when exporting, otherwise an error will be reported getServerSideProps
    const pages = { ...defaultPathMap }
    delete pages['/sitemap.xml']
    return pages
  },
  publicRuntimeConfig: { // The configuration here can be obtained either on the server side or on the browser side.
    NODE_ENV_API: process.env.NODE_ENV_API || 'prod',
    THEMES: themes
  }
})
