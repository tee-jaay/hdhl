const Search = () => {
    return (
        <div className="flex justify-between bg-white items-center py-2 px-4 border border-gray-300 space-x-1">
            <input type="text" placeholder={"Search..."} className="bg-white w-full text-lg" />
            <div className="cursor-pointer bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    );
}

export default Search;