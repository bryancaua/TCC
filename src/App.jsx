import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagprincipal from './components/Pagina principal/Pagprincipal';
import Introducao from "./components/Introducao/Introducao";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagprincipal />} />
        <Route path="/introducao" element={<Introducao />} />
      </Routes>
    </Router>
  );
}
