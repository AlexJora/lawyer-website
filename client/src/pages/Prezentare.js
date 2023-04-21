import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Prezentare = () => {
  return (
    <>
      <Navbar />
      {/* banner */}
      <section>
        <div style={{ backgroundColor: '#c2b697', width: '100rem', height: '4rem', color: 'white', marginTop: '7rem' }}> PREZENTARE</div>
      </section>


      <Footer />
    </>
  )
}

export default Prezentare;