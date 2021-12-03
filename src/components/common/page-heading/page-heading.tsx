import * as S from './page-heading.styled';

const PageHeading: React.FC = ({ children, ...props }) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
