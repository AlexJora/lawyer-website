import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>



      <footer style={{ backgroundColor: '#272B2E ' }}>
        <div class='container py-3'>
          <div class='row justify-content-center'>
            <div class='col-md-12 text-center'>
              <span>
                <img src='LOGO2.png' class="img-fluid" alt='measuring scale law logo' style={{ maxWidth: '50px' }} />
                <img src='Component 12 (6).png' class="img-fluid px-0" alt='alina marin cabinet de avocatura si insolventa' style={{ maxWidth: '150px', marginLeft: '-1.5rem' }} />
              </span>

              <div class='menu my-3'>
                <a href='#' class='p-2 text-decoration-none text-light'>Acasa</a>
                <a href='#' class='p-2 text-decoration-none text-light'>Prezentare</a>
                <a href='#' class='p-2 text-decoration-none text-light'>Domenii de activitate</a>
                <a href='#' class='p-2 text-decoration-none text-light'>Contact</a>
              </div>

              <div class="footer-social">
                <span class="text-light rounded p-2 fs-3 circle">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="https://wa.me/0040769935716" class="text-light rounded-circle p-2 fs-3">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <span class="text-light rounded-circle p-2 fs-3">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
              </div>
            </div>
          </div>
          <div class='row mt-5'>
            <div class='col-md-12 text center'>
              <p class='copyright' style={{ fontSize: '0.7rem', color: 'gray' }}>©2023 Avocat Marin Alina, Bucuresti, Romania</p>

            </div>
          </div>
        </div>

      </footer >
    </>
  )
}

export default Footer
