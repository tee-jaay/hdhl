import React from "react";
import Logo from "./logo/Logo";
import MainMenu from "./main-menu/MainMenu";

const LogoMenuSearch: React.FC = () => {
    return (
        <div className="logo_menu_search md:w-[768px] lg:w-[1024px] mx-auto flex justify-between xs:py-6 xs:px-2 sm:px-0">
            <Logo />
            <MainMenu />
        </div>
    );
}

export default LogoMenuSearch;