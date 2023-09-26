import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  faAngleUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="row justify-content-center pt-3 mx-2">
          {/* Logo Section */}
          <div className="col-md-3 text-center pe-5">
            <span>
              <img
                src="/assets/LOGO2.png"
                className="img-fluid logo-image me-1"
                alt="scales of justice logo"
                width="50"
                height="50"
              />
              <img
                src="/assets/component.png"
                className="img-fluid px-0 logo-text"
                alt="alina marin cabinet de avocatura si insolventa"
                width="150"
                height="100"
              />
            </span>
            <p></p>
          </div>
          {/* Legal Section */}
          <div className="col-md-3 text-center pt-3">
            <div class="legal-links">
              <p>Legal</p>
              <a href="/avocatura" className="custom-link d-block fw-light">
                Termeni si conditii
              </a>
              <a href="/avocatura" className="custom-link d-block fw-light">
                Politica de Confidentialitate
              </a>
            </div>
          </div>
          {/* Contact Section */}
          <div className="col-md-3 text-center pt-3">
            <div class="contact-info">
              <p>Contact</p>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="contact-icon "
                    title="av_alinamarin@yahoo.com"
                  />
                  <span className="text fw-light px-2">
                    av_alinamarin@yahoo.com
                  </span>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="contact-icon"
                    title="+40769 935 716"
                  />
                  <span className="text px-2 fw-light">+40 (769) 935 716</span>
                </span>
              </div>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="contact-icon"
                    title="Bucuresti "
                  />
                  <span className="text px-2 fw-light">Bucuresti ROMANIA</span>
                </span>
              </div>
            </div>
          </div>
          {/* Program section */}
          <div className="col-md-3 text-center pt-3">
            <div>
              <p>Program</p>
              <p className="fw-light">
                Luni – Vineri: 9AM – 5PM <br></br> Sâmbătă – Duminică: Închis
              </p>
            </div>
          </div>
        </div>
        {/* Scroll up */}
        <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top ms-3 mb-3"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              className="up-icon h3 hw-lighter "
            />
          </a>
        </div>
        {/* Copyright */}
        <div>
          <div className="col-md-12 text center">
            <p className="copyright">
              ©2023 Avocat Marin Alina, Bucuresti, Romania
            </p>
          </div>
        </div>

        <WhatsAppWidget
          phoneNo="+27665528814"
          position="right"
          iconSize="40"
          iconColor="white"
          iconBgColor="green"
          headerIcon="/assets/LOGO2.png"
          headerTxtColor="white"
          headerBgColor="#02182b"
          headerTitle="Birou de Avocatura si Insolventa"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Support"
          chatMessage={
            <>
              Buna ziua,
              <br />
              <br /> Cum putem sa va ajutam?
            </>
          }
          footerBgColor="#999"
          btnBgColor="#c2b697"
          btnTxtColor="black"
        />
      </footer>
    </>
  );
};

export default Footer;
