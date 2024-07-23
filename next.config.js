const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  defaultShowCopyCode: true,
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'zh-CN', 'zh-TW'],
    defaultLocale: 'en-US',
  },
  basePath: "/docs", // if sub route, need to set basePath
});

module.exports = nextConfig;
