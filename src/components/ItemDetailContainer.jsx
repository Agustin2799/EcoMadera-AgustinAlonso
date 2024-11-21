import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../mock/data";
import ItemDetailLoader from "./ItemDetailLoader";

const ItemDetailContainer = () => {
  const [detailLoader, setDetailLoader] = useState(true);
  const [product, setProduct] = useState();
  const { itemId } = useParams();

  //Este useEffect está pendiente de los cambios del parametro itemId, cuando cambie, consigue la información del producto con ese id.
  useEffect(() => {
    getOneProduct(itemId)
        .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log("Ocurrió un error", err);
      })
      .finally(() => setDetailLoader(!detailLoader));
  }, [itemId]);

  //Mientras  el detailLoader este activo, mostramos el componente ItemDetailLoader, cuando cargue mostramos el ItemDetail
    return <div className="bg-slate-400 w-full min-h-screen pt-5 md:pt-10">{detailLoader ? <ItemDetailLoader />: <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
