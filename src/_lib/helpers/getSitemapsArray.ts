import { apiUrl } from "../variables/constants";

async function getSitemapsArray() {
    // Fetch and count total posts
    const categoriesUrl = `${apiUrl}/wp-json/wp/v2/categories?_fields=id,count&per_page=100`;

    try {
        const response = await fetch(categoriesUrl);
        if (!response.ok) {
            throw new Error(`Error fetching categories: ${response.status}`);
        }
        const data = await response.json();
        interface Category { id: number, count: number, }
        // total posts
        const totalPosts = data.reduce((acc: number, category: Category) => acc + category.count, 0);
        // number of sitemap pages
        const numSitemaps = Math.ceil(totalPosts / 100);
        // sitemap objects
        const sitemapsArr = Array.from({ length: numSitemaps }, (_, index) => ({ id: index, }));
        return sitemapsArr;
    } catch (error) {
        console.error('Error generating sitemaps:', error);
    }
}
export default getSitemapsArray;