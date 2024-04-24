const getPostSEOBySlug = (): string => `
    query getPostSEOBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {            
            seo{                 
                title
                metaDesc
                focuskw
                opengraphAuthor
                opengraphDescription
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                opengraphUrl
                opengraphSiteName
                opengraphPublishedTime
                opengraphModifiedTime
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                readingTime
            }
        }
    }
`;
export default getPostSEOBySlug;