import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts } from "../mock/data";
import { useParams } from "react-router-dom";
import ProductsLoader from "./ProductsLoader";
import { motion, useAnimation } from 'framer-motion'

const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState(greeting);
  const controls = useAnimation();

  const startAnimation = () => {};

  const onAdd = (cantidad) => {
    cantidad > 0
      ? alert(`Agregaste al carrito ${cantidad}`)
      : alert(`No se ah agregado al carrito, la cantidad debe ser mayor a 0.`);
  };

  //Función para cambiar la primera letra de un string a mayúsculas, se usa para el header
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (category) {
          //Verificamos, para cada producto, si la categoria seleccionada que llega como parámetro en la url, concide con alguna en el array de categorias de cada producto, convertidas a minúsculas.
          const productsFiltered = res.filter((product) =>
            product.categories.some((cat) => cat.toLowerCase() === category)
          );
          setProducts(productsFiltered);
          setHeader(category);
        } else {
          setProducts(res);
          setHeader(greeting);
        }
      })
      .catch((err) => {
        console.log(err);
        setHeader("Ocurrió un error");
      })
      .finally(() => setLoading(false));
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
      console.log("animando");
    }
  }, [controls, loading]);

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
