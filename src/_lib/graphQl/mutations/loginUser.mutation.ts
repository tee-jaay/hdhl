const loginUser = () => `mutation Login {
    login(input: {password: "", username: ""}) {
      authToken
      clientMutationId
      refreshToken
      user {
        name
        nicename
        nickname
        lastName
        email
        firstName
        description
        slug
        username
        registeredDate
        comments {
          nodes {
            status
            commentedOn {
              node {
                slug
                date
              }
            }
            content(format: RENDERED)
          }
        }
      }
    }
  }`;
export default loginUser;