import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductCard from "../../components/Product/ProductCard";

import "./Shop.css";

function Shop() {
  const { category = "all" } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [categories, setCategories] = useState([]);

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    navigate(`/shop/${selectedCategory}`);
  };

  useEffect(() => {
    fetchCategories();
    if (category === "all") {
      fetchAllProducts();
    } else {
      fetchProductByCategory(category);
    }
  }, [category]);

  function fetchAllProducts() {
    fetch("http://localhost:3001/products/list")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }

  function fetchProductByCategory(name) {
    fetch(`http://localhost:3001/categories`)
      .then((res) => res.json())
      .then((data) => {
        const category = data.find((category) => category.name === name);
        if (category) {
          return fetch(
            `http://localhost:3001/categories/${category.id}/products`
          );
        } else {
          throw new Error("Category not found");
        }
      })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }


  const fetchCategories = () => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const productData = data.map((product) => (
    <ProductCard
      key={product.id}
      productId={product.id}
      productName={product.name}
      productPrice={product.price}
      ImgSrc={product.image}
    />
  ));

  return (
    <div>
      <div className="fruit-container">
        <h1 className="fruit-title">Giỏ hoa quả</h1>
        <div className="filter-container">
          <div className="filter">
            <span className="filter-text">Filter Products:</span>
            <select
              className="filter-select"
              onChange={handleFilterChange}
              selected={category}
            >
              <option value="all">All</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.description}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <span className="filter-text">Sort Products:</span>
            <select className="filter-select">
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products  */}

      {productData}
    </div>
  );
}

export default Shop;
