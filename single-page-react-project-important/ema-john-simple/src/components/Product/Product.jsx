// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const Product = (props) => {
  
  // eslint-disable-next-line react/prop-types
  const {img,name,price,seller,ratings} = props.product;
  // eslint-disable-next-line react/prop-types
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='product'>
      <div className='product-container'>
      <img src={img}></img>
      <div className='product-info'>
        <h5>{name}</h5>
        <p>Price : {price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star</p>
      </div>
      </div>
      <button className='btn' onClick={() => handleAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  );
};

export default Product;