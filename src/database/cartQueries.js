import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.config";

export const getCartFromDb = async () => {
    try {
        //Colección que queremos obtener
        const cartCollection = collection(db, 'cart')
        //Respuesta de la consulta a la colección
        const snapshot = await getDocs(cartCollection)
        //mapeo del carrito
        const cart = snapshot.docs.map((item) => ({id: item.id, ...item.data()}))
        //Retornamos los datos del carrito
        console.log('Datos del carrito obtendios con éxito')
        return cart
    } catch (error) {
        throw new Error('Error al obrener el carrito', error)
    }
}