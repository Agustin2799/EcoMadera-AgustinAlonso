import React from "react";
import Item from "./Item";
import Masonry from "react-masonry-css";

const ItemList = ({ products }) => {
  return (
    <div className="m-5 md:m-10">
      <Masonry
        breakpointCols={{
          default: 4, // Por defecto, 4 columnas
          1024: 3, // 3 columnas en pantallas grandes (>= 1024px)
          700: 2, // 2 columnas en tabletas (>= 768px)
          480: 1, // 1 columna en móviles (>= 480px)
        }}
        className="flex flex-wrap justify-evenly" // Espaciado entre columnas y márgenes laterales
        columnClassName="flex flex-col gap-10" // Espaciado vertical entre los elementos
      >
        {products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </Masonry>
    </div>
  );
};

export default ItemList;
