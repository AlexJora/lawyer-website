import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <>
      <section>
        {/*navbar*/}
        <Navbar />
        {/* welcome */}
        <section >

          <img src='welcome-img.jpg' class="img-fluid" alt='welcome' />
          <p>În calitate de avocat, îmi asum misiunea de a oferi clienților mei cele mai bune sfaturi juridice și de a lupta pentru drepturile lor legale. Am cunoștințe solide de drept, o vastă experiență și abilitățile necesare pentru a trata cu seriozitate și profesionalism toate cazurile mele. Mă concentrez pe practica diversificată, comunicarea eficientă cu clienții și obținerea soluțiilor prompte și eficiente. Misiunea mea este să obțin rezultate pozitive pentru clienții mei și să-i ajut să-și atingă obiectivele juridice.</p>

        </section>
        {/* more-info */}
        {/* services */}
        {/* footer */}
      </section>
    </>
  )
}

export default Home