"use client";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect, ChangeEvent } from 'react';

const Search = () => {
    const router = useRouter();
    const [isFormVisible, setFormVisible] = useState(false);
    const searchFormRef = useRef(null);
    const [searchText, setSearchText] = useState('');

    const toggleFormVisibility = () => {
        setFormVisible((prevState) => {
            const updatedVisibility = !prevState;
            return updatedVisibility;
        });
    };

    const handleClickOutside = (event: any) => {
        const searchIconContainer = document.getElementById('search_icon_container');
        const searchFormContainer = document.getElementById('search_form_container');

        if (
            searchIconContainer &&
            searchFormContainer &&
            searchIconContainer?.contains(event.target) &&
            searchFormContainer?.contains(event.target)
        ) {
            setFormVisible(false);
        }
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        toggleFormVisibility();
        if (searchText.length >= 3) {
            // Go to search page with query text
            // router.push(`/search?q=${searchText}`);
            router.push(`/blog`);
        }
        return null;
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex my-4 relative">
            <div id="search_icon_container" onClick={toggleFormVisibility} className="cursor-pointer mr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>
            {isFormVisible && (
                <div
                    ref={searchFormRef}
                    id="search_form_container"
                    className="top-0 right-0 p-4 z-50 bg-[#fff] absolute border-2 border-[#4ce5a2]"
                >
                    <div className="flex">
                        <input
                            type="text"
                            name="search"
                            id="search_field"
                            className="border-1 border-[#eaeaea] bg-slate-100"
                            value={searchText}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
                        />
                        <button
                            className="bg-[#222222] text-white px-4 py-1 hover:bg-[#4ce5a2] text-sm transition ease-in-out duration-300"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;