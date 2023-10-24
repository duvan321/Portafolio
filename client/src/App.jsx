import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import AcercaDeMi from "./components/Acerca";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import axios from "axios";
axios.defaults.baseURL = "portafolio-production-2d78.up.railway.app";
function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<AcercaDeMi />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
