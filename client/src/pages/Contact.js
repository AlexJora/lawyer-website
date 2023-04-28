import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export const Contact = () => {
  return (
    <>
      <Navbar />


      <section>
        <section className="contact">
          <div className="container-lg">
            <h6 className='guide-text pt-4 pb-1 text-center' >CONTACT</h6>

            <div className='contact-info '>
              <div className='row no-gutters'>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='contact-inner'>
                    <div className='info-i'>
                      <span><FontAwesomeIcon icon={faLocationDot} className='p-1' size='1x' /></span>
                    </div>
                    <h5>Locatie:</h5>
                    <p>Bucuresti</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='contact-inner'>
                    <div className='info-i'>
                      <span><FontAwesomeIcon icon={faLocationDot} className='pe-2' size='1x' /></span>
                    </div>
                    <h5>Program:</h5>
                    <p>Luni – Vineri: 9 – 17</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='contact-inner'>
                    <div className='info-i'>
                      <span><FontAwesomeIcon icon={faEnvelope} className='pe-2' size='1x' /></span>
                    </div>
                    <h5>E-mail</h5>
                    <p>av_alinamarin@yahoo.com</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                  <div className='contact-inner'>
                    <div className='info-i'>
                      <span><FontAwesomeIcon icon={faPhone} className='pe-2' size='1x' /></span>
                    </div>
                    <h5>Telefon</h5>
                    <p>+40769 935 716</p>
                  </div>
                </div>
              </div>
            </div>








            <div className="text-center">

              <p className="lead">Solicită consultanță</p>
            </div>
            <div className="row justify-content-center my-5">
              <div className="col-lg-6">

                <form>
                  <label for="name" className="form-label">Nume Prenume:</label>
                  <div className="mb-4 input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person-fill text-secondary"></i>
                    </span>
                    <input type="text" id="name" className="form-control" placeholder="e.g. Popescu Ion" />

                  </div>

                  <label for="email" className="form-label">Adresa de e-mail:</label>
                  <div className="input-group mb-4">
                    <span className="input-group-text">
                      <i className="bi bi-envelope-fill text-secondary"></i>
                    </span>
                    <input type="text" id="email" className="form-control" placeholder="e.g. popescu@example.com" />

                  </div>

                  <div className="mb-4 mt-5 form-floating">
                    <textarea className="form-control" id="query" placeholder="query"></textarea>
                    <label for="query">Mesajul dumneavoastră</label>
                  </div>
                  <div className="mb-4 text-center">
                    <button type="submit" className="btn btn-secondary">Trimite mesaj</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </section>
      <Footer />
    </>
  )
}
export default Contact;