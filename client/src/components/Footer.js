import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faAngleUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>
      <footer className='foo'>
        <div className='container py-3'>
          <div className='row justify-content-center'>
            <div className='col-md-12 text-center'>
              <span>
                <img src='/assets/LOGO2.png' className="img-fluid logo-image" alt='measuring scale law logo' />
                <img src='/assets/component.png' className="img-fluid px-0 logo-text" alt='alina marin cabinet de avocatura si insolventa' />
              </span>

              <div className='menu my-3'>
                <a href='#' className='p-2 text-decoration-none text-light'>Acasa</a>
                <a href='#' className='p-2 text-decoration-none text-light'>Prezentare</a>
                <a href='#' className='p-2 text-decoration-none text-light'>Avocatura</a>
                <a href='#' className='p-2 text-decoration-none text-light'>Insolventa</a>
                <a href='#' className='p-2 text-decoration-none text-light'>Contact</a>
              </div>

              <div className="footer-social " >
                <span className='fs-3'>

                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
                <span className="fs-3">
                  <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                </span>
                <span className="fs-3">
                  <FontAwesomeIcon icon={faPhone} size="1x" />
                </span>
              </div>
            </div>
          </div>
          <button className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }>
            <FontAwesomeIcon icon={faAngleUp} className="icon" />
          </button>
          <div className='row mt-5'>
            <div className='col-md-12 text center'>
              <p className='copyright'>©2023 Avocat Marin Alina, Bucuresti, Romania</p>

            </div>
          </div>
        </div>

      </footer >
    </>
  )
}

export default Footer
