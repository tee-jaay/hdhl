const getCategoryBySlug = (): string => `
  query GetCategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      count
      name
      slug
      description
    }
  }
`;

export default getCategoryBySlug;