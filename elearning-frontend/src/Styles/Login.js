// src/Styles/LoginStyles.js
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

export const LoginForm = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  margin-top: -10px;
  text-align: center;
`;
