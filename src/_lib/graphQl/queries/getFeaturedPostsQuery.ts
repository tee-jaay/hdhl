const getPostsByCategoryQuery = (): string => `
query PostsByCategory($category: String!) {
    posts(where: {categoryName: $category}) {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        commentCount
        date
      }
    }
}
`;

export default getPostsByCategoryQuery;