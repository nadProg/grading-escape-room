import { useRouteMatch } from 'react-router';
import { MAIN_NAVIGATION_ITEMS } from 'constants/constants';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';

const Header: React.FC = () => {
  const { path: currentPath } = useRouteMatch();

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image
            src={logo}
            alt="Логотип Escape Room"
            width="134"
            height="50"
          />
        </S.Logo>

        <S.Navigation>
          <S.Links>
            {MAIN_NAVIGATION_ITEMS.map(({ path, label }) => (
              <S.LinkItem key={label}>
                <S.Link $isActiveLink={path === currentPath} to={path}>
                  {label}
                </S.Link>
              </S.LinkItem>
            ))}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
