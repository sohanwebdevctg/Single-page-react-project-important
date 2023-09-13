// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='bg-black py-6 '>
      <div className='container mx-auto grid grid-cols-4'>
        <div>
          <h5 className='text-cyan-500 text-xl mb-2'>Contact Link</h5>
          <ul className='text-white'>
            <li className='mb-2'><a href="#">Home</a></li>
            <li className='mb-2'><a href="#">About</a></li>
            <li className='mb-2'><a href="#">Menu</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-cyan-500 text-xl mb-2'>Course Items</h5>
          <ul className='text-white'>
            <li className='mb-2'><a href="#">Web Design</a></li>
            <li className='mb-2'><a href="#">Development</a></li>
            <li className='mb-2'><a href="#">Graphic Design</a></li>
            <li><a href="#">Seo @ Marketing</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-cyan-500 text-xl mb-2'>Address Link</h5>
          <ul className='text-white'>
            <li className='mb-2'><a href="#">Add: c-9,ctg,kapashgolla</a></li>
            <li className='mb-2'><a href="#">Email: ctgdevgp@gmail.com</a></li>
            <li className='mb-2'><a href="#">Mob: +880 01266 034798</a></li>
            <li><a href="#">Tel: +009 1002902839</a></li>
          </ul>
        </div>
        <div>
          <h5 className='text-cyan-500 text-xl mb-2'>Contact Form</h5>
          <input type="email" className='mb-2 w-3/4 p-2 rounded-md'></input><br></br>
          <button type="submit" className='bg-cyan-400 w-3/4 rounded-md p-2 font-bold text-white'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;