import React, { useContext, createContext, useState } from 'react';

//Context
export const CartContext = createContext(null);

//Provider
export const CartContextProvider = ({ children }) => {
  const CartState = useCart();

  return (
    <CartContext.Provider value={CartState}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

const useCart = () => {
  const [cartItems, setCartItems] = useState({});

  function addToCart(item) {
    const { title } = item;
    const cart = { ...cartItems };

    if (cart[title]) {
      cart[title].value += 1;
    } else {
      cart[title] = {
        value: 1,
        item: item,
      };
    }

    console.log(cart);
    setCartItems(cart);
  }

  function removeFromCart(item) {
    const cart = { ...cartItems };
    const cartItem = cartItems[item.title];

    if (cartItem.value > 1) {
      cart[item.title].value -= 1;
    } else {
      delete cart[item.title];
    }

    console.log(cart);

    setCartItems(cart);
  }

  return { cartItems, addToCart, removeFromCart };
};
