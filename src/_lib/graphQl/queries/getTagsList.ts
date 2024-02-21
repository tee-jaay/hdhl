const getTagsList = (): string => `query TagsList {
    tags {
      nodes {
        slug
        name
        count
        id
      }
    }
  }`;

export default getTagsList;