import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className="bg-slate-500 flex flex-col gap-2  mb-5">
      <div className="m-1 text-white">{item.name}</div>
      <div className="m-1 text-white">{item.price}</div>
      <div className="m-1 text-white">{item.count}</div>
      {/* <div className="m-1 text-white">{item.i}</div> */}
    </div>
  );
}

export default CartItem