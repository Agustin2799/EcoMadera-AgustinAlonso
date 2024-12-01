import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCvnvRVUbye4V0AWjX-OvbepaLPNY4aLk",
    authDomain: "ecommerce-agus27.firebaseapp.com",
    projectId: "ecommerce-agus27",
    storageBucket: "ecommerce-agus27.firebasestorage.app",
    messagingSenderId: "560048747019",
    appId: "1:560048747019:web:ed670808fe6f7286ea4d0e",
    measurementId: "G-SKLEHM61M9"
};

// La inicialización solo debe realizarse una vez en toda la aplicación, y es probable que tengas más de un archivo(queries.js, otros módulos, etc.) que necesiten acceso a Firestore.
// Mantenerla separada asegura que no se reinicialice innecesariamente y simplifica pruebas y mantenimiento.

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Inicializo el cliente
export const db = getFirestore();