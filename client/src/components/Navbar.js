import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div >
      <nav class="navbar navbar-dark fixed-top navbar-expand-md" style={{ backgroundColor: '#272B2E ', paddingTop: '0', paddingBottom: '0' }}>
        <div class="container-xxl">
          {/* logo */}
          <a class="navbar-brand" href="#intro">
            <span>
              <img src='LOGO2.png' class="img-fluid" alt='measuring scale law logo' style={{ maxWidth: '70px' }} />
              <img src='Component 12 (6).png' class="img-fluid px-0" alt='alina marin cabinet de avocatura si insolventa' style={{ maxWidth: '200px', marginLeft: '-2rem' }} />
            </span>
          </a>
          {/* toggle button for mobile nav */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
            aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* navbar links  */}
          <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
            <ul class="navbar-nav">
              <li class="nav-item mx-2">
                <a class="nav-link" href="/" style={{ color: '#c2b697' }}>Acasa</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-light" href="/prezentare">Prezentare</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link  text-light" href="/domenii">Domenii de activitate</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link  text-light mx-3" href="/contact">Contact</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-light fs-6" href="/contact"><FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                /><span class=" mx-2" style={{ fontSize: '0.8rem' }}>0769 935 716</span></a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;