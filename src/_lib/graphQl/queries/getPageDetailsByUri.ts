const GetPageDetailsByUri = (): string => `
    query GetPageDetailsByUri($id: ID!) {
        page(id: $id, idType: URI) {
            content(format: RENDERED)
            date
            slug
            title(format: RENDERED)
        }
    }
`;
export default GetPageDetailsByUri;