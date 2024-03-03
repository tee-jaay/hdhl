const getUserBySlug = (): string => `
    query UserBySlug($id: ID!) {
        user(id: $id, idType: SLUG) {
            name
            id
            slug
            description
            posts(where: {status: PUBLISH}) {
                nodes {
                    id
                    excerpt(format: RENDERED)
                    slug
                    title(format: RENDERED)
                    date
                    commentCount
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
            avatar {
                url
            }
        }
    }
`;

export default getUserBySlug;