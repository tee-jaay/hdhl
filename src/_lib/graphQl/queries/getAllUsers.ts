const getAllUsers = (): string => `
query AllUsers {
    users {
      nodes {
        slug
        id
        posts {
            nodes {
                id
            }
        }
        name
        avatar {
            url
        }
            description
        }
    }
}
`;

export default getAllUsers;