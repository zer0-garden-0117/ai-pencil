'use client';

import React, { memo } from 'react';
import { Card, Group, Pagination, SimpleGrid, Skeleton, Space, Text } from '@mantine/core';
import { ImageCard } from '@/components/Content/ImageCard/ImageCard';
import { UsersWorksGetResult } from "@/apis/openapi/publicworks/usePublicWorksByUserIdAndFilterGet";
import { PublicWorksUserFilterTypeQueryParam } from './UserWorksCards.hook';
import { CreateCard } from '../CreateCard/CreateCard';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';

type UserWorkCardsViewProps = {
  page: number;
  customUserId: string;
  userWorksFilterType: PublicWorksUserFilterTypeQueryParam;
  userWorksData: UsersWorksGetResult | undefined;
  handlePageChange: (page: number) => void;
};

export const UserWorkCardsView = memo(function WorkViewComponent({
  page,
  customUserId,
  userWorksFilterType,
  userWorksData,
  handlePageChange
}: UserWorkCardsViewProps): JSX.Element {
  const { user } = useFirebaseAuthContext();

  return (
    <>
    <Card withBorder padding="md" radius="md">
      {/* タイトルと件数 */}
      <Group mb={"md"}>
        <Text fw={700}>
          {/* userWorksFilterTypeがpostedの場合は「投稿」、favoriteの場合は「いいね」 */}
          {userWorksFilterType === 'posted' ? '投稿' : 'いいね'}
        </Text>
        {/* userWorksData?.worksがnullの場合はSkeleton表示 */}
        {userWorksData?.works ? (
          <Text color="dimmed">
            {/* userWorksFilterTypeがpostedの場合は「投稿」、favoriteの場合は「いいね」 */}
            {userWorksData.totalWorksCount}件の{userWorksFilterType === 'posted' ? '投稿' : 'いいね'}
          </Text>
        ) : (
          <Skeleton width={80} height={20} />
        )}
      </Group>

      {/* カードのグリッド */}
      <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 4, xl: 4 }} spacing={{ base: 20 }}>
        {!userWorksData &&
          Array.from({ length: 12 }).map((_, idx) => (
            <ImageCard key={idx} data={{}} index={idx} />
          ))
        }
        {/* userWorksFilterTypeがpostedかつ、customUserIdがuser.customUserIdと等しい場合はCreateCardを表示 */}
        {userWorksData?.works && userWorksFilterType === 'posted' && customUserId === user?.customUserId && (
          <CreateCard />
        )}
        {userWorksData?.works?.map((work, idx) => (
          <ImageCard key={work.apiWork?.workId} data={work} index={idx} />
        ))}
      </SimpleGrid>
    </Card>
    <Space h={20} />
    <Group justify='flex-end'>
      <Pagination value={page} total={Math.ceil((userWorksData?.totalWorksCount ?? 0) / 12)} radius="md" onChange={handlePageChange}/>
    </Group>
    </>
  );
});
UserWorkCardsView.displayName = 'UserWorkCardsView';