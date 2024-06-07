import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const PaginaRegistro = ({ setUser }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/alumnos', formData);
      setUser(formData); // Opcional: Puedes establecer el usuario como el formData si lo deseas
      setRegistroExitoso(true);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
      });
      setTimeout(() => {
        setRegistroExitoso(false);
      }, 5000); // Ocultar la notificación después de 5 segundos
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      {registroExitoso && <div className="registro-exitoso">¡Registro exitoso!</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          autoComplete="name"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default PaginaRegistro;
