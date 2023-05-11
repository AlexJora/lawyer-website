// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './pages/Info';
import Avocatura from './pages/Avocatura';
import Insolventa from './pages/Insolventa';
import Contact from './pages/Contact';
import Acasa from './pages/Acasa';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Acasa />} />
            <Route path="/informatii-utile" element={<Info />} />
            <Route path="/avocatura" element={<Avocatura />} />
            <Route path="/insolventa" element={<Insolventa />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </>

    </div>
  );
}

export default App;
