import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      // Item already exists in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Item is not in the cart, add it as a new item
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
    console.log("Cart Items:", cartItems); // Log the cart items to console
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          //Ensure the new quantity is not below 1
          const quantity = Math.max(newQuantity, 1);
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  //Save cartItems to local storage
  //by converting cartItems into JSON format
  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  //Loading cartItems from local storage
  //by retrieving the stored JSON string from local storage, parse it back
  //to the array, and return cardItems
  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCartItems = (newCartItems) => {
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        updateCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
