import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ComoFunciona from './components/ComoFunciona';
import { Route, Router, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registrate from './components/Registrate';
import Footer from './components/Footer';
import ContenedorClases from './components/ContenedorClases';
import Clase from './components/Clase';
import React, { useState } from 'react';


function App() {
  const [sesionIniciada, setSesionIniciada] = useState(()=>{return localStorage.getItem("mail")!=null})
  return (
    <>
        <Header props={{sesionIniciada, setSesionIniciada}}/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
          <Route path="/iniciar-sesion" element={<InicioSesion props={{sesionIniciada, setSesionIniciada}}/>} />
          <Route path="/registrate" element={<Registrate props={{sesionIniciada}}/>} />
          <Route path="/clases/:categoria" element={<ContenedorClases />} />
          <Route path="/clase/:id" element={<Clase />} />
        </Routes>
      <Footer />
    </>

  );
}

export default App;
