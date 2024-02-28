import React, { useState, useEffect } from 'react';
import logoimg from '../../Assets/estatery-logo.png';
import { MdMenu } from "react-icons/md";
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 576); // Adjusted threshold for mobile devices
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className='logo'>
        <img src={logoimg} alt="logoImage" />
        <h1 className='logoTitle'>Estatery</h1>
      </div>
      {isSmallScreen ? (
        <div>
          <button className="menuToggle" onClick={toggleMenu}>
            <MdMenu />
          </button>
          <div className={`${showMenu ? 'show' : 'navMenu'}`}>
            <button>Rent</button>
            <button>Buy</button>
            <button>Sell</button>
            <button>Manage Property</button>
            <button>Resources</button>
          </div>
        </div>
      ) : (
        <div className="navMenu">
          <button>Rent</button>
          <button>Buy</button>
          <button>Sell</button>
          <button>Manage Property</button>
          <button>Resources</button>
        </div>
      )}
      <div className='loginBtns'>
        <button className='loginBtn'>Login</button>
        <button className='signupBtn'>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
