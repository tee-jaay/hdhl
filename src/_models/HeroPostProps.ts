interface HeroPostProps {
    id: string,
    title: string,
    slug: string,
    featuredImage: {
        node: {
            sourceUrl: string,
            altText: string,
        }
    },
    categories: {
        nodes: [
            {
                name: string,
                slug: string,
            }
        ]
    },
    author: {
        node: {
            name: string,
            slug: string,
            avatar: {
                url: string
            }
        }
    },
    commentCount: string,
    date: string
}

export default HeroPostProps;