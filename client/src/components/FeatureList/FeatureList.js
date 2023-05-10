import React from 'react'
import "./FeatureList.css"

const FeatureList = () => {
    return (
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
    )
}

export default FeatureList