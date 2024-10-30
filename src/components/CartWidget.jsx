import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartWidget = ({productosEnCarrito}) => {
  return (
    <>
      <div className="relative h-14 w-14 ml-3 lg:ml-7 mr-1 lg:mr-0 flex items-center justify-center rounded-full hover:bg-gray-500 transition duration-700 cursor-pointer">
        <div className="absolute -top-1 -right-1 rounded-full h-6 w-6 bg-amber-950 text-amber-500 font-semibold flex items-center justify-center border-amber-300 border-2">
          {productosEnCarrito}
        </div>
        <ShoppingCartIcon className="size-9" />
      </div>
    </>
  );
}

export default CartWidget