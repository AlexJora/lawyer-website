import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Insolventa = () => {
  return (
    <>
      <div className="insolventa-page">
        <Helmet>
          <title>
            Servicii de Insolventa | Avocat Bucuresti | Cabinet de avocat si
            insolventa Alina Marin
          </title>
          
          <meta
            name="description"
            content="Oferim servicii de consultanță și reprezentare în procedurile de insolvență, inclusiv lichidare judiciara, redactare de cereri de deschidere a procedurii de insolventa, analiză a societatilor debitoare, infiintare societati, recuperare de creante, consultanta juridica și asistenta în aplicarea și executarea reglementarilor legale."
          />
        </Helmet>
        <div>
          <h6 className="guide-text ms-3 mt-4">SERVICII DE INSOLVENTA</h6>
          <div className="container py-5">
            <h5 className="fw-bold text-center pb-1">
              Servicii de consultanță și reprezentare în insolvență
            </h5>
            <h6 className="fw-bold subtitle lh-lg text-center px-5 pb-5">
              Oferim asistență specializată în procedurile de insolvență, de la
              evaluarea opțiunilor disponibile și până la finalizarea procesului
            </h6>

            <div className="card">
              <div className="insolvency card-img-top2"></div>
              <div className="card-body">
                <div className="card-text text-white py-5">
                  <ul className="my-list pt-3">
                    <li>Lichidare judiciara / procedura falimentului;</li>
                    <br></br>
                    <li>
                      Redactare actiuni avand ca obiect cereri de deschidere a
                      procedurii de insolventa si reprezentarea clientului in
                      fata instantelor de judecata, pentru debitorii
                      comunicati/aprobat de UAT;
                    </li>
                    <br></br>
                    <li>
                      Intocmirea unei situatii de analiză a societatilor
                      debitoare prin verificare recom si buletinul procedurilor
                      de insolventa (exista abonament BPI), scopul verificarii
                      fiind de a identifica societatile care au intrat in
                      procedura insolventei.
                    </li>
                    <br></br>
                    <li>Infiintare Societati, filiale, puncte de lucru.</li>
                    <br></br>
                    <li>
                      Modificarea capitalului social, conversia creantelor in
                      actiuni, analiza cerintelor legale privind fuziunea,
                      desfiintarea, divizarea, dizolvarea societatilor;
                    </li>
                    <br></br>
                    <li>
                      Contracte comerciale si rezolvarea tuturor problemelor
                      contractuale
                    </li>
                    <br></br>
                    <li>
                      Recuperarea de creante:
                      <br></br>Notificari, Somatii de plata, Cerere cu valoare
                      redusa
                      <br></br>Declaratii de creanta
                      <br></br>Reprezentarea clientilor atat in fata instantelor
                      de judecata de drept comun, cat si in fata instantelor
                      specializate
                    </li>
                    <br></br>
                    <li>
                      Intocmire de rapoarte lunare privind activitatea
                      desfasurata
                    </li>
                    <br></br>
                    <li>
                      Analiza, intocmire si avizare raspunsuri catre petenti.
                    </li>
                    <br></br>
                    <li>
                      Analiza, intocmire si avizare notificari/adrese catre
                      persoane fizice/persoane juridice.
                    </li>
                    <br></br>
                    <li>
                      Analiza si avizare de alte acte juridice cu conotatie
                      juridica.
                    </li>
                    <br></br>
                    <li>
                      Redactare de cereri precum si orice alte documente
                      specifice activitatii avocatului.
                    </li>
                    <br></br>
                    <li>
                      Consultanta si asistenta juridica privitoare la modul de
                      aplicare si executare a reglementarilor legale .
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="link">
                  <button
                    className="btn btn-outline-dark my-4"
                    type="button"
                    aria-label="Cere o evaluare"
                  >
                    Cere o evaluare
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insolventa;
