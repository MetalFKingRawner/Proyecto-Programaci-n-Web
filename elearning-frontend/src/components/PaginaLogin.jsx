import React from 'react';
import styled from 'styled-components';
import logo from '../img/ITO_logo.png';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const CardContainer = styled.div`
  display: flex;
  width: 800px; /* Aumentamos el ancho de la tarjeta */
  max-width: 90%;
  background-color: #fff;
  border-radius: 16px; /* Aumentamos el radio de los bordes */
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LogoContainer = styled.div`
  flex: 1;
  background-color: #f67e22;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 1rem; /* Aumentamos el padding de los inputs */
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px; /* Aumentamos el tamaño de fuente */
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem; /* Reducimos el espacio entre botones */
  margin-top: 1rem; /* Añadimos margen superior a los botones */
`;

const Button = styled.button`
  padding: 1rem 2rem; /* Reducimos el padding de los botones */
  background-color: #f67e22;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d45a00;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const PaginaLogin = () => {
  return (
    <LoginContainer>
      <CardContainer>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
        </LogoContainer>
        <FormContainer>
          <LoginForm>
            <Title>Iniciar sesión</Title>
            <Input type="email" placeholder="Correo electrónico" />
            <Input type="password" placeholder="Contraseña" />
            <ButtonContainer>
              <Button type="submit">Iniciar sesión</Button>
              <Button type="button">Cambiar tipo de usuario</Button>
            </ButtonContainer>
          </LoginForm>
        </FormContainer>
      </CardContainer>
    </LoginContainer>
  );
};

export default PaginaLogin;
