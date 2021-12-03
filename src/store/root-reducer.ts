import { combineReducers } from '@reduxjs/toolkit';
import { questsReducer } from './quests/quests-reducer';

const rootReducer = combineReducers({
  quests: questsReducer,
});

export { rootReducer };
