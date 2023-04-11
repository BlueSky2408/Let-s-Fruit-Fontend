import React from 'react'

const HeroBanner = () => {
  return (
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
                      <a href="shop.html" className="boxed-btn">Fruit Basket Collection</a>
                      <a href="contact.html" className="bordered-btn">Contact Us</a>
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
                      <a href="shop.html" className="boxed-btn">Visit Shop</a>
                      <a href="contact.html" className="bordered-btn">Contact Us</a>
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
                      <a href="shop.html" className="boxed-btn">Visit Shop</a>
                      <a href="contact.html" className="bordered-btn">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner