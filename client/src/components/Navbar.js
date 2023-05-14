import React from 'react';
import TopBanner from '../components/TopBanner';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <>

      <div className="nav">
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <span>
                <img src="/assets/LOGO2.png" className="img-fluid logo-image" alt="measuring scale law logo" />
                <img src="/assets/component.png" className="img-fluid px-0 logo-text" alt="alina marin cabinet de avocatura si insolventa" />
              </span>
            </div>
            {/* toggle button for mobile nav */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
              aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links  */}
            <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
              <ul className="navbar-nav">
                <li className="nav-item mx-2">
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#c2b697" : '#fff',

                    })}
                  >
                    Acasa
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink
                    to="/avocatura"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#c2b697" : '#fff',

                    })}>
                    Avocatura
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink
                    to="/insolventa"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#c2b697" : '#fff',

                    })}>
                    Insolventa
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink
                    to="/informatii-utile"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#c2b697" : '#fff',

                    })}>
                    Informatii utile
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "#c2b697" : '#fff',

                    })}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </div >

    </>

  )
}

export default Navbar;