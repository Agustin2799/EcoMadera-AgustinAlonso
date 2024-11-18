import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import CategoriesNav from "../components/CategoriesNav";

const categoriesList = ['Todos los productos','Más vendidos', 'Para regalar', 'Interior', 'Exterior','Rústico','Living', 'Comedor', 'Baño', 'Cocina', 'Dormitorio', 'Iluminación', 'De pared', 'Espejos']

const ProductsView = () => {
  return (
    <>
      <CategoriesNav categoriesList={categoriesList} />
      <ItemListContainer greeting={"Tenemos lo que estás buscando"} />
    </>
  );
};

export default ProductsView;
