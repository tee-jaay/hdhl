const getAllPublishedPosts = (): string => `query GetLatestPosts {
    posts(where: {status: PUBLISH}, first: 300) {
      nodes {  
        databaseId
        slug
        date
      }
    }
  }`
export default getAllPublishedPosts;