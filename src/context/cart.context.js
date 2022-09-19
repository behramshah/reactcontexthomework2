import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

const [cartItems, setCartItems] = useState([]);

const addItemToCart = (id) => {
    setCartItems((prev) => [...prev, id])
}


  

  const values = {
      cartItems,
      setCartItems,
      addItemToCart,
  };

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
};