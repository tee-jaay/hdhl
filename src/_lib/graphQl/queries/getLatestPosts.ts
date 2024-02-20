const getLatestPosts = (): string => `query GetLatestPosts {
    posts(
      where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
      first: 5
    ) {
      nodes {
        title
        slug
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