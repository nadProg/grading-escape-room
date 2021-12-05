import { AxiosInstance } from 'axios';
import { ThunkAction } from '@reduxjs/toolkit';
import { ValuesOf } from 'utils/utils';
import { FetchStatus, Level, Theme } from 'constants/constants';
import { rootReducer } from 'store/root-reducer';
import {
  setAllQuests,
  setAllQuestsStatus,
  setCurrentQuest,
  setCurrentQuestStatus,
} from 'store/quests/quests-actions';
import { setOrderStatus } from 'store/order/order-actions';

export type ServerQuest = {
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

export type Quest = {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  theme: ValuesOf<typeof Theme>;
  level: ValuesOf<typeof Level>;
  peopleCount: {
    min: number,
    max: number,
  };
  duration: number;
};

export type OrderPost = {
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
  | ReturnType<typeof setOrderStatus>
  | ReturnType<typeof setAllQuests>
  | ReturnType<typeof setAllQuestsStatus>
  | ReturnType<typeof setCurrentQuest>
  | ReturnType<typeof setCurrentQuestStatus>;

export type ThunkActionResult<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  State,
  AxiosInstance,
  Action
>;

export type ParamsWithId = {
  [key: string]: string;
  id: string;
};

export type Point = {
  lat: number;
  lng: number;
  zoom: number;
};
