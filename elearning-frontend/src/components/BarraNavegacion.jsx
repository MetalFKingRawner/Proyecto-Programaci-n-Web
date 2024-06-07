import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import '../Styles/BarraNavegacion.css';

const BarraNavegacion = ({ user, setUser }) => {
  const handleSignOut = async () => {
    await axiosInstance.post('/logout');
    setUser(null);
  };

  return (
    <nav>
      <h1>Bienvenido AlumnITO</h1>
      <div>
        {user ? (
          <>
            <Link to="/perfil">Mi Perfil</Link>
            <button onClick={handleSignOut}>Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default BarraNavegacion;
