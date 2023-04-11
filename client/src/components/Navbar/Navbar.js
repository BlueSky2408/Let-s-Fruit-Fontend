import React from 'react'

const Navbar = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
        
              <div className="site-logo">
                <a href="index_2.html">Let's Fruit</a>
                <p>Fruit & Flower Boutique</p>
              </div>
          
              <nav className="main-menu">
                <ul>
                  <li className="current-list-item"><a href="index_2.html">Trang chủ</a></li>
                  <li><a href="index_2.html">Giỏ hoa quả</a></li>
                  <li><a href="index_2.html">Detox</a></li>
                  <li><a href="index_2.html">Wine & Whisky</a></li>
                  <li><a href="index_2.html">Đồ khô</a></li>
                  <li><a href="index_2.html">Thiệp chúc mừng</a></li>
                  <li><a href="index_2.html">FAQs</a>
                    <ul className="sub-menu">
                      <li><a href="index_2.html">Cách trả tiền?</a></li>
                      <li><a href="index_2.html">Cách mua hàng</a></li>
                      <li><a href="index_2.html">Phương thức thanh toán</a></li>
                    </ul>
                  </li>
        
                  <li>
                    <div className="header-icons">
                      <a className="mobile-hide search-bar-icon" href="index_2.html"><i
                        className="fas fa-user"></i></a>
                      <a className="shopping-cart" href="cart.html"><i
                        className="fas fa-shopping-cart"></i></a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="index_2.html"><i className="fas fa-search"></i></a>
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar