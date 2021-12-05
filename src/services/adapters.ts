import { BookingData } from 'constants/constants';
import { OrderPost, Quest, ServerQuest } from 'types/types';

const adaptQuestToClient = (serverQuest: ServerQuest): Quest => {
  const clientQuest: {
    [key: string]: number | string | number[] | { min: number; max: number };
  } = { ...serverQuest };

  clientQuest.peopleCount = {
    min: (clientQuest.peopleCount as [number, number])[0],
    max: (clientQuest.peopleCount as [number, number])[1],
  };

  clientQuest.theme = clientQuest.type;

  delete clientQuest.type;

  return clientQuest as Quest;
};

const adaptBookingDataToServer = (data: FormData): OrderPost => {
  const order: OrderPost = {
    name: String(data.get(BookingData.Name)),
    phone: String(data.get(BookingData.Phone)),
    peopleCount: Number(data.get(BookingData.People)),
    isLegal: Boolean(data.get(BookingData.Legal)),
  };

  return order;
};

export { adaptQuestToClient, adaptBookingDataToServer };
