import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faScaleBalanced,
  faTruck,
  faPeopleLine,
  faBriefcase,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
const Avocatura = () => {
  return (
    <>
      <div className="avocatura">
        <Helmet>
          <title>
            Servicii de Avocatura | Avocat Bucuresti | Cabinet de avocat si
            insolventa Alina Marin
          </title>
          
          <meta
            name="description"
            content="Oferim consultanță juridică și asistență specializată într-o serie de arii de practică, inclusiv drept civil, penal, executare silită, dreptul familiei, dreptul muncii, dreptul comercial și societar."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">SERVICII DE AVOCATURA</h6>
          <div className=" pt-4 text-center">
            <h5 className="fw-bold text-center pb-1">
              Servicii complete de avocatura
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-4">
              Oferim consultanță juridică și asistență specializată într-o serie
              de arii de practică
            </h6>
          </div>
          <div className="row g-5 px-5 pt-4 ">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 ">
                <div class="civil card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScaleBalanced}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DREPT CIVIL</h6>
                  <p className="card-text mx-1">
                    Servicii de consultanță juridică, asistare și reprezentare
                    în fața instanțelor de judecată, redactare cereri de chemare
                    în judecată. Vă ajutăm să rezolvați rapid problema juridică.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="criminal card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faGavel}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DREPT PENAL</h6>
                  <p className="card-text mx-1">
                    Asistență și reprezentare juridică în fața organelor de
                    urmărire penală și în fața instanțelor de judecată,
                    redactare cereri și plângeri împotriva măsurilor și actelor
                    de urmărire penală, redactare cerere de reabilitare.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="executare card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faTruck}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">EXECUTARE SILITA</h6>
                  <p className="card-text mx-1">
                    În materia executării silite, serviciile oferite sunt
                    indiferent de calitatea pe care o aveți în această procedură
                    – debitor sau creditor. Pasivitatea poate avea consecințe
                    deosebit de grave în această materie, atât pentru creditor,
                    cât și pentru debitor.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="family card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faPeopleLine}
                    size="2x"
                    className="pb-3 law-icon"
                  />
                  <h6 className="card-title pb-2">
                    DREPTUL FAMILIEI - DIVORT SI PARTAJ
                  </h6>
                  <p className="card-text mx-1">
                    Servicii de asistare și reprezentare juridică în procesele
                    de divorț, partaj, exercitarea autorității părintești,
                    pensie de întreținere, program de vizită minor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="labor card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">DREPTUL MUNCII</h6>
                  <p className="card-text mx-1">
                    Oferim servicii de avocatură profesionale, concretizate prin
                    redactarea contestației împotriva deciziei de concediere,
                    împotriva deciziei de sancționare disciplinară, obligarea
                    angajatorului la plata drepturilor de natură salarială,
                    elaborarea de opinii juridice în dreptul muncii.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100">
                <div class="business card-img-top">
                  <div class="overlay"></div>
                </div>
                <div className="card-body text-center text-white py-4">
                  <FontAwesomeIcon
                    icon={faScroll}
                    size="2x"
                    className="law-icon pb-3"
                  />
                  <h6 className="card-title pb-2">
                    DREPTUL COMERCIAL SI SOCIETAR
                  </h6>
                  <p className="card-text mx-1">
                    Înființări societăți comerciale la Registrul Comerțului,
                    schimbare sediu social, înființare/radiere punct de lucru,
                    redactare acte constitutive, hotărâri ale adunării generale
                    a asociațiilor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-4 ">
            <p className="more-services py-4">
              Alte domenii de activitate în care vă oferim consultanță, asistare
              și reprezentare în fața instanțelor de judecată sau a altor
              instituții ale statului: RECUPERARE CREANTE, PENSII SI ALTE
              DREPTURI DE ASIGURARI SOCIALE, ASOCIAȚII DE PROPRIETARI, PLÂNGERI
              CONTRAVENȚIONALE AMENZI, DESPĂGUBIRI ACCIDENTE AUTO, redactare de
              cereri precum si orice alte documente specifice activitatii.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Avocatura;
