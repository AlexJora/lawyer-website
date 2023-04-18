import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <>



      <footer class='footer-07'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-12 text-center'>
              <h2 class='footer-heading'>
                <a href='' class='logo'>LOGO2</a>
              </h2>
              <p class='menu'>
                <a href='#'>Acasa</a>
                <a href='#'>Prezentare</a>
                <a href='#'>Domenii de activitate</a>
                <a href='#'>Contact</a>
              </p>
              <ul class='ftco-footer-social p-0'>
                <li class='ftco-animate'>
                  <a href='' data-toggle='tooltip' data-placement='to p' title data-original-title='Facebook'>
                    <span class=''></span>
                  </a>
                </li>
                <li class='ftco-animate'>
                  <a href='' data-toggle='tooltip' data-placement='to p' title data-original-title='Facebook'>
                    <span class=''></span>
                  </a>
                </li>
                <li class='ftco-animate'>
                  <a href='' data-toggle='tooltip' data-placement='to p' title data-original-title='Facebook'>
                    <span class=''><FontAwesomeIcon icon={faEnvelope} /></span>
                  </a>
                </li>
                <li class='ftco-animate'>
                  <a href='' data-toggle='tooltip' data-placement='to p' title data-original-title='Facebook'>
                    <span class=''><FontAwesomeIcon icon={faPhone} /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class='row mt-5'>
            <div class='col-md-12 text center'>
              <p class='copyright'>©2023 Avocat Marin Alina, Bucuresti, Romania</p>

            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
