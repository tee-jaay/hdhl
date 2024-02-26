const getPostsBySearchText = () => `
    query GetPostsBySearchText($search: String!) {
        posts(where: {search: $search}) {
            nodes {
                title(format: RENDERED)
                slug
                date
                excerpt(format: RENDERED)
            }
        }
    }`

export default getPostsBySearchText;