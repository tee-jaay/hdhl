const getLatestComments = (): string => `
  query LatestComments($first: Int!, $status: String!) {
      comments(first: $first, where: {status: $status}) {
        nodes {
          id
          content(format: RENDERED)
          date
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          commentedOn {
            node {
              slug
            }
          }
        }
      }
    }
`;
export default getLatestComments;