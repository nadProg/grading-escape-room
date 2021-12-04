import { OrderPost } from 'types/types';

const adaptOrderDataToServer = (data: FormData): OrderPost => {
  const order: OrderPost = {
    name: String(data.get('booking-name')),
    phone: String(data.get('booking-phone')),
    peopleCount: Number(data.get('booking-people')),
    isLegal: !!data.get('booking-legal'),
  };

  return order;
};

export { adaptOrderDataToServer };
