'use client';

import React, { memo } from 'react';
import { Center, Button, Space, SimpleGrid, Text, Group } from '@mantine/core';
import { ImageCardWithUser } from '../ImageCardWithUser/ImageCardWithUser';
import { FilterType, PublicWorksGetResult } from '@/apis/openapi/publicworks/usePublicWorksGetByFilterInfinite';
import { IconChevronDown } from '@tabler/icons-react';

type FilterWorkCardsViewProps = {
  worksData: PublicWorksGetResult | undefined;
  filterType: FilterType;
  illustNum: number;
  isSubmitting: boolean;
  handleMoreClick: () => void;
};

export const FilterWorkCardsView = memo(function WorkViewComponent({
  worksData,
  filterType,
  illustNum,
  isSubmitting,
  handleMoreClick,
}: FilterWorkCardsViewProps): JSX.Element {
  const loadedCount = worksData?.works?.length ?? 0;
  const skeletonCount =
    worksData && illustNum > loadedCount ? illustNum - loadedCount : 0;
  const isMoreView =
    worksData && worksData.totalWorksCount && (worksData.totalWorksCount >= (worksData.works?.length ?? 0) + 1);

  return (
    <>
        <Group justify="space-between">
          <Text fz="md" fw={700} mb="xs" mt="xs">
            {/* filterTypeによって表示切替 */}
            {filterType === "new" && "新着投稿"}
            {filterType === "random" && "ランダム"}
            {filterType === "recommended" && "おすすめ"}
          </Text>
        </Group>

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
          {worksData &&
            skeletonCount > 0 &&
            Array.from({ length: skeletonCount }).map((_, idx) => (
              <ImageCardWithUser
                key={`more-skeleton-${idx}`}
                data={{}}
                index={loadedCount + idx}
              />
            ))}
        </SimpleGrid>
        <Space h="md" />

        {/* もっとボタン */}
        {isMoreView && (
        <Center>
          <Button
            onClick={handleMoreClick}
            loading={isSubmitting}
            radius="xl"
            rightSection={
              <IconChevronDown size={16} />
            }
          >
            もっと見る
          </Button>
        </Center>
        )}
    </>
  );
});
FilterWorkCardsView.displayName = 'FilterWorkCardsView';