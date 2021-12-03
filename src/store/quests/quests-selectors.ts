import { FetchStatusType, Quest, State } from 'types/types';

export const getAllQuestsData = ({ quests }: State): Quest[] | null =>
  quests.allQuests.data;

export const getCurrentQuestData = ({ quests }: State): Quest | null =>
  quests.currentQuest.data;

export const getAllQuestsStatus = ({ quests }: State): FetchStatusType =>
  quests.allQuests.status;

export const getCurrentQuestStatus = ({ quests }: State): FetchStatusType =>
  quests.currentQuest.status;
