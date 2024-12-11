import React, { useState, useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { addToCartAtDb } from "../database/cartQueries";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

import toast from "react-hot-toast";

const AddToCart = ({ product }) => {
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(cartContext);

  const sumar = () => {
    if (count < product.stock) setCount(count + 1);
  };
  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const addProductToCart = async () => {
    try {
      // Verifica si el producto ya está en el carrito
      console.log(product)
      console.log(cart)
      const productInCart = cart.some((item) => item.productId === product.id);

      if (productInCart) {
        toast.error("Este producto ya está en tu carrito");
        return; // Salir si el producto ya está en el carrito
      }
      const productoAgregado = await addToCartAtDb(product, count);
      setCart([productoAgregado, ...cart]); //Agregamos el producto recien añadido al carrito, en nuestro carrito local, para no tener que hacer una nueva consulta para actualizar la vista.
      console.log("Producto agregado al carrito");
      toast.success(
        `${
          count === 1
            ? "Se agrego al carrito"
            : `Se agregaron ${count} unidades al carrito`
        }`
      );
    } catch (error) {
      throw new Error("Hubo un error al agregar el producto al carrito", error);
    }
  };

  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex flex-col justify-center">
        <h3 className="text-slate-700 text-xl mb-2">Seleccione cantidad:</h3>
        <div className="flex mx-auto">
          <button className="" onClick={restar}>
            <MinusCircleIcon className="size-9 text-white" />
          </button>
          <div className="w-auto mx-3 text-center text-xl font-bold text-white">
            {count}
          </div>
          <button className="" onClick={sumar}>
            <PlusCircleIcon className="size-9 text-white" />
          </button>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:brightness-110 hover:scale-110 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500"
          onClick={() => addProductToCart()}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
