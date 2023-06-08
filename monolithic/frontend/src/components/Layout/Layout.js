import { Link, Outlet } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import "./Navbar.css";
import "./Footer.css";

function Layout() {
  return (
    <div>
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                <div className="site-logo">
                  <Link to="/">Let's Fruit</Link>
                  <p>Fruit & Flower Boutique</p>
                </div>

                <nav className="main-menu">
                  <ul className="current-list-item">
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                      <Link to="/shop/fruit">Giỏ hoa quả</Link>
                    </li>
                    <li>
                      <Link to="/shop/detox">Detox</Link>
                    </li>
                    <li>
                      <Link to="/shop/alcohol">Wine & Whisky</Link>
                    </li>
                    <li>
                      <Link to="/shop/do_kho">Đồ khô</Link>
                    </li>
                    <li>
                      <Link to="/shop/thiep_chuc_mung">Thiệp chúc mừng</Link>
                    </li>
                    <li>
                      <Link to="/FAQs">FAQs</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Cách trả tiền?</Link>
                        </li>
                        <li>
                          <Link to="/">Cách mua hàng</Link>
                        </li>
                        <li>
                          <Link to="/">Phương thức thanh toán</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div className="header-icons">
                        {/* <a className="mobile-hide admin-icon" href="/login">
                          <i className="fas fa-user"></i>
                        </a> */}
                        <Link className="shopping-cart" to="/cart">
                          <i className="fas fa-shopping-cart"></i>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="index_2.html">
                  <i className="fas fa-search"></i>
                </a>
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>Let's Fruit</h3>
                <p>Chúng tôi mang đến cho quý khách những giỏ quà tuyệt vời.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">Thông tin liên lạc</h2>
                <ul>
                  <li className="footerItems">
                    <LocationOnIcon className="footerIcon" />
                    110 D7 TT Vĩnh Hồ - Ngõ 63 Thái Thịnh - Đống Đa - HN
                  </li>
                  <li className="footerItems">
                    <LocalPhoneIcon className="footerIcon" />
                    0963.758.338
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">Các loại sản phẩm</h2>
                <ul>
                  <li>Giỏ hoa quả</li>
                  <li>Detox</li>
                  <li>Wine&Whisky</li>
                  <li>Đồ khô</li>
                  <li>Thiệp chúc mừng</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Hướng dẫn hỗ trợ</h2>
                <ul>
                  <li>
                    <a href="index.html">Cách thức mua hàng</a>
                  </li>
                  <li>
                    <a href="about.html">Cách thức tính tiền</a>
                  </li>
                  <li>
                    <a href="services.html">Liên hệ nhân viên</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-box social-icons">
                <h2 className="widget-title">Theo dõi chúng tôi</h2>
                <a
                  href="https://www.facebook.com/letsfruit.vn/?ref=page_internal"
                  rel="noopener"
                  className="facebook social"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2023 Bản quyền thuộc về Let's Fruit Việt Nam</p>
      </div>
    </div>
  );
}

export default Layout;