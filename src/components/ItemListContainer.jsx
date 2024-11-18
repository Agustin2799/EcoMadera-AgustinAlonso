import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts } from "../mock/data";
import FetchContainer from "./FetchContainer";
import Event from "./Event";
import { useParams } from "react-router-dom";
import ProductsLoader from "./ProductsLoader";

const ItemListContainer = ({ greeting }) => {
  const { categories } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAdd = (cantidad) => {
    cantidad > 0
      ? alert(`Agregaste al carrito ${cantidad}`)
      : alert(`No se ah agregado al carrito, la cantidad debe ser mayor a 0.`);
  };

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        if (categories) {
          console.log(categories)
          //Array que contiene todas las categorias seleccionadas que fueron pasadas a través del parámetro dinámico ':categories', el cual se divide cuando encutra una coma.
          const categoriesSelected = categories.split(",");
          //Verificamos si en el array de categorias de cada producto, cuando sus elementos son convertidos en minúsculas (productCat.toLowerCase()), alguno coincide con alguna de las categorias (cat) que contiene el array de categorias seleccionadas, si es así (true) se el filter lo incluye en el array de productos filtrados.
          const productsFiltered = res.filter((product) =>
            categoriesSelected.some((cat) =>
              product.categories.some(
                (productCat) => productCat.toLowerCase() === cat
              )
            )
          );
          setProducts(productsFiltered);
        } else {
          setProducts(res)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categories]);

  return (
    <section className=" bg-slate-400 min-h-screen h-auto">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col w-full">
          {/* <h1 className="text-white text-3xl md:text-5xl font-semibold mb-4">
            {greeting}
          </h1> */}
          {loading ? <ProductsLoader /> : <ItemList products={products} />  }
          {/* <ItemCount stock={20} onAdd={onAdd} /> */}
          {/* <FetchContainer /> */}
          {/* <Event /> */}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
