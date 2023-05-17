import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import CategoryItem from "../../components/Home/CategoryItem";
import ProductCard from "../../components/Product/ProductCard";

import "./AboutUs.css";
import "./FeatureList.css";
import "./Categories.css";

// mock data
import { categories } from "../../data";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products/list")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* About Us */}

      <div className="abt-section mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  Về <span className="orange-text">chúng tôi</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="abt-bg">
                <a
                  href="https://www.youtube.com/watch?v=c1xTDSIXit8"
                  className="video-play-btn popup-youtube"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="abt-text">
                <p className="top-sub">Từ năm 2020</p>
                <h2>
                  Chúng tôi là <span className="orange-text">Let's Fruit</span>
                </h2>
                <p>
                  Etiam vulputate ut augue vel sodales. In sollicitudin neque et
                  massa porttitor vestibulum ac vel nisi. Vestibulum placerat
                  eget dolor sit amet posuere. In ut dolor aliquet, aliquet
                  sapien sed, interdum velit. Nam eu molestie lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente facilis illo repellat veritatis minus, et labore
                  minima mollitia qui ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature List */}

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

      {/* Categories */}

      <div className="categories-container">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>

      {/* Product Highlights */}

      <div className="product-section mt-80 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>
                  Những sản phẩm
                  <span className="orange-text">bán chạy nhất</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="row">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
                imgSrc={product.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Map  */}

      <div className="find-location blue-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>
                {" "}
                <i className="fas fa-map-marker-alt"></i> Find Our Location
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          title="This part is a map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.4600590485992!2d105.81869817968158!3d21.009693933017203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac829a312e41%3A0x513b9fd4484a9fbe!2zMTEwIFAuIFRow6FpIFRo4buLbmgsIFRydW5nIExp4buHdCwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1681035498544!5m2!1sen!2s"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Home;
