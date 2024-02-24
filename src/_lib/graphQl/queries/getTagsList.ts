const getTagsList = (): string => `query TagsList($first: Int!) {
    tags(first: $first) {
      nodes {
        slug
        name
        count
        id
      }
    }
  }`;

export default getTagsList;