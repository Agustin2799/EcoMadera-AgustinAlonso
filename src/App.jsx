import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Importamos los componentes que necesitamos de la librería
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import CartView from "./views/CartView";
import Nav from "./components/Nav";
import ItemDetailContainer from "./components/ItemDetailContainer";

//Importamos el provedor del contexto del carrito
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/*BrowserRouters evalua las rutas*/}
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
