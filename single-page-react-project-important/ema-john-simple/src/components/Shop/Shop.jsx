// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
    addToDb(product.id);
  }
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  useEffect(()=> {
    const getData = getShoppingCart();
    const newData = [];
    for(let id in getData){
      const checkData = products.find(product => product.id === id);
      if(checkData){
        const quantity = getData[id];
        checkData.quantity = quantity;
        newData.push(checkData);
      }
    }
    setCart(newData);
  },[products])

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          // eslint-disable-next-line react/jsx-key
          products.map(product => <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;