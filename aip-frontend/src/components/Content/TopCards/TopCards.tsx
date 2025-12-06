import { Card, Space } from '@mantine/core';
import React from 'react';
import FilterWorkCards from '../FilterWorkCards/FilterWorkCards';
import FollowWorkCards from '../FollowWorkCards/FollowWorkCards';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';

export const TopCards: React.FC = () => {
  const { user } = useFirebaseAuthContext();

  return (
    <Card p="0">
      <FilterWorkCards filterType="new" />
      <Space h="md" />
      {/* userが存在する場合のみ表示 */}
      {user && 
        <>
          <FollowWorkCards />
          <Space h="md" />
        </>
      }
      <FilterWorkCards filterType="random"/>
      <Space h="md" />
      <FilterWorkCards filterType="recommended"/>
    </Card>
  );
};

TopCards.displayName = 'TopCards';