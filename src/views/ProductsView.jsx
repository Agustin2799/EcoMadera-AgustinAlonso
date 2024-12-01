import React, { useContext, useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import CategoriesNav from "../components/CategoriesNav";
//Importamos el contexto
import { cartContext } from "../context/cartContext";
//Importamos firestore


const categoriesList = [
  "Todos los productos",
  "Más vendidos",
  "Para regalar",
  "Interior",
  "Exterior",
  "Rústico",
  "Living",
  "Comedor",
  "Baño",
  "Cocina",
  "Dormitorio",
  "Iluminación",
  "De pared",
  "Espejos",
];

const ProductsView = () => {
  const { cart, setCart } = useContext(cartContext)

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsRef = collection(db, "ítems");
  //   getDocs(itemsRef).then((snapshot) => console.log(snapshot.docs.map((doc) => console.log(doc.data()))));
  // }, []);

  return (
    <>
      <CategoriesNav categoriesList={categoriesList} />
      {/* Esta es la manera usando el hook useContext, mas actual y recomendado */}
      {/* <h1 >{cart}</h1> */}
      {/* Esta es la manera de usar un consumer, en este caso desestructurando el valor del contexto */}
      {/* <cartContext.Consumer>{({ cart }) => (<h1>{cart}</h1>)}</cartContext.Consumer> */}
      <ItemListContainer greeting={"Todo lo que estás buscando"} />
    </>
  );
};

export default ProductsView;
