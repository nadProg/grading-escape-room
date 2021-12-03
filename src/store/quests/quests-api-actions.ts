import { APIRoute, FetchStatus } from 'constants/constants';
import { Quest, ThunkActionResult } from 'types/types';
import { setAllQuests, setAllQuestsStatus, setCurrentQuest, setCurrentQuestStatus } from './quests-actions';

export const getAllQuests =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      dispatch(setAllQuestsStatus(FetchStatus.Loading));

      try {
        const { data: quests } = await api.get<Quest[]>(APIRoute.Quests());

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
      const { data: quest } = await api.get<Quest>(APIRoute.Quest(questId));

      dispatch(setCurrentQuest(quest));
      dispatch(setCurrentQuestStatus(FetchStatus.Succeeded));

    } catch (error) {
      dispatch(setCurrentQuestStatus(FetchStatus.Failed));
    }
  };
