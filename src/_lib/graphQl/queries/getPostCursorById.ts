const getPostCursorById = () => `
    query GetPostCursorById($id: Int!) {
        posts(where: {id: $id, orderby: {field: DATE, order: DESC}}) {    
            pageInfo {
                startCursor
            }
        }
    }
`;
export default getPostCursorById;