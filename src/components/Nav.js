import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className='header'>
      <header class="header-content">
        <a href="/" className="logo">
          <span style={{ color: 'red' }}>T</span>ask<span style={{ color: 'red' }}>S</span>ync
        </a>
        <nav class="navbar">
          <a href="/" className="links">Home</a>
          <a href="/about" className="links">About</a>
          <a href="/services" className="links">Services</a>
        </nav>
        <a href="/login" className="login-button">Login</a>

        <button type="button" class="hamburger">
          <RxHamburgerMenu className='menu-item' />
          {/* <img src="./navigation-menu.svg" alt="menu-item" class="menu-item"> */}
        </button>
      </header>
    </div>
  )
}

export default Nav
