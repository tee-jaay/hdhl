import SwitchTheme from "./theme/SwitchTheme";
import Search from "./search/Search"
import AuthLink from "./auth/AuthLink"

const SearchOptions = () => {
    return (
        <div className="flex justify-center py-0 phone:py-4 phone:space-x-10 tab:space-x-6 items-center relative phone:w-full">
            <SwitchTheme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions;