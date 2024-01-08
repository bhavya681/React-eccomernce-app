import React from 'react';
import SearchBar from './SearchBar';


const Filters = ({ fourPlusrating, highterToLowerratings, lowerToHigherratings, highterToLowerprice, lowerToHighterprice,
    searchItem, brandAll, brandItems, brandFilter, categoryAll, categoryItems, categoryFilter }) => {

    return (

        <>

            <div>

                <div>

                    <SearchBar searchItem={searchItem} />

                </div>

                <div className='flex justify-between space-x-3 gap-2 m-6'>

                    <button className='p-2 shadow-xl bg-green-600 font-extrabold text-white font-mono hover:bg-gray-500 rounded-2xl border' onClick={fourPlusrating}>4+<span className='text-yellow-300 font-extrabold text-md'> ★</span></button>
                    <button className='p-2 shadow-xl font-bold bg-gray-200 hover:bg-gray-500 rounded-2xl border text-black' onClick={highterToLowerratings}>Higher To Lower Ratings<span className='text-yellow-300 font-extrabold text-md'> ★</span></button>
                    <button className='p-2 shadow-xl font-bold bg-gray-200 hover:bg-gray-500 rounded-2xl border text-black' onClick={lowerToHigherratings}>Lower To Higher Ratings<span className='text-yellow-300 font-extrabold text-md'> ★</span></button>
                    <button className='p-2 shadow-xl font-bold bg-gray-200 hover:bg-gray-500 rounded-2xl border text-black' onClick={highterToLowerprice}>Highter To Lower Price<span className='text-green-500 font-extrabold text-xl'> $</span></button>
                    <button className='p-2 shadow-xl font-bold bg-gray-200 hover:bg-gray-500 rounded-2xl border text-black' onClick={lowerToHighterprice}>Lower To Higher Price<span className='text-green-500 font-extrabold text-xl'> $</span></button>

                </div>

                <hr />

                <div className='mx-8 mt-6'>

                    <h1 className='text-center font-bold text-2xl'>Brands</h1>

                </div>

                <div className='inline-block p-3 m-3 space-x-5 text-center'>

                    <button className='bg-gray-200 font-bold  text-black rounded-lg p-2 ' onClick={() => { brandAll() }} >All</button>


                    {brandItems.map((brand, index) => (
                        <>
                            <button className='bg-gray-200 font-bold  text-black rounded-lg p-2 m-4' onClick={() => { brandFilter(brand) }} key={index}>{brand}</button>
                        </>
                    ))}


                </div>

                <hr></hr>

                <div className='mx-8 mt-6'>

                    <h1 className='text-center font-bold text-2xl'>Categories</h1>

                </div>

                <div className='flex justify-center m-8 items-center text-center'>

                    <button className='bg-green-600 font-bold  text-white rounded-lg p-2 m-4' onClick={() => categoryAll()}>All</button>

                    {categoryItems.map((category, index) => (
                        <>
                            <button className='bg-green-600 font-bold  text-white rounded-lg p-2 m-4' onClick={() => { categoryFilter(category) }} key={index}>{category}</button>
                        </>
                    ))}

                </div>

            </div>

        </>

    )

}

export default Filters