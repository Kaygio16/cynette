import React from 'react';

function Navbar() {
  return (
    <nav className='flex flex-row bg-green-200 justify-between py-4'>
      <div className='ml-5'>
        <img src='' alt='company icon' />
      </div>
      <ul className='flex gap-8 mr-5 '>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Blog</a></li>
        <div className='flex before:border before:border-solid before:border-red-400'>
          <label htmlFor='' className='ml-4'>
            mode
          </label>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
