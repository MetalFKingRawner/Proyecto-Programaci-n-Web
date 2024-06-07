// src/components/PiePagina.jsx
import React from 'react';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram } from '@tabler/icons-react';
import '../Styles/PiePagina.css';

const PiePagina = () => {
  return (
    <footer>
      <p>Síguenos en nuestras redes sociales</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <IconBrandFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <IconBrandTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <IconBrandInstagram size={24} />
        </a>
      </div>
      <div>
        <a href="/contacto">Contáctanos</a>
      </div>
    </footer>
  );
};

export default PiePagina;
