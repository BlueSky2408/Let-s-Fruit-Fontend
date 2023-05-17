import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./Footer.css"


const Footer = () => {
  return (
    <>
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
                  <li><a href="index.html">Cách thức mua hàng</a></li>
                  <li><a href="about.html">Cách thức tính tiền</a></li>
                  <li><a href="services.html">Liên hệ nhân viên</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-box social-icons">
                <h2 className="widget-title">Theo dõi chúng tôi</h2>
                <a href="https://www.facebook.com/letsfruit.vn/?ref=page_internal" rel="noopener" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size='2x' />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2023 Bản quyền thuộc về Let's Fruit Việt Nam</p>
      </div>
    </>
  )
}

export default Footer