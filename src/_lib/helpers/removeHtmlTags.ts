// Remove all HTML tags from a string
const removeHtmlTags = (str: string): string => {
    return str.replace(/<[^>]*>/g, '').replace(/\n/g, '');
};

export default removeHtmlTags;