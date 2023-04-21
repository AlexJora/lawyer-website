import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const Insolventa = () => {
  return (
    <>
      <div>

        <Navbar />
        <section>
          <div style={{ backgroundColor: '#c2b697', height: '3rem', color: ' #272B2E', marginTop: '5.5rem', textAlign: "center" }}> Servicii de insolventa</div>
        </section>
        <section>
          <img src="insolvency.png" className="img-fluid" alt="books" />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Insolventa