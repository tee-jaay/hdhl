export default interface SidebarCommentProps {
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