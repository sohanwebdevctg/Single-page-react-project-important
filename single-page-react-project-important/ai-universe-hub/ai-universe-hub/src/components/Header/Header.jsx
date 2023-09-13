// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar">
        <div className="flex-1">
          <a className="text-2xl font-bold text-orange-600"><em>AiUniverseHub</em></a>
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-10">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#" className='mr-5'>Contact</a>
          </div>
          <div className="dropdown dropdown-end">
              <div className="w-10 rounded-full">
                <img className='rounded-full' src="../../../public/logo.jpg" />
              </div>
          </div>
        </div>
      </div>
      <hr className='border border-solid border-gray-400'></hr>
    </div>
  );
};

export default Header;