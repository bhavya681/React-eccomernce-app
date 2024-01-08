import React, { useState } from 'react'

const SearchBar = ({ searchItem }) => {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {

        setSearch(e.target.value);
        searchItem(search);

    }

    return (

        <>

            <div className='flex justify-center  m-10 p-2 outline-none'>

                <input className='p-3 shadow-2xl w-[60rem] text-center rounded-2xl' type="text" style={{ border: "none", outline: "none" }} placeholder='🔍 Search Product' onChange={handleSearch} />

                <button className='bg-black p-1 w-14 hover:bg-gray-100 hover:text-black hover:shadow-2xl rounded-xl font-lg text-white' onClick={() => { setSearch("") }}>Clear</button>

            </div>


        </>

    )

}

export default SearchBar