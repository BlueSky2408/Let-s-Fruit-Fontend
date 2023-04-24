import React from 'react'
import Loader from '../components/Loader/Loader'
import Navbar from '../components/Navbar/Navbar'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Categories from '../components/Category/Categories'
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
                                
                                <a href="https://www.youtube.com/watch?v=c1xTDSIXit8" className="video-play-btn popup-youtube"><i
                                    className="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="abt-text">
                                <p className="top-sub">Từ năm 2020</p>
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

            <Categories />


            {/** Products preview */}
            <div className="product-section mt-80 mb-150">
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
                            <div class="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LU288eEgRCwAX-tqW0q&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAHTH7NbYbynhyTkqSVdzUMoQoowJXgucjKo4S9klpmPg&oe=6441E9E0" alt="Denim Jeans" />
                                </div>
                                <h3>Autumn Basket</h3>
                                <p className="product-price"> 150.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322182578_701039088040383_6287780387508107818_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=a63ijh0pmxQAX9aFw9Z&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDnqirSElNY2LMySf-Czw5gde5-gSA_7FJ7BcU6S5-0Fw&oe=6440F7E3" alt="" />
                                </div>
                                <h3>Normal Basket</h3>
                                <p className="product-price"> 70.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322475861_5810275595721780_6200779565954259560_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KQSX3Fen5J8AX-UXlLW&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBencmaoatE7Gcrikz_tdz8km8X8UlqoKwDm2WCEW8WWg&oe=6441153C" alt="" />
                                </div>
                                <h3>Generous Basket</h3>
                                <p className="product-price"> 50.000đ </p>
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
                            <div class="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/321509656_1222001525193022_8106500305392848442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Ss9MscGtHJ0AX_XdRX-&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB6C8Qk9sXECstMnfRm4rNzXfoT1aW5y5IxMBwM40lPqQ&oe=6441B984" alt="Denim Jeans" />
                                </div>
                                <h3>Autumn Basket</h3>
                                <p className="product-price"> 150.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LU288eEgRCwAX-tqW0q&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAHTH7NbYbynhyTkqSVdzUMoQoowJXgucjKo4S9klpmPg&oe=6441E9E0" alt="" />
                                </div>
                                <h3>Normal Basket</h3>
                                <p className="product-price"> 70.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="assets/img/products/fb_img_3.jpg" alt="" />
                                </div>
                                <h3>Generous Basket</h3>
                                <p className="product-price"> 50.000đ </p>
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
                            <div class="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
                                </div>
                                <h3>Autumn Basket</h3>
                                <p className="product-price"> 150.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
                                </div>
                                <h3>Normal Basket</h3>
                                <p className="product-price"> 70.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
                                </div>
                                <h3>Generous Basket</h3>
                                <p className="product-price"> 50.000đ </p>
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
                            <div class="single-product-item">
                                <div className="product-image">
                                    <img src="assets/img/products/fb_img_1.jpg" alt="Denim Jeans" />
                                </div>
                                <h3>Autumn Basket</h3>
                                <p className="product-price"> 150.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="assets/img/products/fb_img_2.jpg" alt="" />
                                </div>
                                <h3>Normal Basket</h3>
                                <p className="product-price"> 70.000đ </p>
                                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <img src="assets/img/products/fb_img_3.jpg" alt="" />
                                </div>
                                <h3>Generous Basket</h3>
                                <p className="product-price"> 50.000đ </p>
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