import { useCallback, useEffect, useRef, useState } from 'react';
import { Message, MainLayout, Redirect } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentQuestData,
  getCurrentQuestStatus,
} from 'store/quests/quests-selectors';
import { useIdParam } from 'hooks/use-id-param';
import { isFetchError, isFetchIdle, isFetchNotReady, isFetchSuccess } from 'utils/utils';
import { getCurrentQuest } from 'store/quests/quests-api-actions';
import { AppRoute, FetchStatus, HumanizedLevel, HumanizedTheme } from 'constants/constants';
import { setCurrentQuestStatus } from 'store/quests/quests-actions';

const DetailedQuest: React.FC = () => {
  const { id: questId, error } = useIdParam();

  const quest = useSelector(getCurrentQuestData);
  const questStatus = useSelector(getCurrentQuestStatus);
  const questStatusRef = useRef(questStatus);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const dispatch = useDispatch();

  const fetchCurrentQuest = (id: number) => {
    dispatch(getCurrentQuest(id));
  };

  useEffect(() => {
    if (!questId) {
      return;
    }

    if (quest?.id !== questId) {
      fetchCurrentQuest(questId);
      return;
    }

    if (isFetchIdle(questStatus)) {
      getCurrentQuest(questId);
    }
  }, [quest?.id, questId]);

  useEffect(() => () => {
    if (!isFetchSuccess(questStatusRef.current)) {
      dispatch(setCurrentQuestStatus(FetchStatus.Idle));
    }
  }, []);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onBookingModalClose = useCallback(() => {
    setIsBookingModalOpened(false);
  }, []);

  if (error || isFetchError(questStatus)) {
    return <Redirect to={AppRoute.NotFound()} />;
  }

  if (isFetchNotReady(questStatus)) {
    return (
      <MainLayout>
        <S.Main>
          <Message />
        </S.Main>
      </MainLayout>
    );
  }

  if (!quest) {
    return <Redirect to={AppRoute.NotFound()} />;
  }

  const { coverImg, title, theme, level, duration, description, peopleCount } = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`квест ${title}`}
          width="1366"
          height="768"
        />

        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{HumanizedTheme[theme]}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>
                  {peopleCount.min}–{peopleCount.max} чел
                </S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{HumanizedLevel[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onClose={onBookingModalClose} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
