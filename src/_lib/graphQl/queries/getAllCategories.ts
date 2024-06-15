const getAllCategories = (): string => `
query allCategories() {
    categories(first: 100) {
        nodes {
            count
        }
    }
}`;
export default getAllCategories;