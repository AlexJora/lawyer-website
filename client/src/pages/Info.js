import React from "react";
import { Helmet } from "react-helmet";

const Info = () => {
  return (
    <div className="info">
      <Helmet>
        <title>Informatii Utile | Avocat Bucuresti | Cabinet de avocat si insolventa Alina Marin</title>
        
        <meta
          name="description"
          content="Informatii utile despre cabinetul de avocatura si insolventa Alina Marin."
        />
      </Helmet>
      <div>
        <h6 className="guide-text ms-3 mt-4">INFORMATII UTILE</h6>
        <div className="container py-5">
          <div id="accordion" className="accordion">
            {/* onorariul========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  ONORARIUL
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <h5>Principiile Generale:</h5>
                  <p>
                    {" "}
                    Onorariul avocatului se stabileste tinand cond de
                    prevederile Statutului profesiei de avocat. Texte extrase
                    din: Statut 2004 - Statut al profesiei de avocat, 25/09/2004
                    Publicat in Monitorul Oficial, Partea I nr. 45 din
                    13/01/2005 intrat in vigoare la data de 13 ianuarie 2005;
                    Capitolul III Activitatea profesionala a avocatului;
                    Sectiunea a 2-a Relatiile dintre avocat si client;
                  </p>
                  <h5>Onorarii pentru persoane juridice:</h5>
                  <p>
                    În stabilirea onorariilor pentru persoane juridice avem în
                    vedere, pe lângă principiile prezentate mai jos,
                    posibilitatea de a dezvolta modalităţile de plată a
                    onorariilor sub diferite aspecte cum sunt:
                  </p>
                  <ul>
                    <li>onorariul fix</li>
                    <li>onorariul per ora</li>
                    <li>onorariul fix de rezultat</li>
                    <li>onorariul procentual de rezultat</li>
                    <li>abonamentul lunar</li>
                  </ul>
                  <h5>Onorarii pentru persoane fizice:</h5>
                  <p>
                    In stabilirea onorariilor pentru persoane fizice cabinetul
                    de avocatură promovează, în vederea stabilirii onorariului,
                    principiul negocierii directe, principiu care are la bază
                    urmatoarele criterii :
                  </p>
                  <ul>
                    <li>
                      complexitatea cauzei şi nivelul de pregătire profesională
                      al avocatului care realizează activitatea;
                    </li>
                    <li>urgenţa activităţii;</li>
                    <li>cauza si posibilităţile clienţilor;</li>
                    <li> istoricul colaborarii cu clientul.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 2.insolventa========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Insolventa
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Insolventa este acea situatie in care societatea se afla in
                    imposibilitatea de a-si mai plati datoriile catre diversi
                    creditori – furnizori, ANAF sau banci.
                  </p>
                  <p>
                    Legea 85/2014 o descrie ca fiind „o stare a patrimoniului
                    debitorului care se caracterizeaza prin insuficienta
                    fondurilor banesti disponibile pentru plata datoriilor
                    certe, lichide si exigibile”.{" "}
                  </p>
                  <p>
                    {" "}
                    Insolventa, nu inseamna automat faliment,aceasta poate fi
                    deschisa si in vederea reorganizarii societatii pe baza unui
                    plan care poate conduce la redresarea afaceri si iesirea din
                    insolventa.Doar in momentul in care reorganizarea da gres,
                    se poate declansa falimentul.
                  </p>
                </div>
              </div>
            </div>
            {/* 3.reorganizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Reorganizarea
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Reoganizarea societatii inseamna redresarea acesteia sub
                    umbrela Legii Insolventei.
                  </p>

                  <p>
                    Scopul insolventei nu este de a ajunge la faliment si de a
                    inchide societatea, ci de a o ajuta sa se redreseze dupa un
                    plan stabilit. Practic, se va deschide o procedura de
                    insolventa generala cu intentia de a reorganiza societatea
                    dupa un plan de reorganizare. Potrivit dispozițiilor art. 5
                    pct. 54. din Legea nr. 85/2014, reorganizarea este
                    „procedura ce se aplica debitorului in insolventa, persoana
                    juridica, in vederea achitarii datoriilor acestuia, conform
                    programului de plata a creanțelor.
                  </p>

                  <p>
                    Planul de reorganizare presupune intocmirea, aprobarea,
                    confirmarea, implementarea și respectarea unui plan, care
                    poate sa prevada:
                  </p>
                  <ul>
                    <li>
                      restructurarea operaționala si/sau financiara a
                      debitorului;
                    </li>
                    <li>
                      restructurarea corporativa prin modificarea structurii de
                      capital social;
                    </li>
                    <li>
                      restrangerea activitații prin lichidarea parțiala sau
                      totala a activului din averea debitorului;
                    </li>
                  </ul>
                  <p>
                    Pentru aceasta procedura, importanta deosebita prezinta,
                    pentru participanți, programul de plata a creanțelor.
                  </p>
                  <p>
                    Creditorii trebuie sa cunoasca ce sume vor primi din
                    creantele pe care le detin impotriva averii debitorului și
                    cand li se vor plati pentru a‑si face propria analiza
                    economica.
                  </p>
                  <p>
                    Prin pct. 53. din art. 5 se definește programul de plata a
                    creanțelor ca fiind „graficul de achitare a acestora
                    mentionat in planul de reorganizare. Doar in cazul in care
                    acest plan de reorganizare si salvare a societatii esueaza,
                    se va trece la procedura de faliment.
                  </p>
                </div>
              </div>
            </div>
            {/* 4.falimentul========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Falimentul
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Falimentul intervine ca o ultima solutie atunci cand
                    redresarea si planul de reorganizare nu mai sunt posibile.
                  </p>
                  <p>
                    Falimentul este a doua etapa a procedurii de insolventa care
                    se aplica debitorului in vederea lichidarii averii acestuia
                    pentru acoperirea pasivului, urmata de radierea debitorului
                    din registrul in care este inmatriculat.
                  </p>
                  <p>
                    Daca se constata ca nu exista bunuri in patrimoniul
                    debitorului sau ca acestea sunt insuficiente pentru a
                    acoperi cheltuielile administrative, se poate da o hotarare
                    prin care se dispune radierea societatii.
                  </p>
                  <p>
                    Prin hotararea prin care se decide intrarea in faliment,
                    judecatorul-sindic va pronunta dizolvarea debitorului
                    persoana juridica si va dispune:
                  </p>
                  <ul>
                    <li>Ridicarea dreptului de administrare al debitorului;</li>
                    <li>
                      Desemnarea unui lichidator juridic in cazul procedurii
                      generale;
                    </li>
                    <li>Lichidarea bunurilor din averea firmei;</li>
                    <li>Radierea societatii.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 5.dizolvarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Dizolvarea
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Inseamna incetarea a activității societatii comerciale,
                    adica firma nu mai poate emite facturi pentru activitati
                    prevazute în obiectului de activitate, ci se pregateste doar
                    pentru lichidarea patrimoniului
                  </p>
                </div>
              </div>
            </div>
            {/* 6.lichidarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Lichidarea
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Lichidarea unei firme reprezinta totalitatea operatiunilor
                    care au ca scop finalizarea operatiunilor comerciale aflate
                    în curs la data dizolvarii societatii, transformarea
                    bunurilor societatii in lichiditati, plata datoriilor
                    acesteia, precum si impartirea activului net intre asociati.
                    Dupa ramanerea definitiva a hotararii judecatoreşti de
                    dizolvare, Oficiul National al Registrului Comertului, la
                    cererea societatii, numeste, un lichidator judiciar inscris
                    in Tabloul practicienilor in insolventa.
                  </p>
                </div>
              </div>
            </div>
            {/* 7.radierea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Radierea
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Radierea presupune incetarea deplina a capacitatii de
                    folosinta a societatii comerciale. Un aspect de retinut, in
                    cazul radierii, este ca aceasta nu presupune eliminarea
                    inregistrarii anterioare, ci doar consemnarea incetarii
                    activitatii sale.
                  </p>
                </div>
              </div>
            </div>
            {/* 8.fuziunea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Fuziunea
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Fuziunea este operatia prin care una sau mai multe societati
                    sunt dizolvate fara a intra în lichidare si transfera
                    totalitatea patrimoniului lor unei alte societati in
                    schimbul repartizarii catre actionarii societatii.
                  </p>
                </div>
              </div>
            </div>
            {/* 9.divizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  id="accordion-btn"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Divizarea
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordion"
              >
                <div className="accordion-body">
                  <p>
                    Divizarea este operatia prin care o societate, dupa ce este
                    dizolvata fara a intra în lichidare, transfera mai multor
                    societati totalitatea patrimoniului sau, in schimbul
                    repartizarii catre actionarii societatii divizate de actiuni
                    la societatile beneficiare.
                  </p>
                  <h5>Etapele procesului de Fuziune sau Divizare:</h5>
                  <h6>Etapa 1</h6>
                  <ul>
                    <li>
                      Depunerea proiectului de fuziune și hotararea adunarii
                      generale a societatii participante la fuziune ( prin care
                      se renunță la examinarea proiectului){" "}
                    </li>
                  </ul>
                  <h6>Etapa 2</h6>
                  <ul>
                    <li>
                      Hotararile adunarilor generale ale asociatilor fiecareia
                      din societatile participante privind aprobarea fuziunii
                    </li>
                    <li>
                      Actul constitutiv al societatii absorbante actualizat
                      conform modificarilor intervenite
                    </li>
                    <li>
                      Dovada publicarii in Monitorul Oficial al Proiectului de
                      fuziune.
                    </li>
                    <li>Situatia financiara de fuziune</li>
                    <li>Informatii din cazierul fiscal </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
