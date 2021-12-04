import { createSelector } from '@reduxjs/toolkit';
import { FilterTheme } from 'constants/constants';
import { getFilter } from 'store/filter/filter-selector';
import { FetchStatusType, Quest, State } from 'types/types';

export const getAllQuestsData = ({ quests }: State): Quest[] | null =>
  quests.allQuests.data;

export const getCurrentQuestData = ({ quests }: State): Quest | null =>
  quests.currentQuest.data;

export const getAllQuestsStatus = ({ quests }: State): FetchStatusType =>
  quests.allQuests.status;

export const getCurrentQuestStatus = ({ quests }: State): FetchStatusType =>
  quests.currentQuest.status;

export const getFilteredQuests = createSelector(
  [ getAllQuestsData, getFilter ],
  (quests, filter)=> {
    if (!quests) {
      return [];
    }

    if (!filter || filter === FilterTheme.All) {
      return [ ...quests];
    }

    return quests.filter((quest) => quest.theme === filter);
  },
);
