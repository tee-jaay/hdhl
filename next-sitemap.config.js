/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.APP_URL || '',
    generateRobotsTxt: false,
    exclude: ['/sitemap-0.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [
            `${process.env.APP_URL}/sitemap/0.xml`,
        ],
    },
}