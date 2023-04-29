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
        {/* contact form and text============ */}




        <div class="container-lg">
          <div class="row g-5">
            <div class="col-sm-6 order-sm-first ">
              <div className='contact-text d-flex flex-column '>
                <h5 className='text-center pb-5 '>Nu ezitati sa ne contactati!</h5>
                <p>Suntem aici pentru a va oferi sprijinul nostru in toate problemele legale cu care va confruntati. </p>
                <p>Va rugam sa ne contactati completand formularul de mai jos si vom fi bucurosi sa va oferim ajutorul nostru.</p>
                <p>Vom prelua solicitarea dvs. si vom reveni in scurt timp pentru mai multe detalii.</p>
              </div>
            </div>


            <div class="col-sm-6 ">
              <div class='form-wrap p-5 mb-5 h-80'>
                <div class='form-overlay'></div>
                <div class=" contact-form text-center">
                  <p class="lead text-light">Solicită consultanță</p>
                </div>
                <div class="row justify-content-center ">
                  <div class="col-lg-12">
                    <form>
                      <label for="name" class="form-label text-light">Nume Prenume:</label>
                      <div class="mb-4 input-group">
                        <input type="text" id="name" class="form-control" />
                      </div>
                      <label for="email" class="form-label text-light">Adresa de e-mail:</label>
                      <div class="input-group mb-4">
                        <input type="text" id="email" class="form-control" />
                      </div>
                      <label for="query" class="form-label text-light">Mesajul dvs.:</label>
                      <textarea class="form-control" id="query"></textarea>
                      <div class="my-4 text-center pt-2">
                        <button type="submit" class="btn btn-light ">Trimite mesaj</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='form-wrap p-5 mb-5'>
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


                <label for="query" className="form-label text-light">Mesajul dumneavoastră</label>
                <textarea className="form-control" id="query"></textarea>


                <div className="my-4 text-center">
                  <button type="submit" className="btn btn-light">Trimite mesaj</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </section>


      <Footer />
    </>
  )
}
export default Contact;