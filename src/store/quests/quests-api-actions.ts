import { APIRoute, FetchStatus } from 'constants/constants';
import { Quest, ThunkActionResult } from 'types/types';
import { setAllQuests, setAllQuestsStatus } from './quests-actions';

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
