import React, { useState, useEffect } from 'react';

import './Navbar.css';
import Logo from './logo.svg'
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav  className='navbar1'>
        <div className="left">
        <img src={Logo} alt="logo"/>

        </div>
        <div className="right">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a style={{fontWeight:'bold'}} href='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a 
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blogs
              </a>
            </li>
            <li className='nav-item'>
              <a 
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>
            <li className='nav-item'>
              <a 
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Get a free Quote
              </a>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
                 {click?<FaTimes className='fa-times'/>:<FaBars className='fa-bars'/>}
                 <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
      
          </a>
            </div>
        
          
          </div>  
        
      </nav>
    </>
  );
}

export default Navbar;
