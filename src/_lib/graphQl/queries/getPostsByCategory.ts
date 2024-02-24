const getPostsByCategory = (): string => `
query PostsByCategory($category: String!, $limit: Int!) {
    posts(where: {categoryName: $category}, first: $limit) {
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

export default getPostsByCategory;