const getPostsByCategory = (): string => `
query PostsByCategory($category: String!, $limit: Int!) {
    posts(where: {categoryName: $category}, first: $limit) {
      nodes {
        id
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            altText
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