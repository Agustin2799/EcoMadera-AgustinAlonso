import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriesNav = ({ categoriesList }) => {

  const navigate = useNavigate();
  const [categorySelected, setCategorySelected] = useState("Todos los productos");

  useEffect(() => {
    //encodeURIComponent se usa para asegurar la codificación correcta de la URL en todos los navegadores, algunos lo hacen por defecto, pero es arriesgado confiar en que todos los navegadores leerán correctamente la url cuando se crea dinámicamente.
    if (categorySelected === 'Todos los productos')
      navigate("/all-products");
    else
      navigate(
        `/category/${encodeURIComponent(categorySelected.toLowerCase())}`
      );
  }, [categorySelected]);

  //Verifca si la categoria está seleccionada para aplicar estilos
  const isSelected = (category) =>
    categorySelected === category ? true : false;

  return (
    <div className="py-5 w-full  bg-gray-500">
      <div className="flex flex-wrap w-5/6 md:w-4/5 gap-2 mx-auto content-center items-center ">
        {categoriesList.map((category, inx) => {
          return (
            <div
              className={`flex items-center rounded-full text-sm px-4 py-2 me-2 mb-2 shadow-md border font-normal transition-all duration-700 cursor-default shadow-amber-900 border-amber-600 text-amber-400 hover:bg-slate-950 hover:shadow-amber-950 hover:shadow-lg ${
                isSelected(category) ? "bg-slate-900" : "bg-slate-700"
              }`}
              key={inx}
              onClick={() => setCategorySelected(category)}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesNav;
