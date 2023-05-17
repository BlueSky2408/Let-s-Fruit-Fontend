import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

import "./ProductCard.css";

const ProductCard = (props) => {
  const { handleAddToCart } = useContext(CartContext);

  const addToCart = () => {
    const product = {
      id: props.productId,
      name: props.productName,
      price: props.productPrice,
      image: props.ImgSrc,
    };
    handleAddToCart(product);
  };

  return (
    <div className="col-lg-4 col-md-6 text-center">
      <div class="single-product-item">
        <div className="product-image">
          {/* Redirect to the singleProduct using product id */}
          {/* <Link to={`/product/${props.productId}`}> */}
          <img src={props.ImgSrc} alt="" />
          {/* </Link> */}
        </div>
        <h3>{props.productName}</h3>
        <p className="product-price"> {props.productPrice}đ </p>
        <Link to="/shoppingcart" className="cart-btn" onClick={addToCart}>
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
