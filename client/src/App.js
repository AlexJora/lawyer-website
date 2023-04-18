import { Route, Routes } from "react-router-dom";
import './App.css';
import Prezentare from './pages/Prezentare';
import Domenii from './pages/Domenii';
import Contact from './pages/Contact';
import Acasa from './pages/Acasa';
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/prezentare" element={<Prezentare />} />
          <Route path="/domenii" element={<Domenii />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </>

    </div>
  );
}

export default App;
