import removeHtmlTags from "./removeHtmlTags";

const generateProfileLink = (key: string, profileId: string): string => {
    let link: string = "/";
    const trimmedProfileId = removeHtmlTags(profileId);
    switch (key) {
        case "youtube":
            link = `https://www.youtube.com/channel/${trimmedProfileId}`;
            break;
        case "twitter":
            link = `https://twitter.com/${trimmedProfileId}`;
            break;
        case "medium":
            link = `https://medium.com/@${trimmedProfileId}`;
            break;
        case "flipboard":
            link = `https://flipboard.com/@${trimmedProfileId}?from=share&utm_source=flipboard&utm_medium=curator_share`;
            break;
        case "pinterest":
            link = `https://www.pinterest.com/${trimmedProfileId}`;
            break;
        default:
            link = "/";
            break;
    }
    return link;
}
export default generateProfileLink;