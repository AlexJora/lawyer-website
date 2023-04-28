import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

export const Contact = () => {
  return (
    <>
      <Navbar />



      <section className="contact-page">
        <h6 className='guide-text pt-4 pb-5 text-center' >CONTACT</h6>
        {/* contact info============ */}
        <div className="container-lg bg-light  mb-5 shadow">
          <div className='contact-info text-center py-5'>
            <div className='row no-gutters'>
              <div className='col-lg-3 col-md-6 col-12 border-end border-1'>
                <div className='contact-inner'>
                  <div className='info-i'>
                    <span><FontAwesomeIcon icon={faLocationDot} size='2x' className='law-icon pb-3' /></span>
                  </div>
                  <h5>Locatie:</h5>
                  <p>Bucuresti</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-12 border-end border-1'>
                <div className='contact-inner'>
                  <div className='info-i'>
                    <span><FontAwesomeIcon icon={faClock} size='2x' className='law-icon pb-3' /></span>
                  </div>
                  <h5>Program:</h5>
                  <p>Luni – Vineri: 9 – 17</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-12 border-end border-1'>
                <div className='contact-inner'>
                  <div className='info-i'>
                    <span><FontAwesomeIcon icon={faEnvelope} size='2x' className='law-icon pb-3' /></span>
                  </div>
                  <h5>E-mail</h5>
                  <p>av_alinamarin@yahoo.com</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-12'>
                <div className='contact-inner'>
                  <div className='info-i'>
                    <span><FontAwesomeIcon icon={faPhone} size='2x' className='law-icon pb-3' /></span>
                  </div>
                  <h5>Telefon</h5>
                  <p>+40769 935 716</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form============ */}



        <div className='form-wrap p-5 mb-5'>
          <div className='form-overlay'></div>
          <div className=" contact-form text-center">

            <p className="lead text-light">Solicită consultanță</p>
          </div>
          <div className="row justify-content-center my-5">
            <div className="col-lg-6">

              <form>
                <label for="name" className="form-label text-light">Nume Prenume:</label>
                <div className="mb-4 input-group">

                  <input type="text" id="name" className="form-control" placeholder="e.g. Popescu Ion" />

                </div>

                <label for="email" className="form-label text-light">Adresa de e-mail:</label>
                <div className="input-group mb-4">

                  <input type="text" id="email" className="form-control" placeholder="e.g. popescu@example.com" />

                </div>

                <div className="mb-4 mt-5 form-floating">
                  <textarea className="form-control" id="query" placeholder="query">vvvv</textarea>
                  <label for="query">Mesajul dumneavoastră</label>
                </div>
                <div className="mb-4 text-center">
                  <button type="submit" className="btn btn-light">Trimite mesaj</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
export default Contact;