import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
    return (
        <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
                <div className="product-image">
                    <a href="/Single_product"><img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LU288eEgRCwAX-tqW0q&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAHTH7NbYbynhyTkqSVdzUMoQoowJXgucjKo4S9klpmPg&oe=6441E9E0" alt="" /></a>
                </div>
                <h3>Autumn Basket</h3>
                <p className="product-price"> 150.000đ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    )
}

export default ProductCard