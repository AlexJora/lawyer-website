import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Acasa = () => {
  return (
    <>
      <section>
        {/*NAVBAR=========*/}
        <Navbar />
        {/*BANNER========= */}
        <section>
          <div style={{ backgroundColor: '#c2b697', height: '3rem', color: ' #272B2E', marginTop: '5.5rem', textAlign: "center" }}> Cabinet de avocatura si insolventa BUCURESTI</div>
        </section>
        {/* HERO=========== */}
        <section>
          <div className='wraper'>
            <img src="hero.jpg" className="img-fluid" alt="books" />
            <div className='message'>
              <p>--Cabinet de avocatura si insolventa - Bucuresti</p>
              <h4>Orice persoana are dreptul </h4>
              <h4>la un proces echitabil</h4>
            </div>
          </div>
        </section>


        {/*TE CONFRUNTI CU O PROBLEMA========= */}
        <section className='problem container mt-5 p-1'>
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-5 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base fst-italic">Te confrunți cu o problemă juridică sau de insolventa?</h4>
              </div>
            </div >
            <div className="col col-md-7 order-md-2">
              <p className='text-separator fw-light'><span className='fst-italic fs-3'>C</span>abinetul nostru de Avocatură și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice. Vrem să fim alături de tine și să găsim cele mai bune soluții pentru problemele tale menținând în același timp imaginea ta impecabilă în lumea afacerilor.</p>
            </div>
          </div >
        </section >






        {/*CINE SUNTEM========== */}
        < section id="intro" className="bg-light mt-5" >
          <div className="container">
            <div className="row mt-4 gx-5 flex-column flex-md-row">
              <div className="col col-md-6 order-md-2">
                <img src="welcome-img.jpg" className="img-fluid" alt="two people signing documents" />
              </div>
              <div className="col col-md-6 order-md-1 mt-5 mt-md-0">
                <h4 className='mb-4'>Cine suntem?</h4>
                <p>Suntem o echipă tânără și dinamică de avocați și specialiști în insolvență și domeniul financiar-juridic. Cu o experiență de peste 10 ani în acest domeniu, oferim servicii de consultanță, asistență și reprezentare în fața instanțelor și autorităților publice. Ne-am propus să găsim cele mai bune soluții pentru problemele tale comerciale, fiscale și contractuale, într-un mod profesionist și benefic pentru imaginea ta în lumea afacerilor. Contactează-ne și vom fi partenerul tău de încredere în rezolvarea tuturor problemelor tale.

                  pozitii din care a promovat cele mai eficiente solutii pentru apararea intereselor clientilor, implicandu-se activ in reusita diverselor proiecte derulate, dovedind astfel temeinice cunostinte juridice si o buna comunicare cu clientii.
                  Coordonatorul cabinetului este membru titular definitiv al Baroului Bucuresti din anul 2006 si al Filialei Bucuresti a Uniunii Nationale a Practicienilor in Insolventa din Romania din anul 2016.
                </p>

              </div>
            </div>
          </div>







          {/*CE NE RECOMANDA========= */}
          <section className='problem container mt-5 p-3'>
            <div className="row mt-4 gx-3 flex-column flex-md-row">
              <div className="col col-md-5 order-md-2">
                <h4>Ce ne recomanda?</h4>
              </div >
              <div className="col col-md-7 order-md-2">
                <ul>
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
          </section >


          {/*ARII DE ACTIVITATE========== */}
          < section id="intro" className="bg-light mt-5" >
            <div className="container">
              <div className="row mt-4 gx-5 flex-column flex-md-row">
                <div className="col col-md-6 order-md-2">
                  <h4 className='mb-4'>Cabinet de insolventa</h4>
                  <p>Servicii in etapa de preinsolventa, fuziuni si divizari societati comerciale, insolventa, restructurare si reorganizare judiciara, faliment, lichidare judiciara si administrativa, recuperari creante, evaluare si valorificare active.</p>
                </div>
                <div className="col col-md-6 order-md-1 mt-5 mt-md-0">
                  <h4 className='mb-4'>Cabinet de avocatura</h4>
                  <p>Asistenta si reprezentare juridica in domenii de drept comercial, infiintari societati, drept civil, dreptul muncii, dreptul familiei, proprietete intelectuala, procedura insolventei, recuperari creante, drept administrativ, asociatii si fundatii, etc.</p>
                </div>
              </div>
            </div>
          </ section>


          {/*FOOTER======= */}
          < Footer />
        </section >
      </section>
    </>
  )
}

export default Acasa;