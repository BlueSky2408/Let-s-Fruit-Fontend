import React from 'react';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductList from './pages/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/ProductList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
