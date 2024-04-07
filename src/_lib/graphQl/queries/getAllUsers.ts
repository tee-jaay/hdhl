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
        seo {
            metaDesc
            metaRobotsNofollow
            metaRobotsNoindex
            title
            fullHead
            social {
                youTube
                wikipedia
                twitter
                soundCloud
                pinterest
                mySpace
                linkedIn
                instagram
                facebook
            }
        }
    }
}
`;

export default getAllUsers;