import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

import ThemeSwitch from './ThemeSwitch';
function Navbar() {
  const themeValue = useContext(ThemeContext)
  return (
    <nav className={`${themeValue.theme === 'dark' ? 'navbar' : 'navbar'} flex flex-row  justify-between py-4`}>
      <div className='ml-5 m-auto hover:cursor-pointer'>
        <img src='' alt='company icon' />
      </div>
      <ul className='flex gap-8 mr-5 '>
        <li className='m-auto hover:cursor-pointer'><Link to="/Home">Home</Link></li>
        <li className='m-auto hover:cursor-pointer'><Link to="/AboutUs">About</Link></li>
        <li className='m-auto hover:cursor-pointer'><Link to="/ContactUs">Contact Us</Link></li>
        <li className='m-auto hover:cursor-pointer'><Link to="/Blog">Blog</Link></li>
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
