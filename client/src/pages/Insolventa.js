import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Insolventa = () => {
  return (
    <>
      <div className='insolventa-page'>
        <Navbar />
        <div>
          <h6 className='guide-text ms-3 mt-4' >SERVICII DE INSOLVENTA</h6>
          <div className='container py-5'>
            <h5 class="card-title text-center pb-5">Consultanta si reprezentare in cadrul procedurii de insolventa</h5>
            <div className='card'>
              <div class="insolvency card-img-top2" >
              </div>
              <div class="card-body">
                <p class="card-text">
                  <ul className='my-list pt-3'>
                    <li>Lichidare judiciara / procedura falimentului;</li>
                    <br></br>
                    <li>Redactare actiuni avand ca obiect cereri de deschidere a procedurii de insolventa si
                      reprezentarea clientului in fata instantelor de judecata, pentru debitorii
                      comunicati/aprobat de UAT;</li>
                    <br></br>
                    <li>Intocmirea unei situatii de analiză a societatilor debitoare prin verificare recom si
                      buletinul procedurilor de insolventa (exista abonament BPI), scopul verificarii fiind de a
                      identifica societatile care au intrat in procedura insolventei.</li>
                    <br></br>
                    <li>Infiintare Societati, filiale, puncte de lucru.</li>
                    <br></br>
                    <li>Modificarea capitalului social, conversia creantelor in actiuni, analiza cerintelor legale
                      privind fuziunea, desfiintarea, divizarea, dizolvarea societatilor;</li>
                    <br></br>
                    <li>Contracte comerciale si rezolvarea tuturor problemelor contractuale</li>
                    <br></br>
                    <li>Recuperarea de creante:
                      <br></br>Notificari, Somatii de plata, Cerere cu valoare redusa
                      <br></br>Declaratii de creanta
                      <br></br>Reprezentarea clientilor atat in fata instantelor de judecata de drept comun, cat si
                      in fata instantelor specializate</li>
                    <br></br>
                    <li>Intocmire de rapoarte lunare privind activitatea desfasurata</li>
                    <br></br>
                    <li>Analiza, intocmire si avizare raspunsuri catre petenti.</li>
                    <br></br>
                    <li>Analiza, intocmire si avizare notificari/adrese catre persoane fizice/persoane juridice.</li>
                    <br></br>
                    <li>Analiza si avizare de alte acte juridice cu conotatie juridica.</li>
                    <br></br>
                    <li>Redactare de cereri precum si orice alte documente specifice activitatii avocatului.</li>
                    <br></br>
                    <li>Consultanta si asistenta juridica privitoare la modul de aplicare si executare a
                      reglementarilor legale .</li>
                  </ul>
                </p>
                <Link to="/contact">
                  <button className="btn my-4" type="button" >Cere o evaluare</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div >
    </>
  )
}

export default Insolventa
