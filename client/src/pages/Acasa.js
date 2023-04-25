import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendarCheck, faFileCircleCheck, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Acasa = () => {
  return (
    <>
      <div className='home-page'>
        {/*NAVBAR=========*/}
        <Navbar />

        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6">
                <div className="text-1 fs-2">ALINA MARIN</div>
                <div className="text-2 fs-4">BIROU DE AVOCATURA SI INSOLVENTA - <span className='fw-bold'>Bucuresti </span></div>
                <div className="text-3 fst-italic lh-6 fw-lighter">"Nu este o adevărată justiție acolo unde nu există dreptate, iar dreptatea nu poate fi găsită acolo unde nu există adevăr." - <span>Lucius Annaeus Seneca.</span></div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex gap-0 justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <button id='first-btn' className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"><span className='p-3' ><FontAwesomeIcon icon={faCalendarCheck} /></span>Programare</button>
                </div>
                <div className="col flex-grow-1">
                  <button className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"><span className='p-3' ><FontAwesomeIcon icon={faFileCircleCheck} /></span>Cere o evaluare</button>
                </div>
                <div className="col flex-grow-1">
                  <button className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"><span className='p-3' ><FontAwesomeIcon icon={faCommentsDollar} /></span>Onorarii
                  </button>
                </div>
              </div>
            </div >

            {/* vertical buttons*/}
            <div className="vertical-btn d-md-none d-flex flex-column align-items-center mt-3 gap-1">
              <button className="btn btn-outline-dark type-button p-3 w-80 mb-3 btn-sm"><span className='p-3' ><FontAwesomeIcon icon={faCalendarCheck} /></span>Solicita o programare</button>
              <button className="btn btn-outline-dark type-button p-3 w-80 mb-3 btn-sm"><span className='p-3' ><FontAwesomeIcon icon={faFileCircleCheck} /></span>Cere o evaluare</button>
              <button className="btn btn-outline-dark type-button p-3 w-80 btn-sm"><span className='p-3' ><FontAwesomeIcon icon={faCommentsDollar} /></span>Onorarii</button>
            </div>

          </div>
        </div>

        {/*TE CONFRUNTI CU O PROBLEMA========= */}
        < section className='problem container mt-5 p-1' >
          <div className="row mt-4 gx-4 flex-column flex-md-row gap-6">
            <div className="col col-md-6 order-md-2">
              <div className="d-flex align-items-center">
                <img src='welcome-img.jpg' className='welcome-img img-fluid mx-auto d-block' alt='two people on desk' />

              </div>
            </div >
            <div className="col col-md-6 order-md-2">
              <h6>INTRO</h6>
              <h4 className=" lh-base fw-bold text-center">Va confrunți cu o problemă juridică sau de insolventa?</h4>
              <h6 className=" lh-base fw-bold text-center">Suntem gata sa va ajutam!</h6>
              <p className='text-separator fw-light' ><span className='fst-italic fs-3 fw-normal'>C</span>abinetul nostru de Avocatură și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice. Vrem să fim alături de tine și să găsim cele mai bune soluții pentru problemele tale menținând în același timp imaginea ta impecabilă în lumea afacerilor.</p>
            </div>
          </div >
        </ section >



        {/*DOMENII DE PRACTICA========= */}
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="services-section">
                <div className="services-overlay"></div>
                <div className='services-content container mt-5 p-1'>
                  <h6 className='text-center mb-4'>SERVICII</h6>
                  <h4 className=" lh-base fw-bold text-center">Domenii de activitate</h4>
                  <div className="row mt-4 gx-3 flex-column flex-md-row">
                    <div className='col-md-6'>
                      <h3 className='text-center mb-4'>Cabinet de avocatura</h3>
                      <div className='d-flex align-items-center'>
                        <img src="barou.jpg" className="img-fluid mx-auto d-block" alt="sigla barou" style={{
                          maxWidth:
                            '120px',
                          borderRadius: '5px'
                        }} />
                      </div>
                      <p className='pt-3'>Asistenta si reprezentare juridica in domenii de drept comercial, infiintari
                        societati, drept civil, dreptul muncii, dreptul familiei, proprietete intelectuala, procedura
                        insolventei, recuperari creante, drept administrativ, asociatii si fundatii, etc.</p>
                      <div className='text-center mt-3'>
                        <button className='btn btn-primary'>Learn more</button>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <h3 className='text-center mb-4'>Cabinet de insolventa</h3>
                      <div className='d-flex align-items-center'>
                        <img src="unpir.jpg" className="img-fluid mx-auto d-block" alt="sigla unpir" style={{
                          maxWidth:
                            '120px',
                          borderRadius: '5px'
                        }} />
                      </div>
                      <p className='pt-3'>Servicii in etapa de preinsolventa, fuziuni si divizari societati comerciale,
                        insolventa, restructurare si reorganizare judiciara, faliment, lichidare judiciara si
                        administrativa, recuperari creante, evaluare si valorificare active.</p>
                      <div className='text-center mt-3'>
                        <button className='btn btn-primary'>Learn more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/* CINE SUNTEM */}
        < section className='presentation container mt-5 p-1' >
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-4 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic fw-normal">Cine suntem?</h4>
              </div>
            </div >
            <div className="col col-md-8 order-md-2">
              <p className='text-separator fw-light'><span className='fst-italic fs-3 fw-normal'>S</span>untem o echipă tânără și dinamică de avocați și specialiști în insolvență și domeniul financiar-juridic. Cu o experiență de peste 10 ani în acest domeniu, oferim servicii de consultanță, asistență și reprezentare în fața instanțelor și autorităților publice. Ne-am propus să găsim cele mai bune soluții pentru problemele tale comerciale, fiscale și contractuale, într-un mod profesionist și benefic pentru imaginea ta în lumea afacerilor.</p>
            </div>
          </div >
        </ section >

        {/*CE NE RECOMANDA========= */}

        < section className='recomandation container mt-5 p-3 bg-image' >
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-4 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic fw-normal">Ce ne recomanda?</h4>

              </div>
            </div >

            <div className="col col-md-8 order-md-2">
              <ul className='fw-normal'>
                <li>Vastele cunostinte juridice de specialitate</li>
                <li>Bogata experienta in domeniu</li>
                <li>Inaltul nivel de profesionalism</li>
                <li>Implicarea activa in sustinerea proiectelor</li>
                <li>Comunicarea directa si deschisa cu clientul</li>
                <li>Raspunsul rapid la nevoile clientului</li>
                <li>Furnizarea de solutii complete prin colaborarea cu alti profesionisti</li>
              </ul>

            </div>
          </div >
        </ section >










        {/*FOOTER======= */}
        < Footer />
      </div >


    </>
  )
}

export default Acasa;