import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faLocationDot,
  // faAngleUp,
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
          <div className="col-md-4 text-center pe-5 me-auto">
            <span className="pe-5">
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
            <p className="pt-3 fw-light">
              Biroul nostru de avocatura si insolventa va poate ghida prin
              provocarile juridice si financiare. Suntem dedicați să vă protejăm
              interesele și să vă oferim soluții personalizate
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 text-center">
            <p className="fw-bold">Contact</p>
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
            <div className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="contact-icon"
                  title="+40769 935 716"
                />
                <span className="text px-2 fw-light">+40 (769) 935 716</span>
              </span>
            </div>
            <div className="mt-2">
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
          {/* Program section */}
          <div className="col-md-4 text-center">
            <div>
              <p className="fw-bold">Program</p>
              <p className="fw-light">
                Luni – Vineri: 9AM – 5PM <br></br> Sâmbătă – Duminică: Închis
              </p>
            </div>
            {/* Legal Section */}

            <div class="legal-links">
              <p className="fw-bold">Legal</p>
              <a
                href="/politica-de-confidentialitate"
                className="custom-link d-block fw-light"
              >
                Politica de Confidentialitate
              </a>
            </div>
          </div>
        </div>
        {/* Scroll up */}
        {/* <div>
          <a
            href="#top"
            aria-label="Navigheaza in partea de sus"
            className="scroll-to-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <FontAwesomeIcon icon={faAngleUp} className="up-icon" size="2x" />
          </a>
        </div> */}
        {/* WhatsAppWidget */}
        <div className="">
          <WhatsAppWidget
            phoneNo="+27665528814"
            position="right"
            iconSize="50"
            iconColor="white"
            iconBgColor="#25D366"
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
        </div>
        {/* Copyright */}
        <div>
          <div className="bg-dark d-flex align-items-center justify-content-center">
            <hr></hr>
            <p className="copyright mb-0">©2023 Avocat Alina Marin</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
