import React from "react";
import Logo from "./logo/Logo";
import MainMenu from "./main-menu/MainMenu";

const LogoMenuSearch: React.FC = () => {
    return (
        <div className="logo_menu_search laptop:w-[768px] desktop:w-[1024px] mx-auto flex justify-between phone:py-6 phone:px-2 tab:px-0">
            <Logo />
            <MainMenu />
        </div>
    );
}

export default LogoMenuSearch;