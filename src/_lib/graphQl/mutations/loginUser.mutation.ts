const loginUser = () => `mutation Login($username: String!, $password: String!, $clientMutationId: String!) {
  login(
    input: {password: $password, username: $username, clientMutationId: $clientMutationId}
  ) {
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
      slug
      username  
    }
  }
}`;
export default loginUser;