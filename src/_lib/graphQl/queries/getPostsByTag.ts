const getPostsByTag = (): string => `
  query PostsByTag($tag: String!,  $first: Int!) {
    posts(where: {tag: $tag}, first: $first) {
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
        tags {
          nodes {
            slug
            name
          }
        }
        commentCount
        date
      }
    }
  }
`;

export default getPostsByTag;