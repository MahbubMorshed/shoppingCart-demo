import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Shop from "./components/shop/Shop";
import Orders from "./components/orders/Orders";
import Inventory from "./components/inventory/Inventory";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
