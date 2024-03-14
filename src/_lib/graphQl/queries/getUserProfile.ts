const getUserProfile = (): string => `query GetUserProfile($id: ID!) {
    guprofile(id: $id, idType: URI) {
      featuredImage {
        node {
          altText
          sourceUrl(size: MEDIUM)
        }
      }
      title(format: RENDERED)
      slug
    }
  }`;
export default getUserProfile;
