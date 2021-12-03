import { ValuesOf } from 'utils/utils';

export const AppRoute = {
  Root: () => '/',
  DetailedQuest: (id: string | number = ':id') => `/detailed-quest/${id}`,
  Contacts: () => '/contacts',
  NotFound: () => '/404',
} as const;

export const APIRoute = {
  Quests: () => '/quests',
  Quest: (id:string | number) => `/quests/${id}`,
  Orders: (id:string | number) => '/order',
} as const;

export const mainNavigationItems = [
  {
    path: AppRoute.Root(),
    label: 'Квесты',
  },
  {
    path: '#',
    label: 'Новичкам',
  },
  {
    path: '#',
    label: 'Отзывы',
  },
  {
    path: '#',
    label: 'Акции',
  },
  {
    path: AppRoute.Contacts(),
    label: 'Контакты',
  },
];

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
