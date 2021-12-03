import * as S from './page-subtext.styled';

const PageSubtext: React.FC = ({ children, ...props }) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
