import React from 'react'
import styled from "styled-components"
import { popularProducts } from '../../data';
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
              </div>
              <h3>Autumn Basket</h3>
              <p className="product-price"> 150.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
              </div>
              <h3>Normal Basket</h3>
              <p className="product-price"> 70.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
              </div>
              <h3>Generous Basket</h3>
              <p className="product-price"> 50.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
              </div>
              <h3>Autumn Basket</h3>
              <p className="product-price"> 150.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
              </div>
              <h3>Normal Basket</h3>
              <p className="product-price"> 70.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
              </div>
              <h3>Generous Basket</h3>
              <p className="product-price"> 50.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
              </div>
              <h3>Autumn Basket</h3>
              <p className="product-price"> 150.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
              </div>
              <h3>Normal Basket</h3>
              <p className="product-price"> 70.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
              </div>
              <h3>Generous Basket</h3>
              <p className="product-price"> 50.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
              </div>
              <h3>Autumn Basket</h3>
              <p className="product-price"> 150.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
              </div>
              <h3>Normal Basket</h3>
              <p className="product-price"> 70.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
              </div>
              <h3>Generous Basket</h3>
              <p className="product-price"> 50.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323352218_884739166054839_8626386646657922855_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=zxNS4gvjTHMAX9T8ceq&_nc_ht=scontent.fhan17-1.fna&oh=00_AfACi7QJLReJ16pDOGgEjn6jOxVjLQGzjtzSSYiAhwO5ZQ&oe=644191E7" alt="Denim Jeans" />
              </div>
              <h3>Autumn Basket</h3>
              <p className="product-price"> 150.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/323330697_907934770235931_3076845219018255242_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=q-7-EaCjvfkAX8qSoBu&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB-mb2xqT39UtWRmh--6LRGSMKUdeZ5N0J5KuCr1HIewA&oe=64406CA7" alt="" />
              </div>
              <h3>Normal Basket</h3>
              <p className="product-price"> 70.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/328521157_3279433608975707_4299256825332781992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=CdlaclsOeD4AX-dpCU1&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBuEqGnoGLj7QEA08XPR1cJvGd3e3hr7Ba9fKhJKmBGiw&oe=64417252" alt="" />
              </div>
              <h3>Generous Basket</h3>
              <p className="product-price"> 50.000đ </p>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
          </div>
        </div>     
      </div>
    </div>
  )
}

export default Products
