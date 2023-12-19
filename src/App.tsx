import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Header } from "./components";
import { ShoppingCart } from "./pages/ShoppingCart";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path="/" element={<Login />}></Route>
        <Route path="/products" element={<Home />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>
      </Routes>
    </>
  );
}

export default App;
