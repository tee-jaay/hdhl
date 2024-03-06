const sendPostComment = (): string => `mutation CreatePostComment($content: String!, $commentOn: Int!, $author: String!, $clientMutationId: String!, $authorEmail: String!, $authorUrl: String!) {
  createComment(
    input: {
      author: $author, 
      commentOn: $commentOn, 
      content: $content, 
      clientMutationId: $clientMutationId, 
      authorEmail: $authorEmail, 
      authorUrl: $authorUrl
    }
  ) {
    success
    clientMutationId
  }
}`;

export default sendPostComment;