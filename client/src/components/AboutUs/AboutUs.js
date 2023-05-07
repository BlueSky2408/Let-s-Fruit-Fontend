import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
    return (
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
    )
}

export default AboutUs