import React from "react";

const ItemDetailLoader = () => {
  return (
    <div className="w-5/6 mx-auto animate-pulse">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Imagen del producto */}
        <div className="w-2/3 md:w-1/3 h-48 bg-gray-300 rounded-lg order-2 md:order-1"></div>

        {/* Nombre del producto y categorías */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 w-full">
          <div className="mb-5 w-full">
            {/* Título del producto */}
            <div className="h-8 w-3/4 md:w-1/2 bg-gray-300 rounded-lg mx-auto md:mx-0 mb-4"></div>

            {/* Categorías */}
            <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-2">
              <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
              <div className="h-6 w-20 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          {/* Descripción del producto */}
          <div className="w-full">
            <div className="h-6 w-5/6 bg-gray-300 rounded-lg mx-auto md:mx-0 mb-4"></div>
            <div className="h-6 w-4/6 bg-gray-300 rounded-lg mx-auto md:mx-0"></div>
          </div>

          {/* Stock y botones */}
          <div className="flex my-10 justify-between items-center order-last w-full">
            <div className="h-6 w-1/3 bg-gray-300 rounded-lg"></div>
            <div className="h-10 w-1/4 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailLoader;
