import React from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../pages/Cart/CartContext';
import { useContext } from 'react';

const ProductCard = (props) => {
    const { handleAddToCart } = useContext(CartContext);

    const addToCart = () => {
        const product = {
            id: props.productId,
            name: props.productName,
            price: props.productPrice,
            image: props.ImgSrc
        };
        handleAddToCart(product);
    };

    console.log(addToCart)
    return (
        <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
                <div className="product-image">
                    {/* Redirect to the singleProduct using product id
                    <Link to={`/single-product/${props.productId}`}> */}
                    <img src={props.ImgSrc} alt="" />
                    {/* </Link> */}
                    <h3>{props.productName}</h3>
                    <p className="product-price">{props.productPrice}</p>
                    <a href="/cart" className="cart-btn" onClick={addToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard