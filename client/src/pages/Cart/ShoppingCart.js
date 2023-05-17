import React from 'react'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { CartContext } from './CartContext'
import { useContext } from 'react'


const ShoppingCart = (props) => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, updateCartItems } = useContext(CartContext);


    const calculateTotal = () => {
        const subtotal = cartTotal();
        const shipping = 15000;
        return subtotal + shipping;
    };

    return (
        <>
            <Loader />
            <Navbar />

            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Cart</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="cart-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove"></th>
                                            <th className="product-image">Product Image</th>
                                            <th className="product-name">Name</th>
                                            <th className="product-price">Price</th>
                                            <th className="product-quantity">Quantity</th>
                                            <th className="product-total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id}>
                                                {/* Remove item from cart */}
                                                <td className="product-remove">
                                                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                                </td>
                                                {/* Display item details */}
                                                <td className="product-image">
                                                    <img src={item.image} alt="" />
                                                </td>

                                                <td className="product-name">{item.name}</td>
                                                <td className="product-price">{item.price}đ</td>
                                                <td className="product-quantity">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    />
                                                </td>
                                                {/* Update item quantity */}

                                                <td className="product-total">{item.price * item.quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="total-section">
                                <table className="total-table">
                                    <thead className="total-table-head">
                                        <tr className="table-total-row">
                                            <th>Total</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="total-data">
                                            <td><strong>Subtotal: </strong></td>
                                            <td>{cartTotal()}đ</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>15000đ</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td>{calculateTotal()}đ</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <a href="/cart" className="boxed-btn">Update Cart</a>
                                    <a href="/checkout" className="boxed-btn black">Check Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShoppingCart