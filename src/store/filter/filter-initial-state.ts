import { FilterTheme } from 'constants/constants';
import { ValuesOf } from 'utils/utils';

export type FilterState = ValuesOf<typeof FilterTheme>;

const filterInitialState: FilterState = FilterTheme.All;

export { filterInitialState };
