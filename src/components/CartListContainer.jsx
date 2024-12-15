import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";

const CartListContainer = () => {
  const { cart } = useContext(cartContext);
  
 
    
  useEffect(() => {
    console.log(cart);
  }, [cart]);
    
  return (
    <div className="flex flex-col lg:flex-row w-full bg-slate-400">
      <div className="flex justify-start px-2 py-10 md:px-10 h-auto lg:min-h-screen flex-col items-start w-full lg:w-2/3">
        {cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      <CheckOut /> 
    </div>
  );
}


export default CartListContainer;
