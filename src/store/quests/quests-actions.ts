import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'constants/constants';
import { FetchStatusType, Quest } from 'types/types';

export const setAllQuests = createAction(
  ActionType.SetAllQuests,
  (allQuests: Quest[] | null) => ({
    payload: {
      allQuests,
    },
  }),
);

export const setAllQuestsStatus = createAction(
  ActionType.SetAllQuestsStatus,
  (status: FetchStatusType) => ({
    payload: {
      status,
    },
  }),
);

export const setCurrentQuest = createAction(
  ActionType.SetCurrentQuest,
  (currentQuest: Quest | null) => ({
    payload: {
      currentQuest,
    },
  }),
);

export const setCurrentQuestStatus = createAction(
  ActionType.SetCurrentQuestStatus,
  (status: FetchStatusType) => ({
    payload: {
      status,
    },
  }),
);
