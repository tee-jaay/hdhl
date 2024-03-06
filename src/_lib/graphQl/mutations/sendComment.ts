const sendComment = (): string => `mutation CreatePostComment($content: String!, $commentOn: Int!, $author: String!, $clientMutationId: String!) {
    createComment(
      input: {author: $author, commentOn: $commentOn, content: $content, clientMutationId: $clientMutationId}
    ) {
      success
      clientMutationId
    }
  }`;

export default sendComment;