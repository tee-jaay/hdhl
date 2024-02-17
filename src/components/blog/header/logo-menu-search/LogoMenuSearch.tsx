import Logo from './logo/Logo';
import MainMenu from './main-menu/MainMenu';
import SearchOptions from './search-options/SearchOptions';

const LogoMenuSearch = () => {
    return (
        <div className="logo_menu_search flex px-14">
            <Logo />
            <MainMenu />
            <SearchOptions />
        </div>
    );
}

export default LogoMenuSearch;