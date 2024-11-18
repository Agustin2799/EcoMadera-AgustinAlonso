import React from "react";
import ItemCategoryLabel from "./ItemCategoryLabel";
import {
  ArrowRightCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Item = ({ product }) => {
  return (
    <div className="w-100 h-min flex flex-col bg-slate-600 rounded-lg shadow-xl shadow-slate-800 text-white mx-5">
      <div className="h-full rounded-t-lg">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={`${product.img}`}
          alt=""
        />
      </div>
      <div className="mx-5 mb-5 flex flex-col h-min">
        <h1 className="text-3xl text-white my-auto pt-3">{product.name}</h1>
        <div className="flex flex-wrap w-full justify-between py-5">
          <h2 className="text-3xl text-green-400 font-semibold">
            ${product.price}
          </h2>
          <div className="flex  justify-around gap-2 md:gap-4">
            <ArrowRightCircleIcon className="size-9 md:size-10" />
            <ShoppingCartIcon className="size-9 md:size-10" />
          </div>
        </div>
        <div className="flex flex-wrap my-auto">
          <ItemCategoryLabel categories={product.categories} />
        </div>
      </div>
    </div>
  );
};

export default Item;
