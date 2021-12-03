import styled, { css } from 'styled-components';

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  @media (max-width: 1110px) {
    align-self: center;
  }
`;

const TabItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 190px;
  margin-bottom: 20px;

  &:not(:last-of-type) {
    padding-right: 40px;
    margin-right: 39px;
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media (max-width: 1110px) {
    &:not(:last-of-type) {
      padding-right: 30px;
      margin-right: 29px;
    }
  }
`;

const TabBtn = styled.button.attrs({ type: 'button' })<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 140%;
  letter-spacing: -0.02em;
  font-weight: 700;

  color: ${({ theme }) => theme.color.whisper2};
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:focus span,
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
      }
    `}
`;

const TabTitle = styled.span`
  margin-left: 13px;
  padding-top: 4px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
`;

const QuestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);
  gap: 32px 24px;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, minmax(303px, 1fr));
  }
`;

export {
  Tabs,
  TabItem,
  TabBtn,
  TabTitle,
  QuestsList
};
