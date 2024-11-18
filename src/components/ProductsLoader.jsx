import React from "react";

const ProductsLoader = () => {
  // Define un array con la cantidad de elementos que quieres cargar
  const loaders = new Array(8).fill(null); // Genera 8 loaders

  return (
    <div className="flex flex-wrap justify-center gap-10 m-5 md:m-10">
      {loaders.map((_, index) => (
        <div
          key={index}
          className="w-64 box-border h-96 p-4 bg-slate-500 shadow-lg rounded-lg"
        >
          <div className="h-48 bg-slate-200 animate-pulse rounded-md"></div>

          <div className="mt-4 h-6 bg-slate-200 animate-pulse rounded w-3/4"></div>

          <div className="mt-2 h-4 bg-slate-200 animate-pulse rounded w-5/6"></div>
          <div className="mt-2 h-4 bg-slate-200 animate-pulse rounded w-4/6"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsLoader;
