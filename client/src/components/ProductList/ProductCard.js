import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    return (
        <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
                <div className="product-image">
                    {/* Redirect to the singleProduct using product id
                    <Link to={`/single-product/${props.productId}`}> */}
                        <img src={props.ImgSrc} alt="" />
                    {/* </Link> */}
                <h3>{props.productName}</h3>
                <p className="product-price">{props.productPrice}</p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    </div>
    )
}

export default ProductCard