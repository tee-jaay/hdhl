const getCategoryBySlug = (): string => `
  query GetCategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      count
      name
      slug
      description
      seo {
        title
        metaDesc
      }
    }
  }
`;

export default getCategoryBySlug;