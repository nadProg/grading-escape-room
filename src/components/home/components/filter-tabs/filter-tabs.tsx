import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterIcon, FilterTheme, HumanizedFilter } from 'constants/constants';
import { getFilter } from 'store/filter/filter-selector';
import { setFilter } from 'store/filter/filter-actions';
import * as S from './filter-tabs.styled';

const FilterTabs: React.FC = () => {
  const currentFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <S.Tabs>
      {Object.values(FilterTheme).map((filter) => (
        <S.TabItem key={filter} onClick={() => dispatch(setFilter(filter))}>
          <S.TabBtn isActive={filter === currentFilter}>
            {FilterIcon[filter]}
            <S.TabTitle>{HumanizedFilter[filter]}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      ))}
    </S.Tabs>
  );
};

export default FilterTabs;
