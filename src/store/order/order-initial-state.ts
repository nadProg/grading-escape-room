import { FetchStatus } from 'constants/constants';
import { FetchStatusType } from 'types/types';

export type OrderState = {
  status: FetchStatusType,
};

const orderInitialState: OrderState = {
  status: FetchStatus.Idle,
};

export { orderInitialState };
