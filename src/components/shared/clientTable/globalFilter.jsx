import React from 'react'

const globalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (

        <span className='global-filter-con'>
            <label htmlFor="search">Search</label>
            <input
                value={globalFilter}
                onChange={e =>
                    setGlobalFilter(e.target.value)
                }
                name='search'
                type="text"
                placeholder='Search..'
            />
        </span>

    )
}

export default globalFilter