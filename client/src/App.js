import { Route, Routes } from "react-router-dom";

import Prezentare from './pages/Prezentare';
import Avocatura from './pages/Avocatura';
import Insolventa from './pages/Insolventa';
import Contact from './pages/Contact';
import Acasa from './pages/Acasa';
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/prezentare" element={<Prezentare />} />
          <Route path="/avocatura" element={<Avocatura />} />
          <Route path="/insolventa" element={<Insolventa />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </>

    </div>
  );
}

export default App;
