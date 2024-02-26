import Theme from "./theme/Theme"
import AuthLink from "./auth/AuthLink"
import Search from "./search/Search"

const SearchOptions = () => {
    return (
        <div className="flex justify-center py-4 space-x-6 items-center">
            <Theme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions;