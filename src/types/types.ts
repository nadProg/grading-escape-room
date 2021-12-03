import { ValuesOf } from 'utils/utils';
import { FetchStatus, Level, Theme } from 'constants/constants';
import { AxiosInstance } from 'axios';
import { ThunkAction } from '@reduxjs/toolkit';
import { rootReducer } from 'store/root-reducer';
import { setAllQuests, setAllQuestsStatus, setCurrentQuest, setCurrentQuestStatus } from 'store/quests/quests-actions';

export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: ValuesOf<typeof Theme>;
  level: ValuesOf<typeof Level>;
  peopleCount: [number, number];
  duration: number;
};

export type Order = {
  name: string;
  peopleCount: number;
  phone: string;
  isLegal: boolean;
};

export type FetchStatusType = ValuesOf<typeof FetchStatus>;

export type FetchedData<T = any> = {
  data: T | null;
  status: FetchStatusType;
};

export type State = ReturnType<typeof rootReducer>;

export type Action =
  | ReturnType<typeof setAllQuests>
  | ReturnType<typeof setAllQuestsStatus>
  | ReturnType<typeof setCurrentQuest>
  | ReturnType<typeof setCurrentQuestStatus>;

export type ThunkActionResult<Result = Promise<void>> = ThunkAction<
  Result,
  State,
  AxiosInstance,
  Action
>;
