import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter-reducer';
import { questsReducer } from './quests/quests-reducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  quests: questsReducer,
});

export { rootReducer };
