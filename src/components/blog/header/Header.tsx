import React from "react";
import TopBar from "./top-bar/TopBar";
import LogoMenuSearch from "./logo-menu-search/LogoMenuSearch";

const Header: React.FC = () => {
    return (
        <section id="header">
            <TopBar />
            <div className="dark:bg-[#222]">
                <LogoMenuSearch />
            </div>
        </section>
    );
}

export default Header;