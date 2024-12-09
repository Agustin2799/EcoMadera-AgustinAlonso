import React, { useState, useContext, useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { addToCartAtDb } from "../database/cartQueries";
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
    <div className="flex">
      <div>
        <button className="p-2 bg-green-600 text-white" onClick={sumar}>
          +
        </button>
        <span className="p-2 bg-slate-500 text-white">{count}</span>
        <button className="p-2 bg-red-600 text-white" onClick={restar}>
          -
        </button>
        <button
          className="p-2 bg-green-500 text-white"
          onClick={() => addProductToCart()}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
