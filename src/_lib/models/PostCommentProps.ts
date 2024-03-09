export default interface PostCommentProps {
    id: string,
    date: string,
    content: string,
    approved: boolean,
    author: {
        node: {
            name: string,
            avatar: {
                url: string
            }
        }
    }
}