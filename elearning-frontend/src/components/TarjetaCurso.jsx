import React from 'react'; 
import { Link } from 'react-router-dom';
import '../Styles/TarjetaCurso.css';

const TarjetaCurso = ({ idCurso, titulo, descripcion}) => {
  return (
    <div className="tarjeta-curso">
      <img src="https://images.ecestaticos.com/_86LZtrjYvFwiUnU322KxpwSbuc=/0x0:600x460/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2aa%2Fc51%2F6b7%2F2aac516b7429f535ea02364e087b1b32.jpg" alt={`Imagen del curso ${titulo}`} className="imagen-curso" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <Link to={`/curso/${idCurso}`} className="boton-curso">
        Ver Curso
      </Link>
    </div>
  );
};

export default TarjetaCurso;
