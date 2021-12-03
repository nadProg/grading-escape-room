import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestsData, getAllQuestsStatus } from 'store/quests/quests-selectors';
import { getAllQuests } from 'store/quests/quests-api-actions';
import { useEffect } from 'react';
import { isFetchError, isFetchIdle, isFetchNotReady } from 'utils/utils';
import NotFound from 'components/not-found/not-found';
import QuestsCard from '../quest-card/quest-card';

const QuestsCatalog: React.FC = () => {
  const allQuestsStatus = useSelector(getAllQuestsStatus);
  const allQuests = useSelector(getAllQuestsData);

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
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn isActive>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconAdventures />
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <S.QuestsList>
        {
          allQuests.map((quest) => <QuestsCard key={quest.id} quest={quest} />)
        }
      </S.QuestsList>
    </>
  );
};

export default QuestsCatalog;
