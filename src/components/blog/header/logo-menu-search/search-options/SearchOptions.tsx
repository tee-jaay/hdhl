import React from 'react'
import Theme from './theme/Theme'
import Search from './search/Search'
import AuthLink from './auth/AuthLink'

const SearchOptions = () => {
    return (
        <div className="flex">
            <Theme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions