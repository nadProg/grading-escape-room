import { APIRoute, FetchStatus } from 'constants/constants';
import { adaptQuestToClient } from 'services/adapters';
import { ServerQuest, ThunkActionResult } from 'types/types';
import { setAllQuests, setAllQuestsStatus, setCurrentQuest, setCurrentQuestStatus } from './quests-actions';

export const getAllQuests =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      dispatch(setAllQuestsStatus(FetchStatus.Loading));

      try {
        const { data: serverQuests } = await api.get<ServerQuest[]>(APIRoute.Quests());

        const quests = serverQuests.map((serverQuest) => adaptQuestToClient(serverQuest));

        dispatch(setAllQuests(quests));
        dispatch(setAllQuestsStatus(FetchStatus.Succeeded));
      } catch (error) {
        dispatch(setAllQuestsStatus(FetchStatus.Failed));
      }
    };


export const getCurrentQuest = (questId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setCurrentQuestStatus(FetchStatus.Loading));

    try {
      const { data: serverQuest } = await api.get<ServerQuest>(APIRoute.Quest(questId));
      const quest = adaptQuestToClient(serverQuest);

      dispatch(setCurrentQuest(quest));
      dispatch(setCurrentQuestStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setCurrentQuestStatus(FetchStatus.Failed));
    }
  };
