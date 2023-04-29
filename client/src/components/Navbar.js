import React from 'react';
import TopBanner from '../components/TopBanner';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>

      <div className='nav'>
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">

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
                  <a className="nav-link text-light home" href="/">Acasa</a>
                </li>

                <li className="nav-item mx-2">
                  <a className="nav-link text-light" href="/avocatura">Avocatura</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-light" href="/insolventa">Insolventa</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-light" href="/prezentare">Informatii utile</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-light" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div >
        </nav >
      </div >
    </>

  )
}

export default Navbar;