import { FetchStatus } from 'constants/constants';
import { FetchedData, Quest } from 'types/types';

export type QuestsState = {
  allQuests: FetchedData<Quest[]>;
  currentQuest: FetchedData<Quest>;
};

const questsInitialState: QuestsState = {
  allQuests: {
    data: null,
    status: FetchStatus.Idle,
  },
  currentQuest: {
    data: null,
    status: FetchStatus.Idle,
  },
};

export { questsInitialState };
