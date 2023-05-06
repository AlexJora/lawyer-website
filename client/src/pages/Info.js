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

          <div class="accordion">
            {/* onorariul========== */}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button id='accordion-btn' class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ONORARIUL
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button id='accordion-btn' class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Ce este insolventa?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>Insolventa este acea situatie in care societatea se afla in imposibilitatea de a-si mai plati datoriile catre diversi creditori – furnizori, ANAF sau banci.</p>
                  <p>Legea 85/2014 o descrie ca fiind „o stare a patrimoniului debitorului care se caracterizeaza prin insuficienta fondurilor banesti disponibile pentru plata datoriilor certe, lichide si exigibile”. </p>
                  <p> Insolventa, nu inseamna automat faliment,aceasta poate fi deschisa si in vederea reorganizarii societatii pe baza unui plan care poate conduce la redresarea afaceri si iesirea din insolventa.Doar in momentul in care reorganizarea da gres, se poate declansa falimentul.</p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button id='accordion-btn' class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Ce este reorganizarea?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
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
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button id='accordion-btn' class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Ce este
                  falimentul ?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
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

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button id='accordion-btn' class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Reorganizarea judiciara
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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