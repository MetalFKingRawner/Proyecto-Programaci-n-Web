import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Styles/BarraNavegacion.css';
import './Styles/PaginaInicio.css';
import './Styles/PiePagina.css';
import './Styles/TarjetaCurso.css';
import './Styles/TableroEstudiante.css';
import './Styles/TableroProfesor.css';
import './Styles/PaginaCurso.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
