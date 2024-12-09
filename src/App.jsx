import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Importamos los componentes que necesitamos de la librería
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import CartView from "./views/CartView";
import Nav from "./components/Nav";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Toaster } from "react-hot-toast"

//Importamos el provedor del contexto del carrito
import { CartProvider } from "./context/cartContext";

const toasterSettings = {
  // Configuración predeterminada
  className: "rounded-lg shadow-md text-sm px-10 py-2 bg-green-200",
  duration: 2000,

  // Configuración para éxitos
  success: {
    icon: "✅", // Ícono de éxito
    style: {
      background: "#289B5A", // verde-500
      color: "#ffffff", // blanco
      borderRadius: "0.375rem", // bordes redondeados (clase rounded-lg)
      padding: "16px", // padding
      boxShadow: "0 4px 6px rgba(72, 187, 120, 0.5)", // sombra suave
    },
  },

  // Configuración para errores
  error: {
    icon: "❌", // Ícono de error
    style: {
      background: "#9B2843", // rojo-500
      color: "#ffffff", // blanco
      borderRadius: "0.375rem", // bordes redondeados (clase rounded-lg)
      padding: "16px", // padding
      boxShadow: "0 4px 6px rgba(245, 101, 101, 0.5)", // sombra suave
    },
  },
};




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/*BrowserRouters evalua las rutas*/}
        <Toaster position="top-center" toastOptions={toasterSettings}/>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/all-products" element={<ProductsView />} />
          <Route path="/category/:category" element={<ProductsView />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
