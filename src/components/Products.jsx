import React, { useContext, useEffect, useState } from 'react'
import Filters from './Filters';
import { cartContext } from '../context/cart';

const Products = () => {

    const { addItemsInCart } = useContext(cartContext);

    const [product, setProduct] = useState([]);
    const [Data, setData] = useState([]);

    const fetchProducts = async () => {

        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setData(data.products);
        setProduct(data.products);

    }

    useEffect(() => {

        fetchProducts();

    }, [])

    const brandItems = [...new Set(Data.map((item) => item.brand))];

    const brandFilter = (brand) => {
        const newItems = Data.filter((item) => item.brand === brand);
        setProduct(newItems);
    };

    const brandAll = () => {
        setProduct(Data);
    }

    const categoryItems = [...new Set(Data.map((item) => item.category))];

    const categoryFilter = (category) => {
        const newItems = Data.filter((item) => item.category === category);
        setProduct(newItems);
    }

    const categoryAll = () => {
        setProduct(Data);
    }

    const searchItem = (pro) => {
        const newItems = Data.filter(((item) => item.title.toLowerCase().includes(pro.toLowerCase())));
        setProduct(newItems);
    };

    const fourPlusrating = () => {

        const newItems = Data.filter((item) => item.rating >= 4);
        setProduct(newItems);

    }

    const highterToLowerratings = () => {

        const newItems = [...Data].sort((a, b) => b.rating - a.rating);
        setProduct(newItems);

    }

    const lowerToHigherratings = () => {

        const newItems = [...Data].sort((a, b) => a.rating - b.rating);
        setProduct(newItems);

    }

    const highterToLowerprice = () => {

        const newItems = [...Data].sort((a, b) => b.price - a.price);
        setProduct(newItems);

    }

    const lowerToHighterprice = () => {

        const newItems = [...Data].sort((a, b) => a.price - b.price);
        setProduct(newItems);

    }

    return (

        <div>

            <Filters fourPlusrating={fourPlusrating} highterToLowerratings={highterToLowerratings}
                lowerToHigherratings={lowerToHigherratings} highterToLowerprice={highterToLowerprice}
                lowerToHighterprice={lowerToHighterprice}
                searchItem={searchItem} brandAll={brandAll} categoryAll={categoryAll} brandItems={brandItems} brandFilter={brandFilter} categoryItems={categoryItems} categoryFilter={categoryFilter} />

            <div className='grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 ml-5 bg-gray-50 space-x-4 m-20'>

                {
                    product.map((item) => (
                        <>
                            <div key={item.id} className='m-20 gap-1 shadow-2xl flex flex-col justify-center items-center text-center'>
                                <img src={item.thumbnail} height={"4px"} className='transition-all ease-in-out hover:animate-bounce cursor-pointer items-center rounded-2xl m-3 p-4 shadow-lg bg-gray-100' width={280} alt={item.title} />
                                <h1 className='font-extrabold font-mono  text-center'>{item.title}</h1>
                                <p className='font-bol font-mono text-sm '>{item.description}...</p>
                                <p className='text-green-700 font-bold'>${item.price}</p>
                                <p className='bg-green-600 hover:bg-green-800 cursor:pointer text-white font-mono text-xl rounded-xl font-bold p-2'>{item.rating}<span className='text-xl mx-2 text-yellow-400'>★</span></p>
                                <button onClick={() => { addItemsInCart(item) }} className='bg-black p-3 shadow-lg hover:bg-gray-400 hover:text-black rounded-xl text-white '>Add To Cart</button>
                            </div>
                        </>
                    ))

                }


            </div>

        </div>

    )

}

export default Products