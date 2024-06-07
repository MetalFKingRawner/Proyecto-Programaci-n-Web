// src/pages/PaginaLeccion.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { cursos } from '../data/datos';
import '../Styles/PaginaLeccion.css';

const PaginaLeccion = () => {
  const { cursoId, leccionId } = useParams();
  const curso = cursos.find(c => c.id === parseInt(cursoId));
  const leccion = curso?.lecciones.find(l => l.id === parseInt(leccionId));

  if (!leccion) {
    return <p>Lección no encontrada</p>;
  }

  return (
    <div className="pagina-leccion">
      <h2 className="leccion-titulo">{leccion.titulo}</h2>
      <p className="leccion-resumen">{leccion.resumen}</p>
      <div className="video-container">
        <video controls className="video">
          <source src={leccion.videoUrl} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default PaginaLeccion;
