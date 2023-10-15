import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

function Navbar() {
  const themeValue = useContext(ThemeContext)
  return (
    <nav className='flex flex-row bg-green-200 justify-between py-4'>
      <div className='ml-5'>
        <img src='' alt='company icon' />
      </div>
      <ul className='flex gap-8 mr-5 '>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/AboutUs">About</Link></li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <div className='flex before:border before:border-solid before:border-red-400'>
          <label htmlFor='' className='ml-4' onClick={themeValue.toggleDisplayMode}>
            mode
          </label>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
