'use client';

import React from 'react';
import { useFilterWorkCards } from './FilterWorkCards.hook';
import { FilterWorkCardsView } from './FilterWorkCards.view';

export const FilterWorkCards: React.FC = (): JSX.Element => {
  const viewProps = useFilterWorkCards();
  return <FilterWorkCardsView {...viewProps} />;
};

export default FilterWorkCards;