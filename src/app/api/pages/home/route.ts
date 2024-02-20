export async function GET(request: Request) {
    // Send the query to the GraphQL API
    const response = await fetch("https://healthydiethappylife.com/12ecf45b-4e5c-4149-9f76-bdb3d7a682b4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
            query FeaturedPosts {
                posts(where: {categoryName: "Featured"}) {
                  nodes {
                    title(format: RENDERED)
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
        `,
        }),
    });

    // Parse the response body as JSON
    const data = await response.json();
    const { nodes } = data.data.posts;

    // Return the posts from the GraphQL API
    return new Response(JSON.stringify(nodes));
}