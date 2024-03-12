const getUserProfiles = (): string => `
  query GetUserProfiles {
    guprofiles {
      nodes {
        slug
        title(format: RENDERED)
        excerpt(format: RENDERED)
        featuredImage {
          node {
            altText
            sourceUrl(size: MEDIUM)
          }
        }
        content(format: RENDERED)
        databaseId
      }
    }
    users {
      nodes {
        name
        slug     
      }
    }
  }
`;
export default getUserProfiles;