import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='nav'>
      <nav className="navbar navbar-dark fixed-top navbar-expand-md slide-in">
        <div className="container-xxl">
          {/* logo */}
          <a className="navbar-brand" href="#intro">
            <span>
              <img src='LOGO2.png' className="img-fluid logo-image" alt='measuring scale law logo' />
              <img src='Component 12 (6).png' className="img-fluid px-0 logo-text" alt='alina marin cabinet de avocatura si insolventa' />
            </span>
          </a>
          {/* toggle button for mobile nav */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* navbar links  */}
          <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link home" href="/">Acasa</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-light" href="/prezentare">Prezentare</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link  text-light" href="/domenii">Domenii de activitate</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link  text-light mx-3" href="/contact">Contact</a>
              </li>
              <li className="nav-item mx-2">
                <a className="text-light nav-link fs-6" href=" /contact"><FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                /><span className=" mx-2 phone" >0769 935 716</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar;