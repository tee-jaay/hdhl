const getFooterData = (): string => `query FooterData {
  pages(where: {status: PUBLISH}, first: 20) {
    nodes {
      id
      slug
      title(format: RENDERED)
    }
  }
  tags(first: 18) {
    nodes {
      slug
      name
      count
      id
    }
  }
  generalSettings {
    title
    description
  }
}`;

export default getFooterData;