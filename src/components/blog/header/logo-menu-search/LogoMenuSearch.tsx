import Logo from "./logo/Logo";
import MainMenu from "./main-menu/MainMenu";

const LogoMenuSearch = () => {
    return (
        <div className="logo_menu_search w-[1024px] mx-auto flex justify-between">
            <Logo />
            <MainMenu />
        </div>
    );
}

export default LogoMenuSearch;