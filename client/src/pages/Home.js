import React from 'react'
import Navbar from '../components/Navbar'
import { EnvelopeOpenFill } from 'bootstrap-icons-react';
const Home = () => {
  return (
    <>
      <section>
        {/*navbar*/}
        <Navbar />
        {/*intro*/}
        <section id="intro">
          <div class="container">
            <div class="row mt-4 gx-5 flex-column flex-md-row">
              <div class="col col-md-6 order-md-2">
                <img src="welcome-img.jpg" class="img-fluid" alt="two people signing documents" />
              </div>
              <div class="col col-md-6 order-md-1 mt-5 mt-md-0">
                <h4 class='mb-4'>Te confrunți cu o problemă juridică?</h4>
                <p>CABINET DE AVOCAT ALINA MARIN îți stă la dispoziție. Imi asum misiunea de a oferi clienților mei cele mai bune sfaturi juridice și de a lupta pentru drepturile lor legale. Am cunoștințe solide de drept, o vastă experiență și abilitățile necesare pentru a trata cu seriozitate și profesionalism toate cazurile mele. Misiunea mea este să obțin rezultate pozitive pentru clienții mei și să-i ajut să-și atingă obiectivele juridice.</p>
                <div class="btn-group">
                  <a href="#" class="btn btn-warnin" Intreaba avocatul</a>
                <a href="#" class="btn btn-secondary">072336675</a>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* more-info */}
      {/* services */}
      {/* footer */}
    </section >
    </>
  )
}

export default Home