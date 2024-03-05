import Logo from "./logo/Logo";
import MainMenu from "./main-menu/MainMenu";
import SearchOptions from "./search-options/SearchOptions";

const LogoMenuSearch = () => {
    return (
        <div className="logo_menu_search w-[1024px] flex mx-auto">
            <Logo />
            <MainMenu />
            <SearchOptions />
        </div>
    );
}

export default LogoMenuSearch;