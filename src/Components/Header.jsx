import React from 'react'
import './Header.css';
import LogoImage from '../assets/logo.png';

function Header() {
  return (
    <div className='header-main'>
            <div className='header-content'>
                <div className='header-logo'>
                    <img src={LogoImage} alt='logo image' width={50} height={50} />
                    <label>DevBlog</label>
                </div>
                <div className='header-list'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Me</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <button>Dark</button>
                </div>
            </div>
    </div>
  )

}
export default Header;
