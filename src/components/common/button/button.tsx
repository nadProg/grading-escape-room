import React, { ButtonHTMLAttributes } from 'react';
import * as S from './button.styled';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
