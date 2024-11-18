import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoriesNav = ({ categoriesList }) => {
  //const { categories } = useParams();
  const navigate = useNavigate();
  const [categoriesSelected, setCategoriesSelected] = useState([
    "Todos los productos",
  ]);

  useEffect(() => {
    console.log(categoriesSelected);
      //encodeURIComponent es una funcion que se aplica a cada elemento del array categoriesSelected, para asegurar la codificación correcta de la URL en todos los navegadores, algunos lo hacen por defecto, pero es arriesgado confiar en que todos los navegadores leerán correctamente la url cuando se crea dinámicamente, a la vez que se agregan diferentes valores para el mismo parámetro.
      //Por último lo empaquetamos en un solo string uniendolos con comas, que luego será seccionado para poder filtrar los productos del Mock.
    const urlParameter = categoriesSelected.map(encodeURIComponent).join(",");
      console.log(urlParameter);
      if (categoriesSelected.includes('Todos los productos')) navigate('/products')
      else  navigate(`/products/${urlParameter.toLowerCase()}`);
   
  }, [categoriesSelected]);

  const setNewCategory = (category) => {
    const isTodosSelected = categoriesSelected.includes("Todos los productos");
    const isCategorySelected = categoriesSelected.includes(category);

    if (category === "Todos los productos") {
      // Seleccionar "Todos los productos" deselecciona todas las demás categorías
      setCategoriesSelected(["Todos los productos"]);
    } else if (isTodosSelected) {
      // Seleccionar cualquier otra categoría mientras "Todos los productos" está seleccionado
      setCategoriesSelected([category]);
    } else if (isCategorySelected) {
      // Deseleccionar una categoría que ya estaba seleccionada
      const filteredArray = categoriesSelected.filter(
        (cat) => cat !== category
      );
      setCategoriesSelected(filteredArray);
      //Si no hay ninguna cateoría seleccionada, se setea 'todos los productos'
      if (filteredArray.length < 1)
        setCategoriesSelected(["Todos los productos"]);
    } else {
      // Seleccionar una nueva categoría
      setCategoriesSelected([...categoriesSelected, category]);
    }
  };

  //Verifca si la categoria está seleccionada para aplicar estilos
  const isSelected = (category) =>
    categoriesSelected.includes(category) ? true : false;

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
              onClick={() => setNewCategory(category)}
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
