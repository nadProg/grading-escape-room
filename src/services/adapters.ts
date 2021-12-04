import { OrderPost, Quest, ServerQuest } from 'types/types';

export const adaptQuestToClient = (serverQuest: ServerQuest): Quest => {
  const clientQuest: {
    [key: string]: number | string | number[] | { min: number, max: number },
  } = { ...serverQuest };

  clientQuest.peopleCount = {
    min: (clientQuest.peopleCount as [number, number])[0],
    max: (clientQuest.peopleCount as [number, number])[1],
  };

  clientQuest.theme = clientQuest.type;

  delete clientQuest.type;
  return clientQuest as Quest;
};

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
