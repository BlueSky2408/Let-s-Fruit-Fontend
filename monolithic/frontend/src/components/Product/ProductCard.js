import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div class="single-product-item">
        <div className="product-image">
          <a href="/Single_product">
            <img src={props.imgSrc} alt="" />
          </a>
        </div>
        <h3>{props.productName}</h3>
        <p className="product-price"> {props.productPrice}đ </p>
        <a href="cart.html" className="cart-btn">
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
