import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import TarjetaCurso from '../components/TarjetaCurso';
import '../Styles/PaginaInicio.css';

const PaginaInicio = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('/cursos');
        setCursos(response.data); // Aquí aseguramos que estamos obteniendo los datos correctamente
      } catch (error) {
        setError('Error al cargar los cursos');
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pagina-inicio">
      <h2>Cursos Disponibles</h2>
      <div className="cursos">
        {cursos.length > 0 ? (
          cursos.map(curso => (
            <TarjetaCurso
              key={curso.id}
              idCurso={curso.id}
              titulo={curso.titulo}
              descripcion={curso.descripcion}
            />
          ))
        ) : (
          <div>No hay cursos disponibles</div>
        )}
      </div>
    </div>
  );
};

export default PaginaInicio;
