import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'constants/constants';
import { FetchStatusType } from 'types/types';

export const setOrderStatus = createAction(
  ActionType.SetOrderStatus,
  (status: FetchStatusType) => ({
    payload: {
      status,
    },
  }),
);
