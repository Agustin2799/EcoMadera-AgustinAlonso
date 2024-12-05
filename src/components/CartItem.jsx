import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteProductInCartAtDb } from "../database/cartQueries";

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);

  const deleteFromCart = async () => {
    console.log(item)
    await deleteProductInCartAtDb(item.cartProductId); //Eliminamos de la base de datos el producto
    setCart(cart.filter((productInCart) => productInCart.cartProductId !== item.cartProductId)) //Si todo sale bien, seteamos  y flitramos localmente el contexto del carrito para no tener que volver a consultar el carrito en la bd
  };

  return (
    <div className="bg-slate-500 flex flex-row gap-3 w-5/6 sm:w-2/3 h-auto p-4 rounded-lg shadow-md mx-auto mb-5">
      <img
        className="rounded-lg h-36 w-1/3  object-cover"
        src={`${item.img}`}
        alt={item.name}
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="text-sm font-semibold text-white mb-1 truncate">
          {item.name}
        </div>
        <div className="text-sm text-white mb-1">{item.price}</div>
        <div className="text-xs text-white mb-2">{item.count} in cart</div>
      </div>
      <div
        onClick={() => deleteFromCart()}
        className="flex justify-center items-center p-2 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition-colors duration-200"
      >
        <TrashIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default CartItem;
