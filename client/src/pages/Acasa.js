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
        <section className='problem container mt-5 p-3'>
          <div className="row mt-4 gx-3 flex-column flex-md-row">
            <div className="col col-md-5 order-md-2">
              <div className="d-flex align-items-center">
                <div className="decorative-line"></div>
                <h4 className="h-50 lh-base">Te confrunți cu o problemă juridică?</h4>
              </div>
            </div >
            <div className="col col-md-7 order-md-2">
              <p className='text-separator'><span className='fst-italic fs-3'>C</span>ABINET DE AVOCAT ALINA MARIN îți stă la dispoziție. Imi asum misiunea de a oferi clienților mei cele
                mai bune sfaturi juridice și de a lupta pentru drepturile lor legale. Am cunoștințe solide de drept, o
                vastă experiență și abilitățile necesare pentru a trata cu seriozitate și profesionalism toate cazurile
                mele. Misiunea mea este să obțin rezultate pozitive pentru clienții mei și să-i ajut să-și atingă
                obiectivele juridice.</p>
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
                <p>CABINET DE AVOCAT ALINA MARIN îți stă la dispoziție. Imi asum misiunea de a oferi clienților mei cele mai bune sfaturi juridice și de a lupta pentru drepturile lor legale. Am cunoștințe solide de drept, o vastă experiență și abilitățile necesare pentru a trata cu seriozitate și profesionalism toate cazurile mele. Misiunea mea este să obțin rezultate pozitive pentru clienții mei și să-i ajut să-și atingă obiectivele juridice.</p>

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