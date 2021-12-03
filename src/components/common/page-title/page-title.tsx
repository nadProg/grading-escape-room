import * as S from './page-title.styled';

const PageTitle: React.FC = ({ children, ...props }) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
