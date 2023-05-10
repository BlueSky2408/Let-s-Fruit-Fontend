import React from "react";

function ProductCard(props) {
  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div className="single-product-item">
        <div className="product-image">
          <a href="single-product.html">
            <img src={props.imgSrc} alt="" />
          </a>
        </div>
        <h3>{props.productName}</h3>
        <p className="product-price">
          <span>Per Kg</span> {props.productPrice}đ
        </p>
        <a href="cart.html" className="cart-btn">
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </a>
      </div>
    </div>
  );
}

function ProductSection(props) {
  const productData = props.products.map((product) => (
    <ProductCard
      key={product.id}
      productName={product.name}
      productPrice={product.price}
      imgSrc={product.image}
    />
  ));
  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                {props.titleBlack}{" "}
                <span className="orange-text">{props.titleOrange}</span>
              </h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>

        <div className="row">{productData}</div>
      </div>
    </div>
  );
}

export default ProductSection;
