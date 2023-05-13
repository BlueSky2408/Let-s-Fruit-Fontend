import React from 'react'
import ProductCard from '../Product/ProductCard'


export const ProductList = () => {
  return (
    <div className="product-section mt-80 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>Những sản phẩm <span className="orange-text">bán chạy nhất</span></h3>
            </div>
          </div>
        </div>

        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default ProductList
