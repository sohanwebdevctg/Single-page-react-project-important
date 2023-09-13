// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';

// eslint-disable-next-line react/prop-types
const Cart = ({cart}) => {
  console.log(cart)

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for(let items of cart){
    if(items.quantity === 0){
      items.quantity = 1;
    }
    quantity = quantity + items.quantity * items.quantity;
    totalPrice = totalPrice + items.price * items.quantity;
    totalShipping = totalShipping + items.shipping;
  }

  let tax = totalPrice * 7 / 100;
  let grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className='cart'>
      <h2>Order Summary</h2>
      <div className='order-info'>
        <p>Select Item : {quantity}</p>
        <p>Total Price : $ {totalPrice}</p>
        <p>Total Shipping Charge : $ {totalShipping}</p>
        <p>Tax : $ {tax.toFixed(2)}</p>
        <p><strong>Grand Total</strong> : $ {grandTotal}</p>
      </div>
    </div>
  );
};

export default Cart;