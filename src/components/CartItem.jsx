import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteProductInCartAtDb } from "../database/cartQueries";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);

  const deleteFromCart = async () => {
    console.log(item)
    await deleteProductInCartAtDb(item.cartProductId); //Eliminamos de la base de datos el producto
    toast.error('Producto eliminado del carrito')
    setCart(cart.filter((productInCart) => productInCart.cartProductId !== item.cartProductId)) //Si todo sale bien, seteamos  y flitramos localmente el contexto del carrito para no tener que volver a consultar el carrito en la bd
  
  };

  return (
    <div className="bg-slate-600 flex sm:flex-row  flex-col gap-3 w-5/6 h-auto p-4 rounded-lg shadow-md mx-auto mb-5">
      <img
        className="rounded-lg h-36 w-full sm:w-1/3  object-cover"
        src={`${item.img}`}
        alt={item.name}
      />
      <div className="flex flex-col justify-start items-start flex-1">
        <div className="text-2xl font-semibold text-white mb-1">
          {item.name}
        </div>
        <div className="text-xl text-green-500 mb-1 bg-gray-700 p-1 rounded-sm">${item.price}</div>
        <div className="text-base text-white font-semibold mb-2">{item.count} en el carrito</div>
      </div>
      <div
        onClick={() => deleteFromCart()}
        className="flex justify-center items-center p-3 mt-auto bg-red-900 rounded-full cursor-pointer hover:bg-red-600 transition-colors duration-200"
      >
        <TrashIcon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default CartItem;
