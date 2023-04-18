import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Prezentare = () => {
  return (
    <>
      <Navbar />
      {/* banner */}
      <div style={{ backgroundColor: 'gray', width: '100', height: '4rem', color: 'white' }}> PREZENTARE</div>

      <section id="intro" class="bg-light mt-5">
        <div class="container">
          <div class="row mt-4 gx-5 flex-column flex-md-row">
            <div class="col col-md-6 order-md-2">
              <img src="welcome-img.jpg" class="img-fluid" alt="two people signing documents" />
            </div>
            <div class="col col-md-6 order-md-1 mt-5 mt-md-0">
              <h4 class='mb-4'></h4>
              <p></p>

            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Prezentare;