'use client';

import React from 'react';
import { useFilterWorkCards } from './FilterWorkCards.hook';
import { FilterWorkCardsView } from './FilterWorkCards.view';
import { FilterType } from '@/apis/openapi/publicworks/usePublicWorksGetByFilterInfinite';

type FilterWorkCardsProps = {
  filterType: FilterType;
};

export const FilterWorkCards: React.FC<FilterWorkCardsProps> = ({ filterType }): JSX.Element => {
  const viewProps = useFilterWorkCards({ filterType });
  return <FilterWorkCardsView {...viewProps} />;
};

export default FilterWorkCards;