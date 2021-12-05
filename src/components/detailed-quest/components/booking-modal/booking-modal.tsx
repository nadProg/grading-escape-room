import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adaptBookingDataToServer } from 'services/adapters';
import { isFetchLoading, isFetchSuccess } from 'utils/utils';
import { FetchStatus, KeyCode, BookingData } from 'constants/constants';
import { postOrder } from 'store/order/order-api-actions';
import { getOrderStatus } from 'store/order/order-selector';
import { setOrderStatus } from 'store/order/order-actions';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import * as S from './booking-modal.styled';

type BookingModalProps = {
  onClose: () => void;
};

const BookingModal: React.FC<BookingModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const orderStatus = useSelector(getOrderStatus);

  const onDocumentKeydown = useCallback(({ code }: KeyboardEvent) => {
    if (code === KeyCode.Escape) {
      onClose();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onDocumentKeydown);
    return () => {
      window.removeEventListener('keydown', onDocumentKeydown);
    };
  }, []);

  useEffect(() => {
    if (isFetchSuccess(orderStatus)) {
      onClose();
      dispatch(setOrderStatus(FetchStatus.Idle));
    }
  }, [orderStatus]);

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (!formRef.current) {
      return;
    }

    const bookingData = new FormData(formRef.current);
    const order = adaptBookingDataToServer(bookingData);

    dispatch(postOrder(order));
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          ref={formRef}
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={onFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor={BookingData.Name}>Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id={BookingData.Name}
              name={BookingData.Name}
              placeholder="Имя"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor={BookingData.Phone}>
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id={BookingData.Phone}
              name={BookingData.Phone}
              placeholder="Телефон"
              pattern="[0-9]{10}"
              title="Номер телефона должен состоять из десяти цифр"
              maxLength={10}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor={BookingData.People}>
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id={BookingData.People}
              name={BookingData.People}
              placeholder="Количество участников"
              required
            />
          </S.BookingField>
          <S.BookingSubmit disabled={isFetchLoading(orderStatus) || undefined}>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id={BookingData.Legal}
              name={BookingData.Legal}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor={BookingData.Legal}
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
