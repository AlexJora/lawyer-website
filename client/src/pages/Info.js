import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Info = () => {
  return (
    <>
      <Navbar />
      <section className='info'>
        <div className='container'>
          <h6 className='guide-text pt-4 pb-5 text-center' >INFORMATII UTILE</h6>
          <div id="accordion" className="accordion pb-5">

            {/* onorariul========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button id='accordion-btn' className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ONORARIUL
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <h5>Onorarii pentru persoane juridice</h5>
                  <p>În stabilirea onorariilor pentru persoane juridice avem în vedere, pe lângă principiile prezentate mai jos, posibilitatea de a dezvolta modalităţile de plată a onorariilor sub diferite aspecte cum sunt:</p>
                  <ul>
                    <li>onorariul fix</li>
                    <li>onorariul per ora</li>
                    <li>onorariul fix de rezultat</li>
                    <li>onorariul procentual de rezultat</li>
                    <li>abonamentul lunar</li>
                  </ul>
                  <h5>Onorarii pentru persoane fizice</h5>
                  <p>In stabilirea onorariilor pentru persoane fizice cabinetul de avocatură promovează, în vederea stabilirii onorariului, principiul negocierii directe, principiu care are la bază urmatoarele criterii :</p>
                  <ul>
                    <li>complexitatea cauzei şi nivelul de pregătire profesională al avocatului care realizează activitatea;</li>
                    <li>urgenţa activităţii;</li>
                    <li>cauza si posibilităţile clienţilor;</li>
                    <li> istoricul colaborarii cu clientul.</li>

                  </ul>
                  <h5>Principiile Generale</h5>
                  <p> Onorariul avocatului se stabileste tinand cond de prevederile Statutului profesiei de avocat.
                    Texte extrase din: Statut 2004 - Statut al profesiei de avocat, 25/09/2004 Publicat in Monitorul Oficial, Partea I nr. 45 din 13/01/2005 intrat in vigoare la data de 13 ianuarie 2005;
                    Capitolul III Activitatea profesionala a avocatului;
                    Sectiunea a 2-a Relatiile dintre avocat si client;</p>
                </div>
              </div>
            </div>
            {/* insolventa========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button id='accordion-btn' className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Ce este insolventa?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Insolventa este acea situatie in care societatea se afla in imposibilitatea de a-si mai plati datoriile catre diversi creditori – furnizori, ANAF sau banci.</p>
                  <p>Legea 85/2014 o descrie ca fiind „o stare a patrimoniului debitorului care se caracterizeaza prin insuficienta fondurilor banesti disponibile pentru plata datoriilor certe, lichide si exigibile”. </p>
                  <p> Insolventa, nu inseamna automat faliment,aceasta poate fi deschisa si in vederea reorganizarii societatii pe baza unui plan care poate conduce la redresarea afaceri si iesirea din insolventa.Doar in momentul in care reorganizarea da gres, se poate declansa falimentul.</p>
                </div>
              </div>
            </div>
            {/* 3.reorganizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Ce este reorganizarea?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Scopul insolventei nu este de a ajunge la faliment si de a inchide societatea, ci de a o ajuta sa se redreseze dupa un plan stabilit.

                    Practic, se va deschide o procedura de insolventa generala cu intentia de a reorganiza societatea dupa un plan de reorganizare.

                    Acest plan va fi supus confirmarii judecatorului-sindic de catre debitor, administratorului judiciar sau creditorilor.

                    Totodata, planul va trebui sa cuprinda o esalonare a datoriilor pe o durata de 3 ani.

                    De la data deschiderii procedurii de insolventa se vor suspenda de drept toate actiunile judiciare, extrajudiciare si masurile de executare silita asupra averii societatii.

                    Mai mult, societatea isi poate desfasura activitatea in continuare sub controlul Administratorului Judiciar desemnat.

                    Doar in cazul in care acest plan de reorganizare si salvare a societatii esueaza, se va trece la procedura de faliment.</p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            {/* 4.falimentul========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Ce este
                  falimentul ?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Falimentul intervine ca o ultima solutie atunci cand redresarea si planul de reorganizare nu mai sunt posibile.

                    O definitie mai complexa a falimentului ar suna asa:

                    „Falimentul este a doua etapa a procedurii de insolventa care se aplica debitorului in vederea lichidarii averii acestuia pentru acoperirea pasivului, urmata de radierea debitorului din registrul in care este inmatriculat.”

                    Daca se constata ca nu exista bunuri in patrimoniul debitorului sau ca acestea sunt insuficiente pentru a acoperi cheltuielile administrative, se poate da o hotarare prin care se dispune radierea societatii.

                    Prin hotararea prin care se decide intrarea in faliment, judecatorul-sindic va pronunta dizolvarea debitorului persoana juridica si va dispune:

                    • Ridicarea dreptului de administrare al debitorului
                    • Desemnarea unui lichidator juridic in cazul procedurii generale
                    • Lichidarea bunurilor din averea firmei
                    • Radierea societatii</p>
                </div>
              </div>
            </div>
            {/* 5.dizolvarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Ce este dizolvarea?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Inseamna incetarea a activității societatii comerciale, adica firma nu mai poate emite facturi pentru activitati prevazute în obiectului de activitate, ci se pregateste doar pentru lichidarea patrimoniului</p>
                </div>
              </div>
            </div>
            {/* 6.lichidarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Ce este lichidarea?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Lichidarea unei firme reprezinta totalitatea operatiunilor care au ca scop finalizarea operatiunilor comerciale aflate în curs la data dizolvarii societatii, transformarea bunurilor societatii in lichiditati, plata datoriilor acesteia, precum si impartirea activului net intre asociati.

                    Dupa ramanerea definitiva a hotararii judecatoreşti de dizolvare, Oficiul National al Registrului Comertului, la cererea societatii, numeste, un lichidator judiciar inscris in Tabloul practicienilor in insolventa.</p>
                </div>
              </div>
            </div>
            {/* 7.radierea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  Ce este radierea?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Radierea presupune incetarea deplina a capacitatii de folosinta a societatii comerciale. Un aspect de retinut, in cazul radierii, este ca aceasta nu presupune eliminarea inregistrarii anterioare, ci doar consemnarea incetarii activitatii sale.</p>
                </div>
              </div>
            </div>
            {/* 8.fuziunea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  Ce este fuziunea?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Fuziunea este operatia prin care una sau mai multe societati sunt dizolvate fara a intra în lichidare si transfera totalitatea patrimoniului lor unei alte societati in schimbul repartizarii catre actionarii societatii.</p>
                </div>
              </div>
            </div>
            {/* 9.divizarea========== */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button id='accordion-btn' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  Ce este divizarea?
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Divizarea este operatia prin care o societate, dupa ce este dizolvata fara a intra în lichidare, transfera mai multor societati totalitatea patrimoniului sau, in schimbul repartizarii catre actionarii societatii divizate de actiuni la societatile beneficiare.</p>
                  <h5>Etapele procesului de Fuziune sau Divizare</h5>
                  <h6>Etapa 1</h6>
                  <ul>
                    <li>Depunerea proiectului de fuziune și  hotararea adunarii generale a societatii participante la fuziune ( prin care se renunță la examinarea proiectului) </li>
                  </ul>
                  <h6>Etapa 2</h6>
                  <ul>
                    <li>Hotararile adunarilor generale ale asociatilor fiecareia din societatile participante privind aprobarea fuziunii</li>
                    <li>Actul constitutiv al societatii absorbante actualizat conform modificarilor intervenite</li>
                    <li>Dovada publicarii in Monitorul Oficial al Proiectului de fuziune.</li>
                    <li>Situatia financiara de fuziune</li>
                    <li>Informatii din cazierul fiscal </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Info;