import { faPinterest, faTwitter, faYoutube, faMedium, faFlipboard, IconDefinition, fa42Group, faFacebook } from '@fortawesome/free-brands-svg-icons';

const generateProfileIcon = (title: string): IconDefinition => {
    let icon = null;
    switch (title) {
        case "youtube":
            icon = faYoutube;
            break;
        case "twitter":
            icon = faTwitter;
            break;
        case "medium":
            icon = faMedium;
            break;
        case "flipboard":
            icon = faFlipboard;
            break;
        case "pinterest":
            icon = faPinterest;
            break;
        default:
            icon = faFacebook;
    }
    return icon;
}
export default generateProfileIcon;