import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: ['/auth/*', '/dashboard/*', '/categories/*', '/tags/*', '/contact', '/pages/*'],
            },
        ],
        sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    }
}