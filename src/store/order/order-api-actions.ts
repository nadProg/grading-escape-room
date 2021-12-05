import { APIRoute, FetchStatus } from 'constants/constants';
import toast from 'react-hot-toast';
import { OrderPost, ThunkActionResult } from 'types/types';
import { setOrderStatus } from './order-actions';

export const postOrder =
  (order: OrderPost): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const loadingToastId = toast.loading('Отправка заказа');
      dispatch(setOrderStatus(FetchStatus.Loading));

      try {
        await api.post(APIRoute.Orders(), order);

        toast.success('Заказ создан успешно');
        dispatch(setOrderStatus(FetchStatus.Succeeded));
      } catch (error) {
        toast.error('Не удалось отправить заказ');
        dispatch(setOrderStatus(FetchStatus.Failed));
      }

      toast.dismiss(loadingToastId);
    };
