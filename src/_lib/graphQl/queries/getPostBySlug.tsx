const getPostBySlug = (): string => `
    query getPostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            slug
            id
            title(format: RENDERED)
            content(format: RENDERED)
            date
            featuredImage {
                node {
                    sourceUrl(size: LARGE)
                    altText
                }
            }
            tags {
                nodes {
                    slug
                    name
                }
            }
            author {
                node {
                    avatar {
                        url
                    }
                    name
                    slug
                    description
                }
            }
            comments {
                nodes {
                    id
                    date
                    content(format: RENDERED)
                    approved
                    author {
                        node {
                            name
                            avatar {
                                url
                            }
                        }
                    }
                }
            }
        }
    }
`;
export default getPostBySlug;