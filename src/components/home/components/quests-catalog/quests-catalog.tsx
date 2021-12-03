import * as S from './quests-catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestsData, getAllQuestsStatus, getFilteredQuests } from 'store/quests/quests-selectors';
import { getAllQuests } from 'store/quests/quests-api-actions';
import { useEffect } from 'react';
import { isFetchError, isFetchIdle, isFetchNotReady } from 'utils/utils';
import NotFound from 'components/not-found/not-found';
import QuestsCard from '../quest-card/quest-card';
import FilterTabs from '../filter-tabs/filter-tabs';

const QuestsCatalog: React.FC = () => {
  const allQuestsStatus = useSelector(getAllQuestsStatus);
  const allQuests = useSelector(getAllQuestsData);
  const filteredQuests = useSelector(getFilteredQuests);

  const dispatch = useDispatch();

  const fetchAllQuests = () => {
    dispatch(getAllQuests());
  };

  useEffect(() => {
    if (isFetchIdle(allQuestsStatus)) {
      fetchAllQuests();
    }
  }, []);

  if (isFetchNotReady(allQuestsStatus)) {
    return <h1>Loading...</h1>;
  }

  if (isFetchError(allQuestsStatus) || !allQuests) {
    return <NotFound />;
  }

  return (
    <>
      <FilterTabs />

      <S.QuestsList>
        {
          filteredQuests.map((quest) => <QuestsCard key={quest.id} quest={quest} />)
        }
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
