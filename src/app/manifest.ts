import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: process.env.APP_NAME,
        short_name: process.env.SHORT_NAME,
        description: process.env.APP_TAGLINE,
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#43a047',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}