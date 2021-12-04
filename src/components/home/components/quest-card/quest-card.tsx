import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { AppRoute, HumanizedLevel } from 'constants/constants';
import { Quest } from 'types/types';
import * as S from './quest-card.styled';

type QuestsCardProps = {
  quest: Quest;
};

const QuestsCard: React.FC<QuestsCardProps> = ({ quest }) => {
  const { title, level, previewImg, peopleCount } = quest;

  return (
    <S.QuestItem>
      <S.QuestItemLink to={AppRoute.DetailedQuest(quest.id)}>
        <S.Quest>
          <S.QuestImage
            src={`/${previewImg}`}
            width="344"
            height="232"
            alt={`квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {peopleCount.min}–{peopleCount.max} чел
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {HumanizedLevel[level]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
};

export default QuestsCard;
