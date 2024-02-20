const getFeaturedPostsQuery = () => `
query FeaturedPosts {
    posts(where: {categoryName: "Featured"}) {
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        commentCount
        date
      }
    }
}
`
export default getFeaturedPostsQuery;