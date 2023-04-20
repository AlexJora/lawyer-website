import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Acasa = () => {
  return (
    <>
      <section>
        {/*navbar*/}
        <Navbar />
        {/* banner */}

        {/*intro*/}
        {/* style={{ height: '30rem' }} */}
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
        <section id="intro" className="bg-light mt-5">
          <div className="container">
            <div className="row mt-4 gx-5 flex-column flex-md-row">
              <div className="col col-md-6 order-md-2">
                <img src="welcome-img.jpg" className="img-fluid" alt="two people signing documents" />
              </div>
              <div className="col col-md-6 order-md-1 mt-5 mt-md-0">
                <h4 className='mb-4'>Te confrunți cu o problemă juridică?</h4>
                <p>CABINET DE AVOCAT ALINA MARIN îți stă la dispoziție. Imi asum misiunea de a oferi clienților mei cele mai bune sfaturi juridice și de a lupta pentru drepturile lor legale. Am cunoștințe solide de drept, o vastă experiență și abilitățile necesare pentru a trata cu seriozitate și profesionalism toate cazurile mele. Misiunea mea este să obțin rezultate pozitive pentru clienții mei și să-i ajut să-și atingă obiectivele juridice.</p>
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-secondary">SUNA ACUM</button>
                  <button type="button" className="btn btn-outline-secondary">LISTA SERVICII</button>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* footer */}
        <Footer />
      </section >
    </>
  )
}

export default Acasa;