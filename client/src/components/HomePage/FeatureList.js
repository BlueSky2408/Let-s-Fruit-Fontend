import React from "react";

const FeatureList = () => {
  const listItems = [
    {
      icon: "fas fa-globe-asia",
      title: "100% sản phẩm nhập khẩu",
    },
    {
      icon: "fas fa-shipping-fast",
      title: "Giao hàng tận nơi",
    },
    {
      icon: "fas fa-shopping-basket",
      title: "Sản phẩm thiết kế độc quyền",
    },
    {
      icon: "fas fa-gift",
      title: "Cá nhân hoá thiệp chúc mừng",
    },
  ];

  return (
    <div className="list-section mt-30">
      <div className="container">
        <div className="row">
          {listItems.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={item.title}>
              <div className="list-box d-flex align-items-center">
                <div className="list-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
