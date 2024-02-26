interface UserProps {
    id: string,
    slug: string,
    name: string,
    description: string,
    avatar: {
        url: string
    },
    posts: { nodes: [] },
}

export default UserProps;