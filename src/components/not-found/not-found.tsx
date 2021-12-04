import React from 'react';
import { AppRoute } from 'constants/constants';
import { Link, Message, PageTitle } from 'components/common/common';
import * as S from './not-found.styled';

const NotFound: React.FC = () => (
  <S.Layout>
    <PageTitle>This page does not exist</PageTitle>
    <Message>
      <Link
        to={AppRoute.Root()}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Go to main page
      </Link>
    </Message>
  </S.Layout>
);

export default NotFound;
