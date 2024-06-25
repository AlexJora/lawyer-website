import React from "react";
import { Helmet } from "react-helmet";

import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Contact | Avocat Bucuresti | Cabinet de avocat si insolventa Alina
          Marin
        </title>
        
        <meta
          name="description"
          content="Contacteaza-ne pentru orice problema juridica cu care te confrunti. Oferim consultanta si reprezentare in diverse domenii legale. Locatie: Bucuresti, Program: Luni - Vineri: 9 - 17, E-mail: av_alinamarin@yahoo.com, Telefon: +40769 935 716."
        />
      </Helmet>
      <section>
        <h6 className="guide-text ms-3 mt-4">CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light my-5 shadow">
          <div className="contact-info text-center py-5">
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Locatie:</h5>
                  <p>Bucuresti</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faClock}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Program:</h5>
                  <p>Luni – Vineri: 9 – 17</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 border-end border-1">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>E-mail</h5>
                  <p>av_alinamarin@yahoo.com</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="contact-inner">
                  <div className="info-i">
                    <span>
                      <FontAwesomeIcon
                        icon={faPhone}
                        size="2x"
                        className="law-icon pb-3"
                      />
                    </span>
                  </div>
                  <h5>Telefon</h5>
                  <p>+40769 935 716</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form and text============ */}
        <div className="container-lg">
          <div className="row g-5">
            <div className="col-sm-6 order-sm-first ">
              <div className="contact-text d-flex flex-column ">
                <h5 className="lh-base text-center pb-4">
                  Nu ezitati sa ne contactati!
                </h5>
                <p>
                  Suntem aici pentru a va oferi sprijinul nostru in toate
                  problemele legale cu care va confruntati.{" "}
                </p>
                <p>
                  Va rugam sa ne contactati completand formularul de mai jos si
                  vom fi bucurosi sa va oferim ajutorul nostru.
                </p>
                <p>
                  Vom prelua solicitarea dvs. si vom reveni in scurt timp pentru
                  mai multe detalii.
                </p>
              </div>
            </div>
            <div className="col-sm-6 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
