import React from 'react'
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import { useParams } from 'react-router-dom';
// import Error404 from '../pages/Error404'


const Single_product = () => {
  return (
    <>
      <Loader />
      <Navbar />

      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>See more Details</p>
                <h1>Single Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="single-product mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="single-product-img">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=G-kX_VSDnz8AX83rZYB&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDAF-qsF2jWGn-hAS-2LK7YRLjGgfG0rbIn5CNsX5eeGA&oe=646976E0" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-content">
                <h3>Giỏ hoa quả 1</h3>
                <p className="single-product-pricing">500,000</p>
                <p>Lorem ipsum</p>
                <div className="single-product-form">
                  <form action="index.html">
                    <input
                      type="number"
                      placeholder="0"
                      min="0"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        const newValue = Math.max(0, value); // Restrict the value to be at least 0
                        e.target.value = newValue; // Update the input value
                      }}
                    />
                  </form>
                  <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                  <p><strong>Categories: </strong>Fruits Basket</p>
                </div>
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