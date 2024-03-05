"use client";

import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e: any) => {
        e.preventDefault();
        if (searchText.length >= 3) {
            // Go to search page with query text
            router.push(`/search?s=${searchText}`);
        }
        return null;
    }

    return (
        <form onSubmit={handleSearch}>
            <div className="flex justify-between bg-white dark:bg-[#222] items-center mt-12 py-2 px-4 border border-gray-300 space-x-1">
                <input
                    value={searchText}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                    type="text"
                    placeholder={"Search..."}
                    className="bg-white dark:bg-[#222] w-full text-lg dark:text-[#FEFEFE]"
                />
                <div onClick={handleSearch} className="cursor-pointer bg-white dark:bg-[#222]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-4 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
        </form>
    );
}

export default Search;