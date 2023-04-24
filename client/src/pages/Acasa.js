import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faAngleUp, faCalendarCheck, faFileCircleCheck, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Acasa = () => {
  return (
    <>
      <section>
        {/*NAVBAR=========*/}
        <Navbar />

        {/* HERO=========== */}
        <section>
          <div className='hero-wraper'>
            <img src="hero.jpg" className="img-fluid" alt="books" />
            <div className='message hl-lg d-flex justify-content-start align-items-start'>
              <div>
                <h2 style={{ fontSize: '2.3rem' }}>ALINA MARIN</h2>
                <h4>BIROU DE AVOCATURA SI INSOLVENTA -<span style={{ color: '#c2b697', fontStyle: 'italic' }}> Bucuresti</span></h4>
                <h6 style={{ fontStyle: 'italic', fontSize: '1rem', paddingTop: '1.5rem', lineHeight: '2', fontWeight: 'normal', width: '80%' }} >"Nu este o adevărată justiție acolo unde nu există dreptate, iar dreptatea nu poate fi găsită acolo unde nu există adevăr." - Lucius Annaeus Seneca.</h6>
              </div>
            </div>

            {/* HORIZONTAL */}
            <div className="d-none d-md-flex hero-buttons gap-0 justify-content-center align-items-end w-100 h-100">
              <div className="col flex-grow-1">
                <button className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fst-italic"><span className='p-3' ><FontAwesomeIcon icon={faCalendarCheck} /></span>Solicita o programare</button>
              </div>
              <div className="col flex-grow-1">
                <button className="btn btn-lg btn-outline-dark type-button p-4 w-100 fst-italic"><span className='p-3' ><FontAwesomeIcon icon={faFileCircleCheck} /></span>Cere o evaluare</button>
              </div>
              <div className="col flex-grow-1">
                <button className="btn btn-lg btn-outline-dark type-button p-4 w-100 fst-italic"><span className='p-3' ><FontAwesomeIcon icon={faCommentsDollar} /></span>Onorarii
                </button>
              </div>
            </div>
            {/* VERTICAL */}
            <div className="d-md-none d-flex flex-column align-items-center mt-3 gap-1">
              <button className="btn btn-outline-dark type-button p-3 w-100 mb-3 btn-sm">Solicita o programare</button>
              <button className="btn btn-outline-dark type-button p-3 w-100 mb-3 btn-sm">Cere o evaluare</button>
              <button className="btn btn-outline-dark type-button p-3 w-100 btn-sm">Onorarii</button>
            </div>
          </div>
        </section>
        {/*TE CONFRUNTI CU O PROBLEMA========= */}
        < section className='problem container mt-5 p-1' >
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-4 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic fw-normal">Te confrunți cu o problemă juridică sau de insolventa?</h4>
              </div>
            </div >
            <div className="col col-md-8 order-md-2">
              <p className='text-separator fw-light'><span className='fst-italic fs-3 fw-normal'>C</span>abinetul nostru de Avocatură și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice. Vrem să fim alături de tine și să găsim cele mai bune soluții pentru problemele tale menținând în același timp imaginea ta impecabilă în lumea afacerilor.</p>
            </div>
          </div >
        </ section>



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
        </ section>













        {/*DOMENII DE PRACTICA========= */}
        < section className='services container mt-5 p-1' >
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-4 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic fw-normal">Domenii de practica</h4>
              </div>
            </div >
            <div className="col col-md-8 order-md-2">
              <div className="row mt-1 gx-3 flex-column flex-md-row text-separator">
                <div className='col col-md-6 fw-light'>
                  <h5 className='mb-4 text-center fw-light'>Cabinet de avocatura</h5>
                  <img src="barou.jpg" className="img-fluid mx-auto d-block" alt="sigla barou" style={{ maxWidth: '120px' }} />
                  <p className='pt-3'>Asistenta si reprezentare juridica in domenii de drept comercial, infiintari societati, drept civil, dreptul muncii, dreptul familiei, proprietete intelectuala, procedura insolventei, recuperari creante, drept administrativ, asociatii si fundatii, etc.</p>
                </div>
                <div className='col col-md-6  fw-light'>
                  <h5 className='mb-4 text-center fw-light'>Cabinet de insolventa</h5>

                  <img src="unpir.jpg" className="img-fluid mx-auto d-block" alt="sigla unpir" style={{ maxWidth: '120px' }} />
                  <p className='pt-3'>Servicii in etapa de preinsolventa, fuziuni si divizari societati comerciale, insolventa, restructurare si reorganizare judiciara, faliment, lichidare judiciara si administrativa, recuperari creante, evaluare si valorificare active.</p>
                </div>
              </div>
            </div>
          </div >
        </ section>



        {/* <section className="hero-wrap">
          <div className="overlay">
            <div className="content-wrap">
              <div className="left-box"> */}

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
        </ section>


        {/* </div>

            </div>
          </div>
        </section> */}





        {/*CE NE RECOMANDA========= */}
        {/* <section className='recomandation container mt-5 p-3'>
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-4 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic fw-normal">Ce ne recomanda?</h4>
              </div>
            </div >

            <div className="col col-md-8 order-md-2">
              <ul className='fw-light'>
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
        </section > */}

        {/*FOOTER======= */}
        < Footer />
      </section >

    </>
  )
}

export default Acasa;