// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-black py-10">
      <div className='grid grid-cols-4 gap-3 container mx-auto'>
        <div>
          <h1 className='text-error font-extrabold text-2xl mb-2'>Contact Us</h1>
          <p className='text-gray-700 text-xl mb-1'><em>About</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>Contact</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>Menu</em></p>
          <p className='text-gray-700 text-xl'><em>View</em></p>
        </div>
        <div>
          <h1 className='text-error font-bold text-2xl mb-2'>Production</h1>
          <p className='text-gray-700 text-xl mb-1'><em>Web Design</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>Web Development</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>Graphic Design</em></p>
          <p className='text-gray-700 text-xl'><em>SEO & Digital Marketing</em></p>
        </div>
        <div>
          <h1 className='text-error font-bold text-2xl mb-2'>Address</h1>
          <p className='text-gray-700 text-xl mb-1'><em>c-10,ctg</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>Issakhan</em></p>
          <p className='text-gray-700 text-xl mb-1'><em>+880 12340 694800</em></p>
          <p className='text-gray-700 text-xl'><em>+2323 948349 828</em></p>
        </div>
        <div>
          <h1 className='text-error font-bold text-2xl mb-2'>Contact Form</h1>
          <input type="email" className='w-56 p-1 rounded'></input><br></br>
          <button className='text-gray-700 text-xl mb-1 font-bold bg-error w-56 mt-1 p-1 rounded'>Submit</button>
          
        </div>
        
      </div>
    </div>
  );
};

export default Footer;