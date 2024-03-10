import SwitchTheme from "./theme/SwitchTheme";
import Search from "./search/Search"
import AuthLink from "./auth/AuthLink"

const SearchOptions = () => {
    return (
        <div className="flex justify-center py-0 xs:py-4 xs:space-x-10 sm:space-x-6 items-center relative xs:w-full">
            <SwitchTheme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions;