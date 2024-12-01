import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import ItemDetailLoader from "./ItemDetailLoader";
import { getProductFromDb } from "../database/productsQueries";

const ItemDetailContainer = () => {
  const [detailLoader, setDetailLoader] = useState(true);
  const [product, setProduct] = useState();
  const { itemId } = useParams();

  

  //Este useEffect está pendiente de los cambios del parametro itemId, cuando cambie, consigue la información del producto con ese id.
  useEffect(() => {
    // getOneProduct(itemId)
    //     .then((res) => {
    //     setProduct(res);
    //   })
    //   .catch((err) => {
    //     console.log("Ocurrió un error", err);
    //   })
    //   .finally(() => setDetailLoader(!detailLoader));
    const getProduct = async () => {
      try {
        const product = await getProductFromDb(itemId)
        setProduct(product)
      } catch (error) {
        throw new Error("Error al setear los detalles del productos", error);
      } finally {
        setDetailLoader(false)
      }
    }
    getProduct()
  }, [itemId]);

  //Mientras  el detailLoader este activo, mostramos el componente ItemDetailLoader, cuando cargue mostramos el ItemDetail
    return <div className="bg-slate-400 w-full min-h-screen pt-5 md:pt-10">{detailLoader ? <ItemDetailLoader />: <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
