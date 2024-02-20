export async function GET(request: Request) {
    // Send the query to the GraphQL API
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
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