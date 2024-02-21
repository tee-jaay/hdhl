import Link from "next/link";

const FooterBottom = () => {
    return (
        <div className="flex justify-between py-4 text-gray-200">
            <div className="copyrights text-sm">
                2024 &copy; Tee Jaay. All Rights Reserved.
            </div>
            <div className="privact_terms_links">
                <ul className="space-x-4 text-sm">
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms & Conditions</Link>
                </ul>
            </div>
        </div>
    );
}

export default FooterBottom;