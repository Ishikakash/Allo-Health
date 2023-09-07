import React from 'react'
import { useState } from 'react';
import './list.css'

const Lists = () => {
    const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItemToCart = (itemName, itemPrice) => {
    const newItem = { name: itemName, price: itemPrice, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  const incrementItemQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decrementItemQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const placeOrder = () => {
    // Implement your order placement logic here
    // For example, you can send the cart data to a server or perform any desired action
    console.log('Order placed:', cartItems);
    setCartItems([]); // Clear the cart after placing the order
  };
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          {/* Your list of items */}
          {/* Add onClick handlers to items to add them to the cart */}
          <div className='headerListItem '>
            <span onClick={() => addItemToCart('Chocolates', 10)}><b>Chocolates</b></span>
          </div>
          <div className='headerListItem '>
            <span onClick={() => addItemToCart('Pizza', 120)}><b>Pizza</b></span>
          </div>
          <div className='headerListItem'>
            <span onClick={() => addItemToCart('Burgers', 60)}><b>Burgers</b></span>
          </div>
          <div className='headerListItem '>
            <span onClick={() => addItemToCart('Drinks', 10)}><b>Drinks</b></span>
          </div>
          <div className='headerListItem '>
            <span onClick={() => addItemToCart('Cookie', 20)}><b>Cookies</b></span>
          </div>
          <div className='headerListItem'>
            <span onClick={() => addItemToCart('Cakes', 400)}><b>Cakes</b></span>
          </div>
          <div className='headerListItem '>
            <span onClick={() => addItemToCart('Lunch', 500)}><b>Lunch</b></span>
          </div>
          <div className='headerListItem'>
            <span onClick={() => addItemToCart('Breakfast', 350)}><b>Breakfast</b></span>
          </div>
        </div>
        <hr />
        <h1 style={{ color: 'Black' }}>
          <center>Menu</center>
        </h1>
        <br />
      </div>
      <div className='cart'>
        <br/>
        <button onClick={() => setIsCartOpen(!isCartOpen)} className='cart-button'>
          Cart
        </button>
        {isCartOpen && (
          <div className='cart-content'>
            <div className='cart-items'>
              {cartItems.map((item, index) => (
                <div key={index} className='cart-item'>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <button onClick={() => decrementItemQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementItemQuantity(index)}>+</button>
                </div>
              ))}
            </div>
            <div className='cart-actions'>
              <button onClick={closeCart} className='cart-close-button'>
                Close
              </button>
              <button onClick={placeOrder} className='cart-order-button'>
                Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lists