import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Importamos los componentes que necesitamos de la librería
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      {/*BrowserRouters evalua las rutas*/}
     <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsView />}/>
        <Route path="/products/:categories" element={<ProductsView />} />
        {/* <Route path="/item" element={ } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
