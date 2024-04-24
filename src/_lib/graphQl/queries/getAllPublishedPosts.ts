const getAllPublishedPosts = (): string => `query GetLatestPosts {
    posts(where: {status: PUBLISH}, first: 300) {
      nodes {  
        databaseId
        slug
        date
        title(format: RENDERED)
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
  }`
export default getAllPublishedPosts;