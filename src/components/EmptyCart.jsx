import React from "react";
import { ShoppingCartIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="h-screen bg-slate-400 flex justify-start items-center flex-col text-white gap-10 p-10">
      <h1 className="text-4xl font-light">Tu carrito está vacío</h1>
      <div className="relative">
        <ShoppingCartIcon className="w-24 h-24" />
        <PlusCircleIcon className="absolute -top-5 -right-5 w-12 h-12" />
      </div>
      <div>
        <Link to="/all-products">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-amber-500 to-amber-700 hover:brightness-110 hover:scale-110 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-500"
          >
            Ver productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
