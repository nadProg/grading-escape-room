import React from 'react';
import { AppRoute } from 'constants/constants';
import { Link, PageTitle } from 'components/common/common';

const NotFound: React.FC = () => (
  <>
    <PageTitle>This page does not exist</PageTitle>
    <p>
      <Link
        to={AppRoute.Root()}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Go to main page
      </Link>
    </p>
  </>
);

export default NotFound;
