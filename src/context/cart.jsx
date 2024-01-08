import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();

const CartProvider = (props) => {

  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []);

  const addItemsInCart = (item) => {

    const IsItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (IsItemInCart) {

      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        )
      )

    } else {

      setCartItems([...cartItems, { ...item, quantity: 1 }]);

    }

  }

  const removeItemFromCart = (item) => {

    const IsItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (IsItemInCart.quantity === 1) {

      setCartItems(

        cartItems.filter((cartItem) => cartItem.id !== item.id)

      );

    } else {

      setCartItems(
        cartItems.map((cartItem) => cartItem.id === item.id
          ?
          { ...cartItem, quantity: cartItem.quantity - 1 }
          :
          cartItem
        ));

    }

  }

  const getTotalCost = () => {

    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  }

  const clearCart = () => {

    setCartItems([]);

  }

  useEffect(() => {

    localStorage.setItem('cartItem', JSON.stringify(cartItems));

  }, [cartItems])

  useEffect(() => {

    const cartItem = localStorage.getItem('cartItem');
    setCartItems(JSON.parse(cartItem));

  }, [])

  return (

    <>

      <cartContext.Provider value={{ cartItems, addItemsInCart, removeItemFromCart, getTotalCost, clearCart }}>

        {props.children}

      </cartContext.Provider>

    </>

  )

}

export default CartProvider















