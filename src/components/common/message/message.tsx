import React from 'react';
import * as S from './message.styled';

const DEFAULT_MESSAGE = 'Загрузка...';

const Message: React.FC = ({ children }) => (
  <S.Message>{children || DEFAULT_MESSAGE}</S.Message>
);

export default Message;
