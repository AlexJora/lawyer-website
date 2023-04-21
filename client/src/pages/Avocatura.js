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
        <section>
          <div style={{ backgroundColor: '#c2b697', height: '3rem', color: ' #272B2E', marginTop: '5.5rem', textAlign: "center" }}> Avocatura - domenii de practica</div>
        </section>
        <section>
          <img src="books 1.png" className="img-fluid" alt="books" />
          {/* services */}
          <section id="services" className="bg-light mt-5 ">
            <div className="container-lg">
              <div className="text-center">
                <h5>Domenii de activitate</h5>
                <h6 className="text-muted">Vă asigurăm servicii juridice în diverse domenii ale dreptului la standarde profesionale.</h6>
              </div>
              <div className="row  my-5 g-3 align-items-center">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faScaleBalanced} />
                      <h6 className="card-title">DREPT CIVIL</h6>

                      <p className="card-text mx-1 text-muted">Servicii de consultanță juridică, asistare și reprezentare în
                        fața instanțelor de judecată, redactare cereri de chemare în judecată. Vă ajutăm să rezolvați
                        rapid problema juridică.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">

                      <FontAwesomeIcon icon={faGavel} />


                      <h6 className="card-title">DREPT PENAL</h6>
                      <p className="card-text mx-1 text-muted">Asistență și reprezentare juridică în fața organelor de urmărire penală și în fața instanțelor de judecată, redactare cereri și plângeri împotriva măsurilor și actelor de urmărire penală, redactare cerere de reabilitare.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faTruck} />
                      <h6 className="card-title">EXECUTARE SILITA</h6>
                      <p className="card-text mx-1 text-muted">În materia executării silite, serviciile oferite sunt indiferent de calitatea pe care o aveți în această procedură – debitor sau creditor. Pasivitatea poate avea consecințe deosebit de grave în această materie, atât pentru creditor, cât și pentru debitor.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faGem} />
                      <h6 className="card-title">RECUPERARE CREANTE</h6>
                      <p className="card-text mx-1 text-muted">Asistență și reprezentare juridică atât în cadrul demersurilor judiciare privind recuperarea creanțelor – acțiuni civile în procedura de drept comun, cereri cu valoare redusă sau ordonanțe de plată, fie pe cale amiabilă.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faPeopleLine} />
                      <h6 className="card-title">DREPTUL FAMILIEI - DIVORT SI PARTAJ</h6>
                      <p className="card-text mx-1 text-muted">Servicii de asistare și reprezentare juridică în procesele de divorț, partaj, exercitarea autorității părintești, pensie de întreținere, program de vizită minor.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faBriefcase} />
                      <h6 className="card-title">DREPTUL MUNCII</h6>
                      <p className="card-text mx-1 text-muted">Oferim servicii de avocatură profesionale, concretizate prin redactarea contestației împotriva deciziei de concediere, împotriva deciziei de sancționare disciplinară, obligarea angajatorului la plata drepturilor de natură salarială, elaborarea de opinii juridice în dreptul muncii.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faScroll} />
                      <h6 className="card-title">DREPTUL COMERCIAL SI SOCIETAR</h6>
                      <p className="card-text mx-1 text-muted">Înființări societăți comerciale la Registrul Comerțului, schimbare sediu social, înființare/radiere punct de lucru, redactare acte constitutive, hotărâri ale adunării generale a asociațiilor.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card">
                    <div className="card-body text-center py-4">
                      <FontAwesomeIcon icon={faMoneyBill1Wave} />
                      <h6 className="card-title">PENSII SI ALTE DREPTURI DE ASIGURARI SOCIALE</h6>
                      <p className="card-text mx-1 text-muted">Consultanță juridică, analizarea documentelor, redactarea contestației la decizia de pensionare, asistență și reprezentare în fața instanțelor de judecată.</p>
                      <a href="#">
                        Citeste mai mult...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>Alte domenii de activitate în care vă oferim consultanță, asistare și reprezentare în fața instanțelor de judecată sau a altor instituții ale statului: RECUPERĂRI CREANȚE, ASOCIAȚII DE PROPRIETARI, PLÂNGERI CONTRAVENȚIONALE AMENZI, DESPĂGUBIRI ACCIDENTE AUTO.</p>
            </div>
          </section>


        </section>
        <Footer />
      </div>
    </>
  )
}
export default Avocatura;