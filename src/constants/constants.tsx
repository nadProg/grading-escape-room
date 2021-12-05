import { BaseIconOptions, TileLayerOptions } from 'leaflet';
import { Point } from 'types/types';
import { ValuesOf } from 'utils/utils';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconSciFi } from 'assets/img/icon-scifi.svg';

export const KeyCode = {
  Escape: 'Escape',
} as const;

export const AppRoute = {
  Root: () => '/',
  DetailedQuest: (id: string | number = ':id') => `/detailed-quest/${id}`,
  Contacts: () => '/contacts',
  NotFound: () => '/404',
} as const;

export const APIRoute = {
  Quests: () => '/quests',
  Quest: (id:string | number) => `/quests/${id}`,
  Orders: () => '/orders',
} as const;

export const FetchStatus = {
  Idle: 'IDLE',
  Loading: 'LOADING',
  Succeeded: 'SUCCEEDED',
  Failed: 'FAILED',
} as const;

export const ActionType = {
  SetOrderStatus: 'order/setStatus',
  SetFilter: 'filter/setFilter',
  SetAllQuests: 'allQuests/setData',
  SetAllQuestsStatus: 'allQuests/setStatus',
  SetCurrentQuest: 'currentQuest/setData',
  SetCurrentQuestStatus: 'currentQuest/setStatus',
} as const;

export const MAIN_NAVIGATION_ITEMS = [
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

export const FilterTheme = {
  All: 'all',
  ...Theme
} as const;

export const HumanizedLevel: {
  [key in ValuesOf<typeof Level>]: string;
} = {
  [Level.Easy]: 'простой',
  [Level.Medium]: 'средний',
  [Level.Hard]: 'сложный',
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

export const HumanizedFilter: {
  [key in ValuesOf<typeof FilterTheme>]: string;
} = {
  [FilterTheme.All]: 'Все квесты',
  ...HumanizedTheme
};

export const FilterIcon = {
  [FilterTheme.All]: <IconAllQuests />,
  [FilterTheme.Adventures]: <IconAdventures />,
  [FilterTheme.Horror]: <IconHorrors />,
  [FilterTheme.Mystic]: <IconMystic />,
  [FilterTheme.Detective]: <IconDetective />,
  [FilterTheme.SciFi]: <IconSciFi />,
} as const;

export const CONTACT_ADDRESS: Point = {
  lat: 59.96814853626141,
  lng: 30.316508091844835,
  zoom: 15.5,
};

export const TILE_LAYER_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TILE_LAYER_OPTIONS: TileLayerOptions = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

export const IconSize = {
  Width: 48,
  Height: 61,
} as const;

export const ICON_OPTIONS: BaseIconOptions = {
  iconUrl: '/img/icon-marker.svg',
  iconSize: [IconSize.Width, IconSize.Height],
  iconAnchor: [IconSize.Width / 2, IconSize.Height],
};

export const BookingData = {
  Name: 'booking-name',
  Phone: 'booking-phone',
  People: 'booking-people',
  Legal: 'booking-legal',
} as const;
