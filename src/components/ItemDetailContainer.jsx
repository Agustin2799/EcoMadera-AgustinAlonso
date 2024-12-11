import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemDetailLoader from "./ItemDetailLoader";
import ProductNotFound from "./ProductNotFound";
import { getProductFromDb } from "../database/productsQueries";

const ItemDetailContainer = () => {
  const [detailLoader, setDetailLoader] = useState(true);
  const [product, setProduct] = useState(null);
  const [productNotFound, setProductNotFound] = useState(false);
  const { itemId } = useParams();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const productFromDb = await getProductFromDb(itemId);

        if (!productFromDb) {
          // Producto no encontrado en la base de datos
          setProductNotFound(true);
          return;
        }

        setProduct(productFromDb);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProductNotFound(true);
      } finally {
        setDetailLoader(false);
      }
    };

    getProduct();
  }, [itemId]);

  if (productNotFound) return <ProductNotFound />;

  return (
    <div className="bg-slate-400 w-full min-h-screen pt-5 md:pt-10">
      {detailLoader ? <ItemDetailLoader /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
