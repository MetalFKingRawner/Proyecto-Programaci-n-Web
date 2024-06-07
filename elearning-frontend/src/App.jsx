import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axiosInstance from './axiosConfig';
import PaginaInicio from './pages/PaginaInicio';
import TableroEstudiante from './pages/TableroEstudiante';
import TableroProfesor from './pages/TableroProfesor';
import PaginaCurso from './pages/PaginaCurso';
import PaginaLeccion from './pages/PaginaLeccion';
import PaginaRegistro from './pages/PaginaRegistro';
import PaginaLogin from './pages/PaginaLogin';
import BarraNavegacion from './components/BarraNavegacion';
import PiePagina from './components/PiePagina';
import './Styles/App.css';


function App() {
  const [user, setUser] = useState(null);

  //useEffect(() => {
    //const fetchUser = async () => {
      //try {
        //const { data } = await axiosInstance.get(2);
        //setUser(data);
      //} catch (error) {
        //setUser(null);
      //}
    //};

    //fetchUser();
  //}, []);

  return (
    <div className="app-container">
      <BarraNavegacion user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/tablero-estudiante" element={user ? <TableroEstudiante /> : <Navigate to="/login" />} />
          <Route path="/tablero-profesor" element={user ? <TableroProfesor /> : <Navigate to="/login" />} />
          <Route path="/curso/:id" element={<PaginaCurso />} />
          <Route path="/curso/:cursoId/leccion/:leccionId" element={<PaginaLeccion />} />
          <Route path="/register" element={<PaginaRegistro setUser={setUser} />} />
          <Route path="/login" element={<PaginaLogin setUser={setUser} />} />
        </Routes>
      </main>
      <PiePagina />
    </div>
  );
}

export default App;
