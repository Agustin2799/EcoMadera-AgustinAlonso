import React from "react";
import ItemCategoryLabel from "./ItemCategoryLabel";
import {
  ArrowRightCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="w-100 h-min flex flex-col bg-slate-600 rounded-lg shadow-xl shadow-slate-800 text-white mx-5">
      <div className="h-full rounded-t-lg relative">
        <div className="absolute rounded-full p-2 bg-amber-500 hover:bg-amber-600 transition-all duration-500 bottom-3 right-3">
          {" "}
          <ShoppingCartIcon className="size-4 md:size-5" />
        </div>
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={`${product.img}`}
          alt=""
        />
      </div>
      <div className="mx-5 mb-5 flex flex-col h-min">
        <h1 className="text-2xl text-white my-auto pt-3">{product.name}</h1>
        <div className="flex flex-wrap w-full justify-between py-5">
          <h2 className="text-2xl text-green-400 font-semibold">
            ${product.price}
          </h2>
          <Link to={`/item/${product.id}`}>
            <button className="border border-white bg-transparent font-light px-2 rounded-lg hover:bg-slate-700 hover:border-amber-500 hover:text-amber-500 transition-all duration-500">
              Ver más
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap my-auto">
          <ItemCategoryLabel categories={product.categories} />
        </div>
      </div>
    </div>
  );
};

export default Item;
