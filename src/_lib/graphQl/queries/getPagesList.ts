const getPagesList = (): string => `query PagesList {
  pages(where: {status: PUBLISH}) {
    nodes {
      slug
      title(format: RENDERED)
    }
  }
}`;

export default getPagesList;