import { appUrl } from '@/_lib/variables/constants';
import MainMenuLink from '@/components/common/MainMenuLink';

const mainMenuLinks = [
    { path: `${appUrl}/`, text: "Home" },
    { path: `${appUrl}/blog`, text: "Blog" },
    { path: `${appUrl}/categories`, text: "Categories" },
    { path: `${appUrl}/tags`, text: "Tags" },
    { path: `${appUrl}/contact`, text: "Contact Us" },
    { path: `${appUrl}/pages/about-us`, text: "About" },
    { path: `${appUrl}/authors`, text: "Authors" },
];

const MainMenu = () => {
    return (
        <div className="main_menu">
            <ul className="flex items-center justify-end space-x-6 text-slate-800 pt-7 pb-6">
                {mainMenuLinks.map((item, i) => (
                    <MainMenuLink key={i} path={item.path} text={item.text} />
                ))}
            </ul>
        </div>
    );
}

export default MainMenu;