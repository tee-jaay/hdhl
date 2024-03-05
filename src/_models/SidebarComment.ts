export default interface SidebarComment {
    id: string,
    content: string,
    date: string,
    author: { node: { name: string, avatar: { url: string } } },
    commentedOn: {
        node: {
            slug: string
        }
    }
}