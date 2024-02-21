const getPostsByTag = (): string => `
  query PostsByTag($tag: String!) {
    posts(where: {tag: $tag}) {
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

export default getPostsByTag;