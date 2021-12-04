import { FetchStatusType, State } from 'types/types';

export const getOrderStatus = ({ order }: State): FetchStatusType => order.status;
