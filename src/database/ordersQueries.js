import { collection, doc, getDoc, getDocs, query, where, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase.config";
import { clearCart } from "./cartQueries";

export const sendOrderToDb = async (values, cart) => {

    try {
        let proudctsInOrder = []
        cart.map((item) => proudctsInOrder.push({ product: item.name, price: item.price, count: item.count }))
        const orderTotal = cart.reduce((acum, item) => acum + item.price * item.count, 0)
        const order = { client: { nombre: values.nombre, apellido: values.apellido, email: values.email, telefono: values.telefono }, products: proudctsInOrder, total: orderTotal }
        const orderCollection = collection(db, 'orders')
        const newDocRef = await addDoc(orderCollection, order) //Este addDoc devuelve la referencia del documento recién creado
        // Llamamos a la función para limpiar la colección de cart
        await clearCart();
        
        return newDocRef.id// devolvemos el producto recién agregado
    } catch (error) {
        throw new Error('Error al agrergar el producto al carrito', error)
    }
}