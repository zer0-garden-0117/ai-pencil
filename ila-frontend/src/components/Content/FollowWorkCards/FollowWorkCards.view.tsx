'use client';

import React, { memo } from 'react';
import { Center, Button, Space, SimpleGrid, Text, Group } from '@mantine/core';
import { PublicWorksGetResult } from '@/apis/openapi/publicworks/usePublicWorksGetByFilterInfinite';
import { ImageCardWithUser } from '../ImageCardWithUser/ImageCardWithUser';

type FollowWorkCardsViewProps = {
  worksData: PublicWorksGetResult | undefined;
  illustNum: number;
  isSubmitting: boolean;
  handleMoreClick: () => void;
};

export const FollowWorkCardsView = memo(function WorkViewComponent({
  worksData,
  illustNum,
  isSubmitting,
  handleMoreClick,
}: FollowWorkCardsViewProps): JSX.Element {
  const loadedCount = worksData?.works?.length ?? 0;
  const skeletonCount =
    worksData && illustNum > loadedCount ? illustNum - loadedCount : 0;
  const isMoreView =
    worksData && worksData.totalWorksCount && (worksData.totalWorksCount >= (worksData.works?.length ?? 0) + 1);
  
  // worksData.totalWorksCountが0の場合は表示しない
  if (worksData && worksData.totalWorksCount === 0) {
    return <></>;
  }

  return (
    <>
        <Group justify="space-between">
          <Text fz="md" fw={700} mb="xs">
            フォロー中のみ表示
          </Text>
        </Group>
        <Space h="xs" />

        {/* newの作品 */}
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 4, xl: 4 }} spacing={{ base: 20 }}>
          {/* Skeleton */}
          {!worksData &&
            Array.from({ length: illustNum }).map((_, idx) => (
              <ImageCardWithUser key={idx} data={{}} index={idx} />
            ))
          }

          {/* 取得済みデータの表示 */}
          {worksData?.works?.map((work, idx) => (
            <ImageCardWithUser key={work.apiWork?.workId} data={work} index={idx} />
          ))}

          {/* もっと見るの再取得の分だけ Skeleton を末尾に追加 */}
          {worksData && (worksData.totalWorksCount) && (worksData.totalWorksCount > 0) && (skeletonCount > 0) &&
            Array.from({ length: skeletonCount }).map((_, idx) => (
              <ImageCardWithUser
                key={`more-skeleton-${idx}`}
                data={{}}
                index={loadedCount + idx}
              />
            ))}
        </SimpleGrid>
        <Space h="xs" />

        {/* もっとボタン */}
        {isMoreView && (
        <Center>
          <Button
            onClick={handleMoreClick}
            loading={isSubmitting}
            radius="xl"
          >
            もっと見る
          </Button>
        </Center>
        )}
    </>
  );
});
FollowWorkCardsView.displayName = 'FollowWorkCardsView';