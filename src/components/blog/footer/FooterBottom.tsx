interface Page {
    id: string,
    slug: string,
    title: string,
}
interface Pages {
    pages: Page[]
}
const FooterBottom = ({ pages }: Pages) => {
    console.log(pages);

    return (
        <div className="flex justify-start py-4 text-gray-200">
            <div className="copyrights text-sm">
                2024 &copy; Tee Jaay. All Rights Reserved.
            </div>
        </div>
    );
}

export default FooterBottom;