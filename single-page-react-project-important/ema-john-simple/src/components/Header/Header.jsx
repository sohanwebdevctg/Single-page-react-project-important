// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className='header'>
      <img src={Logo}></img>
      <ul>
        <li><a href="/order">Order</a></li>
        <li><a href="/orderReview">Order Review</a></li>
        <li><a href="/manageInventory">Manage Inventory</a></li>
        <li><a href="/logIn">LogIn</a></li>
      </ul>
      
    </nav>
  );
};

export default Header;