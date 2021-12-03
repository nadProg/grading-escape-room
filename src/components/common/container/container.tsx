import * as S from './container.styled';

const Container: React.FC = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
