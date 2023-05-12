import Categories from "../../components/Home/Categories";

import "./HeroBanner.css";
import "./AboutUs.css";
import "./FeatureList.css";

const Home = () => {
  return (
    <>

      {/* Hero Banner */}

      <div className="homepage-slider">
        {/** First Slider  */}
        <div className="single-homepage-slider homepage-bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Let's Fruit</p>
                    <h1>We bring you wonderful fruit baskets & More</h1>
                    <div className="hero-btns">
                      <a href="/ProductList" className="boxed-btn">
                        Fruit Basket Collection
                      </a>
                      <a href="/" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** 2nd Slider  */}
        <div className="single-homepage-slider homepage-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Fresh Everyday</p>
                    <h1>100% Organic Collection</h1>
                    <div className="hero-btns">
                      <a href="shop.html" className="boxed-btn">
                        Visit Shop
                      </a>
                      <a href="contact.html" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** 3rd Slider  */}
        <div className="single-homepage-slider homepage-bg-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-right">
                <div className="hero-text">
                  <div className="hero-text-tablecell">
                    <p className="subtitle">Mega Sale Going On!</p>
                    <h1>Get December Discount</h1>
                    <div className="hero-btns">
                      <a href="shop.html" className="boxed-btn">
                        Visit Shop
                      </a>
                      <a href="contact.html" className="bordered-btn">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <Categories />
      {/* <Bubble /> */}
      {/* <ProductList
        products={[
          {
            id: 1,
            name: "",
            price: 0,
            image: "",
          },
        ]}
      /> */}
      {/* <Map /> */}
    </>
  );
};

export default Home;
