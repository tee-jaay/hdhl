import React from "react";
import SwitchTheme from "./theme/SwitchTheme";
import Search from "./search/Search";
import AuthLink from "./auth/AuthLink";

const SearchOptions: React.FC = () => {
    return (
        <div className="flex phone:py-4 tab:py-0 phone:space-x-10 tab:space-x-6 items-center tab:justify-end phone:justify-center relative">
            <SwitchTheme />
            <Search />
            <AuthLink />
        </div>
    );
}

export default SearchOptions;