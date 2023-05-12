import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
// import Fruit from "./pages/Fruit";
// import Detox from "./pages/Detox";
// import Alcohol from "./pages/Alcohol";
// import DryFood from "./pages/DryFood";
// import GiftCard from "./pages/GiftCard";
// import ShoppingCart from "./pages/ShoppingCart";
// import Checkout from "./pages/Checkout";

// import AdminLayout from "./components/AdminLayout";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminProducts from "./pages/AdminProducts";
// import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/fruit" element={<Fruit />} />
          <Route exact path="/detox" element={<Detox />} />
          <Route exact path="/alcohol" element={<Alcohol />} />
          <Route exact path="/do_kho" element={<DryFood />} />
          <Route exact path="/thiep_chuc_mung" element={<GiftCard />} /> */}
          {/* <Route exact path="/FAQs" element={<FAQs />} /> */}
          {/* <Route exact path="/404_Not_Found" element={<Error404 />} /> */}
          {/* <Route exact path="/cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} /> */}
          {/* <Route exact path="/single_product" element={<SingleProduct />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
        </Route>
        {/* <Route path="/admin/*" element={<AdminLayout />}>
            <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
            <Route exact path="/admin/products" element={<AdminProducts />} />
            <Route exact path="/admin/orders" element={<AdminOrders />} />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
