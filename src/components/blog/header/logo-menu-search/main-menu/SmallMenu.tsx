"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuLinkProps from "@/_lib/models/MenuLinksProps";

const SmallMenu: React.FC<{ links: MenuLinkProps[] }> = ({ links }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        // Close the menu when the user clicks outside of it
        window.addEventListener("click", (e) => {
            if (!(e.target as HTMLElement).closest("#small_menu")) {
                setMenuOpen(false);
            }
        });
    }, []);


    return (
        <div id="small_menu" className="phone:py-6">
            <div className="phone:block tab:hidden cursor-pointer" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={`phone:block tab:hidden absolute z-10 top-10 right-0 w-[280px] bg-gradient-to-b from-gray-500 to-black transition-all ease-in-out duration-300 ${menuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-2]'}`}>
                <div className={menuOpen ? "block" : "hidden"}>
                    <ul className="flex flex-col space-y-4 py-8 px-12">
                        {links && links.map((menuItem, i) =>
                            <Link key={i} onClick={() => setMenuOpen(false)} className="items-center uppercase text-white w-full flex" href={menuItem.path}><span className="pr-2">{menuItem.icon}</span> {menuItem.text}</Link>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SmallMenu;