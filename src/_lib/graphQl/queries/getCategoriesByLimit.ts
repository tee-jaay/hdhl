const getCategoriesByLimit = (): string => `
    query Categories($first: Int!) {
        categories(first: $first) {
            nodes {
                id
                slug
                name
                count
            }
        }
    }`;
export default getCategoriesByLimit;