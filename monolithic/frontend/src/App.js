import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/CartContext/CartContext";

import Layout from "./components/Layout/Layout";
import HeroBanner from "./components/Layout/HeroBanner";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import FAQs from "./pages/FAQs/FAQs";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

// import Checkout from "./pages/Checkout";

import AdminLayout from "./components/Layout/Admin/Layout";
import AdminProductEdit from "./pages/Admin/ProductEdit/ProductEdit";
import AdminProductsList from "./pages/Admin/ProductsList/ProductsList"

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HeroBanner />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop/:category?" element={<Shop />} />
            </Route>
            <Route exact path="/FAQs" element={<FAQs />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            {/* <Route exact path="/FAQs" element={<FAQs />} /> */}
            {/* <Route exact path="/404_Not_Found" element={<Error404 />} /> */}
            {/* <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} /> */}
            {/* <Route exact path="/single_product" element={<SingleProduct />} /> */}
            {/* <Route exact path="/login" element={<Login />} /> */}
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            {/* <Route path="/" element={<AdminDashboard />} /> */}
            {/* <Route path="/revenue" element={<AdminRevenue />} /> */}
            <Route path="/admin/productslist" element={<AdminProductsList />} />
            {/* <Route path="/product/:id" element={<AdminProduct />} /> */}
            <Route
              path="/admin/productedit/:id?"
              element={<AdminProductEdit />}
            />
            {/* <Route path="/orders" element={<AdminOrders />} /> */}
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
