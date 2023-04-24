import React from 'react'
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Single_product = () => {
  return (
    <>
      <Loader />
      <Navbar />

      <div ClassName="breadcrumb-section breadcrumb-bg">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-lg-8 offset-lg-2 text-center">
              <div ClassName="breadcrumb-text">
                <p>See more Details</p>
                <h1>Single Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ClassName="single-product mt-150 mb-150">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-md-5">
              <div ClassName="single-product-img">
                <img src="assets/img/products/product-img-5.jpg" alt="" />
              </div>
            </div>
            <div ClassName="col-md-7">
              <div ClassName="single-product-content">
                <h3>Green apples have polyphenols</h3>
                <p ClassName="single-product-pricing"><span>Per Kg</span> $50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                <div ClassName="single-product-form">
                  <form action="index.html">
                    <input type="number" placeholder="0" />
                  </form>
                  <a href="cart.html" ClassName="cart-btn"><i ClassName="fas fa-shopping-cart"></i> Add to Cart</a>
                  <p><strong>Categories: </strong>Fruits, Organic</p>
                </div>
                <h4>Share:</h4>
                <ul ClassName="product-share">
                  <li><a href="App.js"><i ClassName="fab fa-facebook-f"></i></a></li>
                  <li><a href="App.js"><i ClassName="fab fa-twitter"></i></a></li>
                  <li><a href="App.js"><i ClassName="fab fa-google-plus-g"></i></a></li>
                  <li><a href="Home.js"><i ClassName="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div ClassName="more-products mb-150">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="col-lg-8 offset-lg-2 text-center">
              <div ClassName="section-title">
                <h3><span ClassName="orange-text">Related</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>
          <div ClassName="row">
            <div ClassName="col-lg-4 col-md-6 text-center">
              <div ClassName="single-product-item">
                <div ClassName="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                </div>
                <h3>Strawberry</h3>
                <p ClassName="product-price"><span>Per Kg</span> 85$ </p>
                <a href="cart.html" ClassName="cart-btn"><i ClassName="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div ClassName="col-lg-4 col-md-6 text-center">
              <div ClassName="single-product-item">
                <div ClassName="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                </div>
                <h3>Berry</h3>
                <p ClassName="product-price"><span>Per Kg</span> 70$ </p>
                <a href="cart.html" ClassName="cart-btn"><i ClassName="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
            <div ClassName="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
              <div ClassName="single-product-item">
                <div ClassName="product-image">
                  <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                </div>
                <h3>Lemon</h3>
                <p ClassName="product-price"><span>Per Kg</span> 35$ </p>
                <a href="cart.html" ClassName="cart-btn"><i ClassName="fas fa-shopping-cart"></i> Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Single_product