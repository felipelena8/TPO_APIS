import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ComoFunciona from './components/ComoFunciona';
import {Route, Router, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registrate from './components/Registrate';
import Footer from './components/Footer';
import ContenedorClases from './components/ContenedorClases';
import Clase from './components/Clase';

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/como-funciona" element={<ComoFunciona/>}/>
          <Route path="/iniciar-sesion" element={<InicioSesion/>}/>
          <Route path="/registrate" element={<Registrate/>}/>
          <Route path="/clases/:categoria" element={<ContenedorClases/>}/>
          <Route path="/clase/:id" element={<Clase/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;
