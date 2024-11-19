import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../mock/data";

const ItemDetailContainer = () => {
  const [ItemDetailLoader, setItemDetailLoader] = useState(true);
  const [product, setProduct] = useState();
  const { itemId } = useParams();

  useEffect(() => {
    
    getOneProduct(itemId)
        .then((res) => {
          console.log('en el then', res)
        setProduct(res);
      })
      .catch((err) => {
        console.log("Ocurrió un error", err);
      })
      .finally(() => setItemDetailLoader(!ItemDetailLoader));
  }, [itemId]);

  useEffect(() => {
    console.log('en el useEffect del itemDetailContainer', product);
  }, [product]);

    return <div>{ItemDetailLoader ? 'Cargando..' : <ItemDetail product={product} />}</div>;
};

export default ItemDetailContainer;
