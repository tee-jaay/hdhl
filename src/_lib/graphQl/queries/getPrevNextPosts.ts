const getPrevNextPosts = (): string => `
    query PrevNextPostsQuery($cursor: String!){       
        nextPost: posts(
            last: 1
            before: $cursor
            where:{
                orderby: {field: DATE, order: DESC}
            }    
        ) {
            nodes {
                slug
                title(format: RENDERED)
            }
        }
        prevPost: posts(first: 1, after: $cursor) {
            nodes {
                slug
                title(format: RENDERED)
            }
        }
    }`;
export default getPrevNextPosts;