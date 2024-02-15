import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const BurnButton = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick} >
      {children}
    </ButtonStyled>
  );
};

export default BurnButton;
