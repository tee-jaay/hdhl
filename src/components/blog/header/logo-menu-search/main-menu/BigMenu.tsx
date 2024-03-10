import React from "react";
import MainMenuLink from "@/components/common/MainMenuLink";
import MenuLinkProps from "@/_lib/models/MenuLinksProps";

const BigMenu: React.FC<{ links: MenuLinkProps[] }> = ({ links }) => {
    return (
        <div className="main_menu phone:hidden tab:block">
            <ul className="flex items-center justify-end space-x-6 text-slate-800 tab:pt-2 tab:pb-1">
                {links.map((item, i) => (
                    <MainMenuLink key={i} path={item.path} text={item.text} icon={item.icon} />
                ))}
            </ul>
        </div>
    );
}

export default BigMenu;