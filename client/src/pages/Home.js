import React from 'react'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar/Navbar'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Map from '../components/Map/Map'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Loader />
            <Navbar />
            <HeroBanner />

            {/** About Section  */}
            <div className="abt-section mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Về <span className="orange-text">chúng tôi</span></h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-bg">
                                <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i
                                    className="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-text">
                                <p className="top-sub">Từ năm 2021</p>
                                <h2>Chúng tôi là <span className="orange-text">Let's Fruit</span></h2>
                                <p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac
                                    vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                                    sapien sed, interdum velit. Nam eu molestie lorem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat
                                    veritatis minus, et labore minima mollitia qui ducimus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** About Section  */}

            {/** Features List */}
            <div className="list-section mt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-globe-asia"></i>
                                </div>
                                <div className="content">
                                    <h3>100% sản phẩm nhập khẩu</h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3>Giao hàng tận nơi</h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shopping-basket"></i>
                                </div>
                                <div className="content">
                                    <h3>Sản phẩm thiết kế độc quyền</h3>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="list-box d-flex justify-content-start align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <div className="content">
                                    <h3>Cá nhân hoá thiệp chúc mừng</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** Feature List */}


            {/** Products preview */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Những sản phẩm <span className="orange-text">bán chạy nhất</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                    beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/** Products preview */}

            {/** Products preview */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Special <span className="orange-text">Modern Gift Set</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                    beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/** Products preview */}

            {/** Products preview */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Sản phẩm <span className="orange-text">đi kèm</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                    beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/** Products preview */}

            {/** Products preview */}
            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3>Special Occasions <span className="orange-text">Gift Card</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet
                                    beatae optio.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/** Products preview */}

            <Map />
            <Footer />

        </>
    )
}

export default Home