import TopBar from "./top-bar/TopBar";
import LogoMenuSearch from "./logo-menu-search/LogoMenuSearch";

const Header = () => {
    return (
        <div className="dark:bg-[#222]">
            <TopBar />
            <LogoMenuSearch />
        </div>
    );
}

export default Header;