import React from 'react'
import ProductCard from './ProductCard';


export const ProductList = (props) => {
  const productData = props.products.map((product) => (
    <ProductCard
      key={product.id}
      productId={product.id}
      productName={product.name}
      productPrice={product.price}
      ImgSrc={product.image}
    />
  ));
  return (
    <div className="product-section mt-80 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>{props.titleBlack}{" "}
                <span className="orange-text">{props.titleOrange}</span></h3>
            </div>
          </div>
        </div>
        <div className="row">{productData}</div>
      </div>
    </div>
  )
}

export default ProductList
