import React, { useContext, useState } from 'react';
import Carts from "../components/Carts.jsx";
import { cartContext } from '../context/cart.jsx';

const Header = () => {

    const { cartItems } = useContext(cartContext);

    const [showModal, setShowModal] = useState(false);

    const toggle = () => {

        setShowModal(!showModal);

    }

    return (

        <>

            <div className='bg-gray-100 flex justify-between text-center items-center p-5 roundeed-xl shadow-lg'>

                <h1 className='text-2xl font-semibold font-sans cursor-pointer'>

                    Home

                </h1>
                {
                    !showModal ?
                        (
                            <>

                                <h1 className='text-2xl font-semibold font-sans cursor-pointer' onClick={toggle}>

                                    Cart🛒({cartItems.length})

                                </h1>


                            </>
                        )
                        : (
                            <>

                                <div className='overflowY:scroll' style={{width:"full",height:"full"}}>

                                    <Carts toggle={toggle} showModal={showModal} />

                                </div>

                            </>
                        )
                }
            </div>

        </>

    )

}

export default Header