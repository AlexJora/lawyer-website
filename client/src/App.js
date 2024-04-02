import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Info from "./pages/Info";
import Avocatura from "./pages/Avocatura";
import Insolventa from "./pages/Insolventa";
import Contact from "./pages/Contact";
import Acasa from "./pages/Acasa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Helmet>
            <title>
              Cabinet de Avocatură și Insolvență în București | Alina Marin
            </title>
            <meta
              name="description"
              content="Cabinet de avocatură și insolvență condus de Alina Marin. Consultanță, asistență și reprezentare pentru probleme juridice și de insolvență. Contactați-ne pentru soluții profesioniste."
            />
          </Helmet>
          <Navbar />
          <Routes>
            <Route path="/" element={<Acasa />} />
            <Route path="/informatii-utile" element={<Info />} />
            <Route path="/avocatura" element={<Avocatura />} />
            <Route path="/insolventa" element={<Insolventa />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
