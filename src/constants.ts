import { ValuesOf } from './utils';

export const Level = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
} as const;

export const Theme = {
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
} as const;

export const HumanizedLevel: {
  [key in ValuesOf<typeof Level>]: string;
} = {
  [Level.Easy]: 'Простой',
  [Level.Medium]: 'Средний',
  [Level.Hard]: 'Сложный',
};

export const HumanizedTheme: {
  [key in ValuesOf<typeof Theme>]: string;
} = {
  [Theme.Adventures]: 'Приключения',
  [Theme.Horror]: 'Ужасы',
  [Theme.Mystic]: 'Мистика',
  [Theme.Detective]: 'Детектив',
  [Theme.SciFi]: 'Sci-fi',
};
