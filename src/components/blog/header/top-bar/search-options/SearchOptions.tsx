import SwitchTheme from "./theme/SwitchTheme";
import Search from "./search/Search"
import AuthLink from "./auth/AuthLink"

const SearchOptions = () => {
    return (
        <div className="flex justify-center py-0 space-x-6 items-center">
            <SwitchTheme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions;