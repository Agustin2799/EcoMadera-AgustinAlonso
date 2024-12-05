import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";

const CartListContainer = () => {
    const { cart, setCart } = useContext(cartContext);
    
  useEffect(() => {
    console.log(cart);
  }, [cart]);
    
  return (
    <div className="flex justify-start px-2 py-10 md:px-10 bg-slate-400 min-h-screen flex-col items-start">
      {cart.map((item, index) => (
        <CartItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CartListContainer;
