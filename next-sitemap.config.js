/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://breadth.app/docs',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [{ userAgent: '*', allow: '/' }],
    },
}