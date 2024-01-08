import React, { useContext } from 'react'
import { cartContext } from '../context/cart';

const Carts = ({ toggle, showModal }) => {

  const { cartItems, addItemsInCart, removeItemFromCart, getTotalCost, clearCart } = useContext(cartContext);

  return (

    <>
      <div className='w-full'>
        {
          showModal
          &&
          (

            <>

              <div className='absolute top-0 right-0 w-full h-[300rem] z-10 bg-gray-200'>

                <nav className='flex justify-between text-center m-11'>

                  <h1 className='text-2xl font-bold cursor:pointer'>Cart</h1>

                  <h1 className='text-2xl font-bold hover:text-red-600 hover:cursor:pointer' onClick={toggle}><span className='cursor:pointer'>X</span></h1>

                </nav>

                <div className='grid grid-cols-3 m-4 '>

                  {
                    cartItems.length > 0 && cartItems.map((item) => (
                      <>

                        <div className='flex flex-row shadow-lg m-5 bg-gray-100 p-4 rounded-xl' key={item.id}>
                          <img className='cursor-pointer hover:animate-bounce text-center items-center mx-200 p-2 bg-gray-50 shadow-sm rounded-xl' height={"50px"} width={"350px"} src={item.thumbnail} alt={item.title} />

                          <div className='flex flex-col my-20 mx-20'>
                            <h1 className='font-bold font-mono text-xl'>{item.title}</h1>
                            <span className='text-green-500 font-bold text-xl'>${item.price}</span>

                            <div className='space-x-4 mt-5'>
                              <button className='text-lg font-bold bg-black text-white p-1 rounded-lg' onClick={() => addItemsInCart(item)}>+</button>
                              <span className='text-md'>{item.quantity}</span>
                              <button className='text-lg font-bold bg-black text-white p-1 rounded-lg' onClick={() => removeItemFromCart(item)}>-</button>
                            </div>

                          </div>

                        </div>
                      </>
                    ))
                  }




                </div>
                {
                  cartItems.length > 0
                    ?
                    (
                      <>
                        <div className='flex flex-col justify-center'>

                          <h1 className='text-black font-bold text-3xl'>Total Cost: <span className='text-green-600 font-bold'>${getTotalCost()}</span></h1>

                        </div>
                        <div>
                          <button className='m-5  p-2 bg-black text-white font-xl text-center rounded-lg w-44 hover:bg-gray-100 hover:text-black items-center' onClick={() => { clearCart() }}>Clear Cart</button>
                          <br />
                          <button className='m-5  p-2 bg-green-600 text-white font-xl text-center rounded-lg w-44 hover:bg-green-100 hover:text-black items-center' onClick={() => { clearCart() }}>Payment</button>
                        </div>
                      </>
                    )
                    :
                    (
                      <>
                        <div className='flex justify-center text-center mx-50'>
                          <h1 className='text-3xl font-bold text-center '>No Items Found</h1>
                        </div>

                      </>
                    )
                }

              </div>

            </>

          )

        }


      </div>
    </>

  )

}

export default Carts