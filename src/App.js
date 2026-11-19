
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Weather from "./components/Weather";
import Portfolio from "./pages/Portfolio";
import Navbar from "./pages/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Portfolio renders first */}
          <Route path="/" element={<Portfolio />} />

          {/* Weather page */}
          <Route path="/weather" element={<Weather />} />

          {/* Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
