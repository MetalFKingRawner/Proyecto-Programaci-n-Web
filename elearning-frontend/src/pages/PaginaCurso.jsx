// src/pages/PaginaCurso.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../axiosConfig'; // Importa tu instancia de axios configurada
import '../Styles/PaginaCurso.css';

const PaginaCurso = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await axios.get(`/cursos/${id}`);
        setCurso(response.data);
      } catch (error) {
        console.error('Error al cargar el curso:', error);
      }
    };

    fetchCurso();
  }, [id]);

  if (!curso) {
    return <p>Cargando curso...</p>;
  }

  return (
    <div className="pagina-curso">
      <div className="curso-header">
        <h2 className="curso-titulo">{curso.titulo}</h2>
        <img src="https://images.ecestaticos.com/_86LZtrjYvFwiUnU322KxpwSbuc=/0x0:600x460/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2aa%2Fc51%2F6b7%2F2aac516b7429f535ea02364e087b1b32.jpg" alt={`Imagen del curso ${curso.titulo}`} className="imagen-curso" />
      </div>
      <p className="curso-descripcion">{curso.descripcion}</p>
      
    </div>
  );
};

export default PaginaCurso;
