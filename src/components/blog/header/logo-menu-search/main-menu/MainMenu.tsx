import MainMenuLink from '@/components/common/MainMenuLink';

const mainMenuLinks = [
    { path: "/", text: "Home" },
    { path: "/blog", text: "Blog" },
    { path: "/categories", text: "Categories" },
    { path: "/tags", text: "Tags" },
    { path: "/contact", text: "Contact Us" },
    { path: "/pages/about-us", text: "About" },
    { path: "/authors", text: "Authors" },
];

const MainMenu = () => {
    return (
        <div className="main_menu flex-1">
            <ul className="flex items-center justify-center space-x-6 text-slate-800 pt-7 pb-6">
                {mainMenuLinks.map((item, i) => (
                    <MainMenuLink key={i} path={item.path} text={item.text} />
                ))}
            </ul>
        </div>
    );
}

export default MainMenu;