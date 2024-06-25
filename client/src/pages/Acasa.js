import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faFileCircleCheck,
  faCommentsDollar,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const Acasa = () => {
  return (
    <>
      <div className="home-page">
        <Helmet>
          <title>
            Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin
          </title>
          
          <meta
            name="description"
            content="Cabinetul nostru de Avocat și Insolvență, condus de Alina Marin, oferă consultanță, asistență și reprezentare pentru probleme juridice sau de insolvență și recuperare de creanțe în fața instanțelor și autorităților publice."
          />
        </Helmet>
        {/* HERO=========== */}
        <div className="container-fluid">
          <div className="row">
            <div className="hero-section">
              <div className="hero-overlay"></div>
              <div className="text-container d-flex flex-column justify-content-start align-items-start pt-6 slide">
                <div className="text-1 fs-2 pb-3">ALINA MARIN</div>
                <div className="text-2 fs-4">
                  BIROU DE AVOCAT SI INSOLVENTA
                  <span className="fw-bold">
                    <br></br> Bucuresti{" "}
                  </span>
                </div>
                <div className="text-3 fst-italic fw-light">
                  "Nu este o adevărată justiție acolo unde nu există dreptate,
                  iar dreptatea nu poate fi găsită acolo unde nu există adevăr."
                  - <span>Lucius Annaeus Seneca.</span>
                </div>
              </div>
              {/* horizontal buttons */}
              <div className="horizontal-btn d-none d-md-flex justify-content-center  align-items-end w-100 h-100">
                <div className=" col flex-grow-1">
                  <Link to="/contact">
                    <button
                      id="horizontal1"
                      className="btn btn-outline-dark btn-lg  type-button p-4 w-100 fw-bold"
                      aria-label="Programare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                      </span>
                      Programare
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/contact">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Cere o evaluare"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                      </span>
                      Cere o evaluare
                    </button>
                  </Link>
                </div>
                <div className="col flex-grow-1">
                  <Link to="/informatii-utile">
                    <button
                      className="btn btn-lg btn-outline-dark type-button p-4 w-100 fw-bold"
                      aria-label="Onorarii"
                    >
                      <span className="p-3">
                        <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                      </span>
                      Onorarii
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* small screens buttons*/}
            <div className="mobile-btn d-md-none d-flex justify-content-between pt-2">
              <Link to="/contact">
                <button
                  id="small"
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Programare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
                  </span>
                  Programare
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className="btn btn-outline-dark type-button p-2 mb-1 btn-md me-1"
                  aria-label="Cere o evaluare"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faFileCircleCheck} size="1x" />
                  </span>
                  Cere o evaluare
                </button>
              </Link>
              <Link to="/informatii-utile">
                <button
                  className="btn btn-outline-dark type-button p-2 btn-md"
                  aria-label="Onorarii"
                >
                  <span className="p-3">
                    <FontAwesomeIcon icon={faCommentsDollar} size="1x" />
                  </span>
                  Onorarii
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*TE CONFRUNTI CU O PROBLEMA========= */}

        <section className="card py-5 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <h6 className="guide-text mb-4">INTRO</h6>
                <h5 className="lh-base text-center pb-4">
                  Va confruntati cu o problemă juridică sau de insolventa?
                </h5>

                <p className="text-separator fw-normal">
                  Cabinetul nostru de Avocat și Insolvență, condus de Alina
                  Marin, oferă consultanță, asistență și reprezentare pentru
                  probleme juridice sau de insolvență și recuperare de creanțe
                  în fața instanțelor și autorităților publice.
                  <br />
                  <span className="ms-4"></span>Vrem să fim alături de tine și
                  să găsim cele mai bune soluții pentru problemele tale
                  menținând în același timp imaginea ta impecabilă în lumea
                  afacerilor.
                  <span></span>
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/law-justice.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt=" a gavel, scales of justice, and law books"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICII========= */}
        <div className="">
          <div className="row">
            <div className="col">
              <div className="services-section ">
                <div className="services-overlay "></div>

                <div className="services-content container mt-3">
                  <h6 className=" guide-text">SERVICII</h6>

                  <h5 className="lh-base text-center pb-3">
                    Domenii de activitate
                  </h5>
                  <div className="row mt-3 gx-3 flex-column flex-md-row ">
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Cabinet de avocatura
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/barou.webp"
                          className="barou img-fluid mx-auto d-block rounded-2"
                          alt="sigla barou Bucuresti"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Asistenta si reprezentare juridica in domenii de drept
                        comercial, infiintari societati, drept civil, dreptul
                        muncii, dreptul familiei, procedura insolventei,
                        recuperari creante, drept administrativ etc.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/avocatura">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Afla mai multe...
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 className="color text-center pb-4">
                        Cabinet de insolventa
                      </h5>
                      <div className="d-flex align-items-center">
                        <img
                          src="/assets/unpir.webp"
                          className="unpir img-fluid mx-auto d-block rounded-2"
                          alt="sigla unpir"
                          width="150"
                          height="150"
                        />
                      </div>
                      <p className="pt-4 px-2">
                        Servicii in etapa de preinsolventa, fuziuni si divizari
                        societati comerciale, insolventa, restructurare si
                        reorganizare judiciara, faliment, lichidare judiciara si
                        administrativa, recuperari creante, evaluare si
                        valorificare active.
                      </p>
                      <div className="py-3 text-center">
                        <Link to="/insolventa">
                          <button
                            type="button"
                            className="btn btn-outline-dark mb-4"
                            aria-label="Afla mai multe"
                          >
                            Afla mai multe...
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CINE SUNTEM */}

        <section className="card py-4 px-3 border-0">
          <div className="row">
            <div className="col-lg-7">
              <div className="card-body">
                <p className="guide-text mb-4">DESPRE NOI</p>
                <h5 className="lh-base text-center pb-4">Cine suntem?</h5>

                <p className="text-separator fw-normal">
                  Vom fi partenerul dvs. in solutionarea intr- un mod
                  profesionist a tuturor problemelor comerciale, fiscale,
                  contractuale.
                  <br></br>
                  <span className="ms-4"></span>Suntem o echipa tanara de
                  avocati, practicieni in insolventa si economisti, specialist
                  in domeniul financiar – juridic, cu o noua viziune de abordare
                  si solutionare a problemelor. Ne recomanda experienta de peste
                  10 ani, profesionalismul si seriozitatea.
                  <br></br> <span className="ms-4"></span>Coordonatorul Biroului
                  de avocatura si insolventa, Marin Alina este avocat de peste
                  15 ani, in domeniul comercial, contractual etc. si practician
                  in insolventa de 8 ani, cu societati salvate de insolventa,
                  radiate, si/sau planuri de reorganizare etc
                </p>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center justify-content-center">
              <div>
                <img
                  src="/assets/about-us.webp"
                  className="intro-img img-fluid d-block rounded-2"
                  alt="two persons at a desk"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/*CE NE RECOMANDA========= */}
        <section className="recommendation p-3 bg-image m-3 px-0">
          <h6 className="guide-text ">EXPERTIZA NOASTRA</h6>
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h5 className="h-50 lh-base text-center pb-4">Ce ne recomanda?</h5>
          </div>
          <div className="row mt-4 flex-column flex-md-row mb-3">
            <div className="col col-md-7 order-md-2">
              <ul className="my-list">
                <li>Experiență vastă în domeniu</li>
                <li>
                  Profesionalism ridicat și abordare orientată spre clienți.
                </li>
                <li> Implicare activă în proiecte și sprijinirea acestora.</li>
                <li> Comunicare directă și transparentă cu clienții.</li>
                <li> Angajament față de satisfacția clienților.</li>
                <li>
                  {" "}
                  Furnizarea de solutii complete prin colaborarea cu alti
                  profesionisti.
                </li>
              </ul>
            </div>
            <div className=" col col-md-5 order-md-2 mt-5">
              <div className="square container d-flex flex-column justify-content-center align-items-center py-5 w-50 border border-white border-4 fw-bold">
                <div>
                  <FontAwesomeIcon icon={faGavel} size="2x" />
                </div>
                <div>10+</div>
                <div>ani de experienta</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acasa;
