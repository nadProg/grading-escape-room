import { createAction } from '@reduxjs/toolkit';
import { ActionType, FilterTheme } from 'constants/constants';
import { ValuesOf } from 'utils/utils';

export const setFilter = createAction(
  ActionType.SetFilter,
  (filter: ValuesOf<typeof FilterTheme>) => ({
    payload: {
      filter,
    },
  }),
);
