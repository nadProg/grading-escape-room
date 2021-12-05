import { FilterTheme } from 'constants/constants';
import { State } from 'types/types';
import { ValuesOf } from 'utils/utils';

export const getFilter = ({ filter }: State): ValuesOf<typeof FilterTheme> =>
  filter;
