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
                            <p>Let's Fruit là cửa tiệm hoa quả nhập khẩu chuyên cung cấp các giỏ quà hoa quả được thiết kế theo phong cách 
                                tinh tế lịch sự đi ngược lại số đông. Với phương trâm "mùa nào thức nấy", Let's Fruit chỉ bán những món quà 
                                không chỉ đẹp về hình thức mà còn có ý nghĩa thiết thực với hoa quả tươi nhất, ngon nhất theo mùa đến từ các 
                                trang trại, nhà vườn uy tín khắp nơi trên thế giới.</p>
                            <p>Ngoài ra Let's Fruit còn cung cấp các liệu trình thải độc giảm cân bằng sinh tố xanh từ rau xanh và quả ngon 
                                với hiệu quả nhanh chóng, an toàn được nhiều khách hàng tin dùng. Let's Fruit không chỉ bán trái cây, sinh tố 
                                trái cây mà đến Let's Fruit bạn sẽ có những món quà sức khỏe tuyệt vời.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs