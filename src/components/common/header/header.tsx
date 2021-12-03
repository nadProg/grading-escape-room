import logo from 'assets/img/logo.svg';
import { mainNavigationItems } from 'constants/constants';
import { useLocation } from 'react-router';
import * as S from './header.styled';

const Header: React.FC = () => {
  const { pathname: currentPath } = useLocation();

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
            {mainNavigationItems.map(({path, label}) => (
              <S.LinkItem key={label}>
                <S.Link $isActiveLink={path === currentPath} to={path}>
                  {label}
                </S.Link>
              </S.LinkItem>
            ))}
            {/* <S.LinkItem>
              <S.Link $isActiveLink to={AppRoute.Root()}>
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Новичкам</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Отзывы</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to="#">Акции</S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link to={AppRoute.Contacts()}>Контакты</S.Link>
            </S.LinkItem> */}
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
