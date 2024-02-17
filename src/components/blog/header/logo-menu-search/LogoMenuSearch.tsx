import React from 'react'
import MainMenu from './main-menu/MainMenu';
import Logo from './logo/Logo';
import SearchOptions from './search-options/SearchOptions';

const LogoMenuSearch = () => {
    return (
        <div className="logo_menu_search flex">
            <Logo />
            <MainMenu />
            <SearchOptions />
        </div>
    );
}

export default LogoMenuSearch