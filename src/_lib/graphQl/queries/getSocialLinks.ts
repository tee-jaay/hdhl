const getSocialLinks = (): string => `query GetSocialLinks {
    gslinks {
      nodes {
        content
        title
        excerpt
      }
    }
  }
 `;
export default getSocialLinks;