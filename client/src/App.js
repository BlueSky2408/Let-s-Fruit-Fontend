import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home"
import ProductList from './pages/ProductList';
import Detox from "./pages/Detox/Detox";
import Alcohol from './pages/Whine & Whisky/Alcohol';
import DryFood from "./pages/DryFood/DryFood";
import GiftCard from './pages/GiftCard/GiftCard';
import FAQs from "./pages/FAQs/FAQs";
import Error404 from "./pages/Error404";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import SingleProduct from "./pages/Single_product";
import Fruit from './pages/Fruit/Fruit';
import CartProvider from './pages/Cart/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fruit" element={<Fruit />} />
          <Route exact path="/detox" element={<Detox />} />
          <Route exact path="/alcohol" element={<Alcohol />} />
          <Route exact path="/do_kho" element={<DryFood />} />
          <Route exact path="/thiep_chuc_mung" element={<GiftCard />} />
          <Route exact path="/FAQs" element={<FAQs />} />
          <Route exact path="/404_Not_Found" element={<Error404 />} />
          <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/single-product/:productId" element={<SingleProduct />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
