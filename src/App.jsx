import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Importamos los componentes que necesitamos de la librería
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import Nav from "./components/Nav";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      {/*BrowserRouters evalua las rutas*/}
     <Nav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/all-products" element={<ProductsView />}/>
        <Route path="/category/:category" element={<ProductsView />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        {/* <Route path="/item" element={ } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
