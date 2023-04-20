
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Domenii = () => {
  return (
    <>
      <Navbar />
      <section>
        {/* banner */}
        <div style={{ backgroundColor: 'gray', width: '100', height: '4rem', color: 'white' }}> DOMENII DE ACTIVITATE </div>
        <img src='books.jpg' className="img-fluid" alt='books' />
      </section>
      <Footer />
    </>
  )
}

export default Domenii;