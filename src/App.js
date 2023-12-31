import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registrate from './components/Registrate';
import Footer from './components/Footer';
import ContenedorClases from './components/ContenedorClases';
import Clase from './components/Clase';
import React, { useState } from 'react';
import Perfil from './components/Perfil';
import Notificaciones from './components/Notificaciones';
import MisClases from './components/MisClases';
import Contrataciones from './components/Contrataciones';


function App() {
  const [sesionIniciada, setSesionIniciada] = useState(() => { return localStorage.getItem("token") != null })
  const [imgChanged, setImgChanged] = useState()
  return (
    <>
      <Header props={{ sesionIniciada, setSesionIniciada, imgChanged }} />
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar-sesion" element={<InicioSesion props={{ sesionIniciada, setSesionIniciada }} />} />
          <Route path="/registrate" element={<Registrate props={{ sesionIniciada, setSesionIniciada }} />} />
          <Route path="/clases/:categoria" element={<ContenedorClases />} />
          <Route path="/clase/:id" element={<Clase />} />
          <Route path='/contrataciones' element={<Contrataciones />} />
          <Route path='/notificaciones' element={<Notificaciones />} />
          <Route path='/perfil' element={<Perfil props={{ setImgChanged }} />} />
          <Route path='/mis-clases' element={<MisClases props={{ sesionIniciada }} />} />
        </Routes>
      </main>
      <Footer />
    </>

  );
}

export default App;
