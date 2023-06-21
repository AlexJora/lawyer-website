// import { Route, Routes } from "react-router-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Info from './pages/Info';
// import Avocatura from './pages/Avocatura';
// import Insolventa from './pages/Insolventa';
// import Contact from './pages/Contact';
// import Acasa from './pages/Acasa';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer'
const Info = React.lazy(() => import("./pages/Info"));
const Avocatura = React.lazy(() => import("./pages/Avocatura"));
const Insolventa = React.lazy(() => import("./pages/Insolventa"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Acasa = React.lazy(() => import("./pages/Acasa"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Acasa />} />
              <Route path="/informatii-utile" element={<Info />} />
              <Route path="/avocatura" element={<Avocatura />} />
              <Route path="/insolventa" element={<Insolventa />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </React.Suspense>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
