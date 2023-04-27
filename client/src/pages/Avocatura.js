import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faScaleBalanced, faTruck, faGem, faPeopleLine, faBriefcase, faScroll, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const Avocatura = () => {
  return (
    <>
      <div>
        <Navbar />
        <section className='avocatura'>
          <img src="Slice 1.png" className="img-fluid" alt="books" />
          {/* services */}


          <div className=" pt-4 text-center">
            <h5>Domenii de activitate</h5>
            <h6>Vă asigurăm servicii juridice în diverse domenii ale dreptului la standarde profesionale.</h6>
          </div>

          <div className="row g-5 px-5 pt-5 ">

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faScaleBalanced} size='2x' className='pb-3' />
                  <h6 className="card-title">DREPT CIVIL</h6>

                  <p className="card-text mx-1">Servicii de consultanță juridică, asistare și
                    reprezentare în fața instanțelor de judecată, redactare cereri de chemare
                    în judecată. Vă ajutăm să rezolvați rapid problema juridică.</p>
                </div>

              </div>
            </div>





            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faGavel} size='2x' className='pb-3' />
                  <h6 className="card-title">DREPT PENAL</h6>
                  <p className="card-text mx-1">Asistență și reprezentare juridică în fața organelor de urmărire
                    penală și în fața instanțelor de judecată, redactare cereri și plângeri împotriva măsurilor și
                    actelor de urmărire penală, redactare cerere de reabilitare.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faTruck} size='2x' className='pb-3' />
                  <h6 className="card-title">EXECUTARE SILITA</h6>
                  <p className="card-text mx-1">În materia executării silite, serviciile oferite sunt indiferent de calitatea pe care o aveți în această procedură – debitor sau creditor. Pasivitatea poate avea consecințe deosebit de grave în această materie, atât pentru creditor, cât și pentru debitor.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className='card-body text-center py-4'>
                  <FontAwesomeIcon icon={faPeopleLine} size='2x' className='pb-3' />
                  <h6 className="card-title">DREPTUL FAMILIEI - DIVORT SI PARTAJ</h6>
                  <p className="card-text mx-1">Servicii de asistare și reprezentare juridică în procesele de divorț, partaj, exercitarea autorității părintești, pensie de întreținere, program de vizită minor.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faBriefcase} size='2x' className='pb-3' />
                  <h6 className="card-title">DREPTUL MUNCII</h6>
                  <p className="card-text mx-1">Oferim servicii de avocatură profesionale, concretizate prin redactarea contestației împotriva deciziei de concediere, împotriva deciziei de sancționare disciplinară, obligarea angajatorului la plata drepturilor de natură salarială, elaborarea de opinii juridice în dreptul muncii.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top" >
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center py-4">
                  <FontAwesomeIcon icon={faScroll} size='2x' className='pb-3' />
                  <h6 className="card-title">DREPTUL COMERCIAL SI SOCIETAR</h6>
                  <p className="card-text mx-1">Înființări societăți comerciale la Registrul Comerțului, schimbare sediu social, înființare/radiere punct de lucru, redactare acte constitutive, hotărâri ale adunării generale a asociațiilor.</p>
                </div>
              </div>
            </div>


          </div>
          <p className='text-light'>Alte domenii de activitate în care vă oferim consultanță, asistare și reprezentare în fața instanțelor de judecată sau a altor instituții ale statului:RECUPERARE CREANTE, PENSII SI ALTE DREPTURI DE ASIGURARI SOCIALE, ASOCIAȚII DE PROPRIETARI, PLÂNGERI CONTRAVENȚIONALE AMENZI, DESPĂGUBIRI ACCIDENTE AUTO.</p>
        </section >
        <Footer />
      </div >
    </>
  )
}
export default Avocatura;