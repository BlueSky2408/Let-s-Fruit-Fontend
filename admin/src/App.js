import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <Router>
        <Topbar />
        <div className="contain">
          <Sidebar />
          <Routes>
            <Route exact path="/admin" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
