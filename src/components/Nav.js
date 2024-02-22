import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Nav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          {/* <RxHamburgerMenu className='menu-item' /> */}

          <Button variant="light" size="sm" onClick={handleShow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><h2 style={{fontWeight: 'bold'}}><span style={{ color: 'red' }}>T</span>ask<span style={{ color: 'red' }}>S</span>ync</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
             <div className='lists'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>My tasks</li>
              </ul>
             </div>
            </Offcanvas.Body>
          </Offcanvas>
          {/* <img src="./navigation-menu.svg" alt="menu-item" class="menu-item"> */}
        </button>
      </header>
    </div>
  )
}

export default Nav
