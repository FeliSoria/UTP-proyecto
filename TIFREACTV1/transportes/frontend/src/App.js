//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Router, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import Homepage from "./pages/Homepage";
import NosotrosPage from "./pages/NosotrosPage";
import Novedadespage from "./pages/Novedadespage";




function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="novedades" element={<Novedadespage />} />
          <Route path="contacto" element={<ContactoPage />} />

        </Routes>
      </BrowserRouter>



      <Footer />
    </div>
  );
}

export default App;
