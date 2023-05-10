import React from 'react'
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Single_product = () => {
  return (
    <>
      <Loader />
      <Navbar />

      <div class="breadcrumb-section breadcrumb-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="breadcrumb-text">
                <p>See more Details</p>
                <h1>Single Product</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-product mt-150 mb-150">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="single-product-img">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/321509656_1222001525193022_8106500305392848442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Ss9MscGtHJ0AX_XdRX-&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB6C8Qk9sXECstMnfRm4rNzXfoT1aW5y5IxMBwM40lPqQ&oe=6441B984" alt="Denim Jeans" alt="" />
              </div>
            </div>
            <div class="col-md-7">
              <div class="single-product-content">
                <h3>Green apples have polyphenols</h3>
                <p class="single-product-pricing"><span>Per Kg</span> $50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                <div class="single-product-form">
                  <form action="index.html">
                    <input type="number" placeholder="0" />
                  </form>
                  <a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                  <p><strong>Categories: </strong>Fruits, Organic</p>
                </div>
                <h4>Share:</h4>
                <ul class="product-share">
                  <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="more-products mb-150">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="section-title">
                <h3><span class="orange-text">Related</span> Products</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
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