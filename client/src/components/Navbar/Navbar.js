import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">

              <div className="site-logo">
                <a href="/">Let's Fruit</a>
                <p>Fruit & Flower Boutique</p>
              </div>

              <nav className="main-menu">
                <ul className="current-list-item">
                  <li><a href="/">Trang chủ</a></li>
                  <li><a href="/fruit">Giỏ hoa quả</a></li>
                  <li><a href="/detox">Detox</a></li>
                  <li><a href="/alcohol">Wine & Whisky</a></li>
                  <li><a href="/do_kho">Đồ khô</a></li>
                  <li><a href="/thiep_chuc_mung">Thiệp chúc mừng</a></li>
                  <li><a href="/FAQs">FAQs</a>
                    <ul className="sub-menu">
                      <li><a href="/">Cách trả tiền?</a></li>
                      <li><a href="/">Cách mua hàng</a></li>
                      <li><a href="/">Phương thức thanh toán</a></li>
                    </ul>
                  </li>

                  <li>
                    <div className="header-icons">
                      <a className="mobile-hide admin-icon" href="/login"><i
                        className="fas fa-user"></i></a>
                      <a className="shopping-cart" href="/cart"><i
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