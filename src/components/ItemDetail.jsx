import React, { useEffect } from "react";
import ItemCategoryLabel from "./ItemCategoryLabel";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
 
  return (
    <div className="w-5/6 mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Imagen del producto */}
        <img
          src={product.img}
          className="w-5/6 md:w-1/3 object-cover rounded-lg order-2 md:order-1 shadow-lg shadow-slate-800"
          alt={product.name}
        />
        {/* Nombre del producto y categorías */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
          <div className="mb-5">
            {/* Título del producto */}
            <h1 className="text-4xl md:text-5xl text-amber-900 font-light">
              {product.name}
            </h1>

            {/* Categorías */}
            <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-2">
              <ItemCategoryLabel categories={product.categories} />
            </div>
          </div>
          {/* Descripción del producto */}
          <div className="text-white text-center md:text-left order-3 ">
            <h3 className="text-lg md:text-xl">{product.description}</h3>
          </div>
          <div className="flex my-10 justify-between  items-center order-last">
            <h4 className="text-3xl font-semibold bg-slate-600 p-2 rounded-md text-green-300">
              ${product.price}
            </h4>
            <h4 className="text-xl m-5 text-slate-700">Stock: {product.stock}</h4>
            {/* <div className="flex">
                <ItemCount stock={product.stock} />
                <button className="rounded-lg border p-2">
                  Agregar al carrito
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
