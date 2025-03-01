import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase.config";


export const getAllProductsFromDb = async () => {

    try {
        //Definimos la colleción que queremos obtener
        const productsCollection = collection(db, "ítems");
        console.log("products collection", productsCollection)

        //Obtenemos los documentos de la colección
        const snapshot = await getDocs(productsCollection)
        
        console.log("snapshot ==> ", snapshot)
        //Mapeamos los datos
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        //Retornamos los datos para que puedan ser utilizados
        console.log('Se obtuvieron todos los productos')
        return products
    } catch (error) {
        throw new Error('Error al obtener el listado completo de productos', error);
    }
}

export const getProductsCategoryFromDb = async (category) => {
    try {
        //Definimos la consulta y sus condiciones
        //Este operador ('array-contains') permite verificar si un valor específico está presente en un array dentro de un documento.
        const q = query(collection(db, 'ítems'), where('categories', 'array-contains', category))
        //Obtenemos los datos que cumplen con la consulta
        const snapshot = await getDocs(q)
        const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        //Retornamos los proudctos para que sean utilizados
        console.log('Se obtuvieron los productos de la categoría:', category)
        return products
    } catch (error) {
        throw new Error('Ocurrió un error en la obtención de productos por categoría', error)
    }
}

export const getProductFromDb = async (productId) => {
    try {
        //Definimos la referencia del documento que queremos consultar
        const docRef = doc(db, 'ítems', productId)
        const snapshot = await getDoc(docRef)
        if (snapshot.exists()) {
            const product = { id: snapshot.id, ...snapshot.data() }
            return product
        } else {
            throw new Error("El documento no existe")
        }
    } catch (error) {
        throw new Error("Ocurrió un error al obtener el producto", error);
    }
}
