import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import AcercaDeMi from "./components/Acerca";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";
import DetailPorta from "./components/DetailPorta";
// import axios from "axios";
import ParticlesBackground from "./components/particlesBackground";
// axios.defaults.baseURL = "https://portafolio-production-df2a.up.railway.app/";
function App() {
  return (
    <div className="text-white font-custom">
      <ParticlesBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<AcercaDeMi />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/detail/:id" element={<DetailPorta />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Agrega más rutas aquí según sea necesario */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
