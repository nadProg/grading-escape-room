import { createReducer } from '@reduxjs/toolkit';
import { setAllQuests, setAllQuestsStatus, setCurrentQuest, setCurrentQuestStatus } from './quests-actions';
import { questsInitialState } from './quests-initial-state';

const questsReducer = createReducer(questsInitialState, (builder) => {
  builder
    .addCase(setAllQuests, (state, action) => {
      state.allQuests.data = action.payload.allQuests;
    })
    .addCase(setAllQuestsStatus, (state, action) => {
      state.allQuests.status = action.payload.status;
    })
    .addCase(setCurrentQuest, (state, action) => {
      state.currentQuest.data = action.payload.currentQuest;
    })
    .addCase(setCurrentQuestStatus, (state, action) => {
      state.currentQuest.status = action.payload.status;
    });
});

export { questsReducer };
