import React, {createContext, useEffect, useState} from "react"
import { getCartFromDb } from "../database/cartQueries";
//Creamos el contexto con un array vacío por valor inicial
export const cartContext = createContext(null)

//Componente que provee el contexto del carrito con el que se envolverá a app
export const CartProvider = ({children}) => {
  //Estado local para el carrito, el cual será distribuido para todos los componentes que consuman el contexto
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const cart = await getCartFromDb()
      console.log(cart)
      setCart(cart)
    }
    getCart()
  },[])

  return (
    //Si no se especifica el atributo value, toma el valor por defecto cuando fue creado el contexto
    <cartContext.Provider value={{ cart, setCart }}> 
      {children}
    </cartContext.Provider>
  );
}