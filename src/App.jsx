import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagprincipal from './components/Pagina principal/Pagprincipal';
import Introducao from "./components/Introducao/Introducao";
import SobreNos from './components/Sobre nós/sobre-nos';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagprincipal />} />
        <Route path="/introducao" element={<Introducao />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </Router>
  );
}
