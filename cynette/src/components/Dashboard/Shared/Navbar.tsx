import React from 'react';

function Navbar() {
  return (
    <div className='flex flex-row bg-green-200 justify-between py-4'>
      <div className='ml-5' >
        <img src='' alt='company icon' />
      </div>
      <div className='flex gap-8 mr-5 '>
        <div>Home</div>
        <div>About</div>
        <div>Contact Us</div>
        <div>Blog</div>
        <div className='flex before:border before:border-solid before:border-red-400'>
          <label htmlFor='' className='ml-4'>mode</label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

