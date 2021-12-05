import { combineReducers } from '@reduxjs/toolkit';
import { orderReducer } from './order/order-reducer';
import { filterReducer } from './filter/filter-reducer';
import { questsReducer } from './quests/quests-reducer';

const rootReducer = combineReducers({
  order: orderReducer,
  filter: filterReducer,
  quests: questsReducer,
});

export { rootReducer };
