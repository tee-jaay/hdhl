import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/'],
                disallow: [
                    '/api/*',
                    '/auth/*',
                    '/contact',
                    '/categories/*',
                    '/dashboard/*',
                    '/pages/*',
                    '/tags/*',
                ],
            },
        ],
        sitemap: `${process.env.BASE_URL}/sitemap.xml`,
    }
}