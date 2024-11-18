import React, {useState} from "react";


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const sumar = () => {
        if(count < stock) setCount(count + 1)
    }
    const restar = () => {
      if (count > 0) setCount(count - 1);
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
          </div>
          <button className="p-2 bg-teal-500 text-white" onClick={()=> onAdd(count)}>Comprar</button>
    </div>
  );
};

export default ItemCount;
