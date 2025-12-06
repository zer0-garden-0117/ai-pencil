'use client';

import React, { memo } from 'react';
import { Card, Group, Pagination, SimpleGrid, Skeleton, Space, Text } from '@mantine/core';
import { ImageCard } from '@/components/Content/ImageCard/ImageCard';
import { UsersWorksGetResult } from "@/apis/openapi/publicworks/usePublicWorksByUserIdAndFilterGet";
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';
import { ImageCardWithUser } from '../ImageCardWithUser/ImageCardWithUser';

type CreatedWorksCardsViewProps = {
  page: number;
  userWorksData: UsersWorksGetResult | undefined;
  handlePageChange: (page: number) => void;
};

export const CreatedWorksCardsView = memo(function WorkViewComponent({
  page,
  userWorksData,
  handlePageChange
}: CreatedWorksCardsViewProps): JSX.Element {
  const { user } = useFirebaseAuthContext();

  return (
    <>
    <Card withBorder padding="md" radius="md">
      {/* タイトルと件数 */}
      <Group mb={"md"}>
        <Text fw={700}>
          生成履歴
        </Text>
        {/* userWorksData?.worksがnullの場合はSkeleton表示 */}
        {userWorksData?.works ? (
          <Text color="dimmed">
            {userWorksData.totalWorksCount}件の生成履歴
          </Text>
        ) : (
          <Skeleton width={80} height={20} />
        )}
      </Group>

      <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 4, xl: 4 }} spacing={{ base: 20 }}>
        {!userWorksData &&
          Array.from({ length: 12 }).map((_, idx) => (
            <ImageCardWithUser key={idx} data={{}} index={idx} />
          ))
        }
        {userWorksData?.works?.map((work, idx) => (
          <ImageCardWithUser key={work.apiWork?.workId} data={work} index={idx} />
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
CreatedWorksCardsView.displayName = 'CreatedWorksCardsView';