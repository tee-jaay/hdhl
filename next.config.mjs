/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/robots.txt',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'text/plain',
                    }
                ],
            },
            {
                source: '/sitemap/0.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    }
                ],
            },
            {
                source: '/rss.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/xml',
                    }
                ],
            },
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'secure.gravatar.com',
            },
        ],
    },
    experimental: {
        esmExternals: true,
    },
};

export default nextConfig;