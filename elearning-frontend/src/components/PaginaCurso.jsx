// src/pages/PaginaCurso.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { cursos } from '../data/datos';
import '../Styles/PaginaCurso.css';

const PaginaCurso = () => {
  const { id } = useParams();
  const curso = cursos.find(c => c.id === parseInt(id));

  if (!curso) {
    return <p>Curso no encontrado</p>;
  }

  return (
    <div className="pagina-curso">
      <div className="curso-header">
        <h2>{curso.titulo}</h2>
        <img src={curso.imagen} alt={`Imagen del curso ${curso.titulo}`} className="imagen-curso" />
      </div>
      <p className="curso-descripcion">{curso.descripcion}</p>
      <div className="lecciones-curso">
        {curso.lecciones.map(leccion => (
          <div key={leccion.id} className="leccion">
            <h3>{leccion.titulo}</h3>
            <Link to={`/curso/${id}/leccion/${leccion.id}`} className="boton-play">
              Play
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginaCurso;
