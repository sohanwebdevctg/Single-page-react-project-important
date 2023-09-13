// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className='container mx-auto'>
      <div className='h-full flex justify-between items-center'>
        <h3 className='font-bold text-xl'><em>Programming Skill</em></h3>
        <ul className='flex justify-between items-center gap-12'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'><img className='w-7' src='../../../public/codeIcon.jpg'></img></a></li>
        </ul>
      </div>
      <hr className='border border-gray-400'></hr>
    </nav>
  );
};

export default Header;