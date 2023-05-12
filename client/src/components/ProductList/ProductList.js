import React, { useState, useEffect } from "react";
import ProductCard from "../Product/ProductCard";

export const ProductList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/products/list")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-section mt-80 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                Những sản phẩm{" "}
                <span className="orange-text">bán chạy nhất</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.name}
              productPrice={product.price}
              imgSrc={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
