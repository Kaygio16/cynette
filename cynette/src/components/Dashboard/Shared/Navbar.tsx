import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

import ThemeSwitch from './ThemeSwitch';
function Navbar() {
  const themeValue = useContext(ThemeContext)
  return (
    <nav className={`${themeValue.theme === 'dark' ? 'navbar' : 'navbar'} flex flex-row  justify-between py-4`}>
      <div className='ml-5 m-auto hover:cursor-pointer'>
        <img src='' alt='company icon' />
      </div>
      <ul className='flex gap-8 mr-5'>
        <li className='m-auto hover:cursor-pointer'><NavLink to="/Home" className='hover:outline hover:outline-blue-100 hover:rounded-lg hover: p-2'>Home</NavLink></li>
        <li className='m-auto hover:cursor-pointer'><NavLink to="/AboutUs" className='hover:outline hover:outline-blue-100 hover:rounded-lg hover: p-2'>About</NavLink></li>
        <li className='m-auto hover:cursor-pointer'><NavLink to="/ContactUs" className='hover:outline hover:outline-blue-100 hover:rounded-lg hover: p-2'>Contact Us</NavLink></li>
        <li className='m-auto hover:cursor-pointer'><NavLink to="/Blog" className='hover:outline hover:outline-blue-100 hover:rounded-lg hover: p-2'>Blog</NavLink></li>
        <div className='flex before:border before:border-solid before:border-red-400'>
          <label htmlFor='' className='ml-4 hover:cursor-pointer' onClick={themeValue.toggleDisplayMode}>
            <ThemeSwitch value = {themeValue.theme}/>
          </label>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
