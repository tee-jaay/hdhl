import MainMenuLink from '@/components/common/MainMenuLink';

const mainMenuLinks = [
    { path: "/", text: "Home" },
    { path: "/blog", text: "Blog" },
    { path: "/categories", text: "Categories" },
    { path: "/tags", text: "Tags" },
    { path: "/pages/contact-us", text: "Contact Us" },
    { path: "/pages/about", text: "About" },
    { path: "/authors", text: "Authors" },
];

const MainMenu = () => {
    return (
        <div className="main_menu flex-1">
            <ul className="flex justify-center space-x-6 text-slate-800 py-6">
                {mainMenuLinks.map((item, i) => (
                    <MainMenuLink key={i} path={item.path} text={item.text} />
                ))}
            </ul>
        </div>
    );
}

export default MainMenu;