import { Route, Routes } from "react-router-dom";

import Info from './pages/Info';
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
          <Route path="/informatii" element={<Info />} />
          <Route path="/avocatura" element={<Avocatura />} />
          <Route path="/insolventa" element={<Insolventa />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </>

    </div>
  );
}

export default App;
