const getLatestPosts = (): string => `query GetLatestPosts($limit: Int!, $startCursor: String!, $endCursor: String!) {
    posts(
      where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
      first: $limit
      after: $endCursor
      before: $startCursor
    ) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
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