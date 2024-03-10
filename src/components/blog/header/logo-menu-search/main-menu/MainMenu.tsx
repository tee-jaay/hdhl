"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { publicAppUrl } from '@/_lib/variables/constants';
import MainMenuLink from '@/components/common/MainMenuLink';

const mainMenuLinks = [
    { path: `${publicAppUrl}/`, text: "Home" },
    { path: `${publicAppUrl}/blog`, text: "Blog" },
    { path: `${publicAppUrl}/categories`, text: "Categories" },
    { path: `${publicAppUrl}/tags`, text: "Tags" },
    { path: `${publicAppUrl}/contact`, text: "Contact Us" },
    { path: `${publicAppUrl}/pages/about-us`, text: "About" },
    { path: `${publicAppUrl}/authors`, text: "Authors" },
];

const MainMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div className="flex justify-between relative">
            <div className="main_menu phone:hidden tab:block">
                <ul className="flex items-center justify-end space-x-6 text-slate-800 tab:pt-2 tab:pb-1">
                    {mainMenuLinks.map((item, i) => (
                        <MainMenuLink key={i} path={item.path} text={item.text} />
                    ))}
                </ul>
            </div>
            <div id="small_menu">
                <div className="phone:block tab:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className={`phone:block tab:hidden absolute z-10 top-10 right-0 w-[280px] bg-gradient-to-b from-gray-500 to-black transition-all ease-in-out duration-300 ${menuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-[-2]'}`}>
                    <div className={menuOpen ? "block" : "hidden"}>
                        <ul className="flex flex-col space-y-4 py-8 px-12">
                            {mainMenuLinks && mainMenuLinks.map((menuItem, i) =>
                                <Link key={i} className="uppercase text-white w-full" href={menuItem.path}>{menuItem.text}</Link>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;