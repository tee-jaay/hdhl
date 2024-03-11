const createUser = () => `mutation CreateUser($clientMutationId: String!, $email: String!, $password: String!, $username: String!) {
    createUser(
      input: {username: $username, password: $password, email: $email, clientMutationId: $clientMutationId}
    ) {
      clientMutationId
      user {
        username
        slug
        email
      }
    }
  }`;
export default createUser;