import React from 'react'
import Theme from './theme/Theme'
import Search from './search/Search'
import AuthLink from './auth/AuthLink'

const SearchOptions = () => {
    return (
        <div className="flex justify-center py-4 space-x-6 items-center">
            <Theme />
            <Search />
            <AuthLink />
        </div>
    )
}

export default SearchOptions