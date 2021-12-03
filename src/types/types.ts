import { ValuesOf } from 'utils/utils';
import { Level, Theme } from 'constants/constants';

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
