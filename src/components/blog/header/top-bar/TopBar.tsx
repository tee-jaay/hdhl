import React from "react";

import SearchOptions from "./search-options/SearchOptions";
import LatestArticle from "./latest-article/LatestArticle";

const TopBar: React.FC<{}> = async () => {
    return (
        <section className="topbar bg-gradient-to-b from-[#2E8B57] to-[#43A047]">
            <div className="laptop:w-[768px] desktop:w-[1024px] flex phone:flex-col tab:flex-row laptop:flex-row desktop:flex-row justify-between mx-auto phone:p-2 tab:py-1">
                <LatestArticle />
                <div className="phone:w-full tab:w-1/3">
                    <SearchOptions />
                </div>
            </div>
        </section>
    );
}

export default TopBar;