const registerUser = () => `mutation RegisterUser($clientMutationId: String!, $email: String!, $password: String!, $username: String!) {
  registerUser(
      input: {username: $username, password: $password, email: $email, clientMutationId: $clientMutationId}
    ) {
      user {     
        email   
        slug
        databaseId
        jwtAuthToken
        jwtRefreshToken        
      }
    }
  }
  `;
export default registerUser;