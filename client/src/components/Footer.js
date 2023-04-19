import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
                <a href='#' class='p-2'>Acasa</a>
                <a href='#' class='p-2'>Prezentare</a>
                <a href='#' class='p-2'>Domenii de activitate</a>
                <a href='#' class='p-2'>Contact</a>
              </p>
              <div class='ftco-footer-social'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="icon"
                  title="av_alinamarin@yahoo.com"
                />
                <a href="https://wa.me/0040769935716"
                  className="icon" class='p-4'>
                  <FontAwesomeIcon
                    icon={faWhatsapp} />
                </a>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="icon"
                  title="0769.935.716"
                />
              </div>
            </div>
          </div>
          <div class='row mt-5'>
            <div class='col-md-12 text center'>
              <p class='copyright' style={{ fontSize: '0.7rem' }}>©2023 Avocat Marin Alina, Bucuresti, Romania</p>

            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
