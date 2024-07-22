const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = withNextra({
  i18n: {
    locales: ['en-US', 'zh-TW', 'zh-CN'],
    defaultLocale: 'en-US',
  },
  basePath: "/docs", // if sub route, need to set basePath
});

module.exports = nextConfig;
