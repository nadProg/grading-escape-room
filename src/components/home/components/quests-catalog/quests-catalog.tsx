import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isFetchError, isFetchIdle, isFetchNotReady } from 'utils/utils';
import { FilterTabs } from '../components';
import { QuestCard } from '../components';
import { Message } from 'components/common/common';
import { getAllQuestsData, getAllQuestsStatus, getFilteredQuests } from 'store/quests/quests-selectors';
import { getAllQuests } from 'store/quests/quests-api-actions';
import * as S from './quests-catalog.styled';

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
    return <Message />;
  }

  if (isFetchError(allQuestsStatus) || !allQuests) {
    return <Message>Не удалось загрузить квесты</Message>;
  }

  return (
    <>
      <FilterTabs />

      <S.QuestsList>
        {
          filteredQuests.map((quest) => <QuestCard key={quest.id} quest={quest} />)
        }
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
