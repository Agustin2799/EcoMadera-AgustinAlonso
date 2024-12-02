import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";

const CartListContainer = () => {
    const { cart, setCart } = useContext(cartContext);
    
  useEffect(() => {
    console.log(cart);
  }, [cart]);
    
  return (
    <>
      {cart.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </>
  );
};

export default CartListContainer;
