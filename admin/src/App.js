import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import "./App.css"
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Revenue from "./pages/Revenue/Revenue";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";
import Login from "./pages/Login/Login";
import useToken from "./pages/Login/useToken";

function App() {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
      <Topbar />
      <div className="contain">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/revenue" element={<Revenue />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
