const getLatestPosts = (): string => `query GetLatestPosts($limit: Int!) {
    posts(
      where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
      first: $limit
    ) {
      nodes {
        title
        slug
        id
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
  }`
export default getLatestPosts;