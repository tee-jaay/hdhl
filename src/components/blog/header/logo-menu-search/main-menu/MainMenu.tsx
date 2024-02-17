import Link from 'next/link';

const MainMenu = () => {
    return (
        <div className="main_menu flex-1">
            <ul className="flex justify-center space-x-6 text-slate-800 py-6">
                <li>
                    <Link className="font-medium text-sm" href="/">Home</Link>
                </li>
                <li>
                    <Link className="font-medium text-sm" href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className="font-medium text-sm" href="/blog/categories">Categories</Link>
                </li>
                <li>
                    <Link className="font-medium text-sm" href="/blog/tags">Tags</Link>
                </li>
                <li>
                    <Link className="font-medium text-sm" href="/contact-us">Contact Us</Link>
                </li>
                <li>
                    <Link className="font-medium text-sm" href="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default MainMenu;