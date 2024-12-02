import React, { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import ProductsLoader from "./ProductsLoader";
import { animate, motion, useAnimation } from "framer-motion";
import { getAllProductsFromDb, getProductsCategoryFromDb } from "../database/productsQueries";

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState(greeting);
  const controls = useAnimation();

  // const onAdd = (cantidad) => {
  //   cantidad > 0
  //     ? alert(`Agregaste al carrito ${cantidad}`)
  //     : alert(`No se ah agregado al carrito, la cantidad debe ser mayor a 0.`);
  // };

  //Función para cambiar la primera letra de un string a mayúsculas, se usa para el header
  const capitalizeFirstLetter = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getAllProducts = async () => {
    try {
      const products = await getAllProductsFromDb();
      setProducts(products);
    } catch (error) {
      console.error(
        "Error al obtener todos los productos en el useEffect:",
        error
      );
      // Aquí podría manejar el error de una manera diferente que en la función getAllProducts, como mostrar un mensaje de error al usuario
    } finally {
      setLoading(false);
    }
  };
  const getProductsCategory = async () => {
    try {
      const products = await getProductsCategoryFromDb(
        capitalizeFirstLetter(category)
      );
      setProducts(products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //Este useEffect se encarga de mostrar los productos de una categoría determinada cuando el url param cambie, y si no existe, trae todos los productos
  useEffect(() => {
    if (category) {
      setHeader(category);
      getProductsCategory();
    } else {
      setHeader(greeting);
      getAllProducts();
    }
  }, [category]);

  //Lo usaremos para reiniciar la animación cada vez que cambie el header de los productos
  // Usamos controls.start() para reiniciar la animación cada vez que cambie el header
   useEffect(() => {
     if (!loading) {
         controls.start({
           x: [50, 0], // Podemos usar un array para definir la animación
           opacity: [0, 1],
           transition: { duration: 1 },
         });
       //  console.log("animando");
       }
     
   }, [controls, header, loading]);

  return (
    <section className=" bg-slate-400 min-h-screen h-auto">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col w-full">
          {!loading && (
            <motion.h1
              animate={controls}
              className="text-white text-3xl md:text-5xl font-semibold mx-16 mt-5 md:mx-24"
            >
              {capitalizeFirstLetter(header)}
            </motion.h1>
          )}
          {loading ? <ProductsLoader /> : <ItemList products={products} />}
          {/* <ItemCount stock={20} onAdd={onAdd} /> */}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
