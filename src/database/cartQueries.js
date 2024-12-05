import { collection, doc, getDoc, getDocs, query, where, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export const getCartFromDb = async () => {
    try {
        //Colección que queremos obtener
        const cartCollection = collection(db, 'cart')
        //Respuesta de la consulta a la colección
        const snapshot = await getDocs(cartCollection)
        //mapeo del carrito
        const cart = snapshot.docs.map((item) => ({ cartProductId: item.id, ...item.data() }))
        //Retornamos los datos del carrito
        console.log('Datos del carrito obtendios con éxito', cart)
        return cart
    } catch (error) {
        throw new Error('Error al obtener el carrito', error)
    }
}

export const addToCartAtDb = async (item, count) => {
    try {
        const productToAdd = { productId: item.id, img: item.img, name: item.name, price: item.price, count: count }
        const cartCollection = collection(db, 'cart')
        const newDocRef = await addDoc(cartCollection, productToAdd) //Este addDoc devuelve la referencia del documento recién creado
        productToAdd.cartProductId = newDocRef.id //Agregamos el id del documento para poder identificarlo más tarde
        return productToAdd // devolvemos el producto recién agregado
    } catch (error) {
        throw new Error('Error al agrergar el producto al carrito', error)
    }
}

export const deleteProductInCartAtDb = async (cartProductId) => {
    try {
        //Referencia al documento que queremos eliminar
        const docRef = doc(db, 'cart', cartProductId)
        //Eliminamos el documento
         await deleteDoc(docRef)
        console.log('Producto eliminado del carrito con éxito')
    } catch (error) {
        throw new Error('Error al eliminar el producto al carrito', error)
    }
};