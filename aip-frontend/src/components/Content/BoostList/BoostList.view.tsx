'use client';

import React, { memo } from 'react';
import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  List,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from '@mantine/core';
import { BoostData } from './BoostList.hook';
import {
  IconAlarm,
  IconCoinYen,
  IconPencilCode,
  IconRocket,
  IconSparkles,
} from '@tabler/icons-react';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';

type BoostListViewProps = {
  boostDatas: BoostData[];
  handleAddClick: (product: string) => void;
};

export const BoostListView = memo(function WorkViewComponent({
  boostDatas,
  handleAddClick,
}: BoostListViewProps): JSX.Element {
  const { user } = useFirebaseAuthContext();

  return (
    <Card withBorder p="lg" radius="lg">
      <Group justify="space-between" align="flex-start">
        <div>
          <Text fz="lg" fw={700}>
            ブースト（買い切り型）の購入
          </Text>
          <Text fz="sm" c="dimmed" mt={4}>
            生成枚数を一時的に増やせます。少し多めに生成したいに便利です。
          </Text>
        </div>
        <Badge
          color="pink"
          variant="gradient"
          gradient={{ from: 'pink', to: 'orange', deg: 67 }}
          radius="xl"
          leftSection={<IconRocket size={14} />}
        >
          1回きり・自動更新なし
        </Badge>
      </Group>

      <Space h="md" />

      {/* ブーストリスト */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
        spacing={{ base: 16 }}
      >
        {boostDatas.map((boostData, index) => {
          const isRecommended = index === 1;

          const totalIncrease =
            typeof boostData.increaseNum === 'number' &&
            typeof boostData.termDays === 'number'
              ? boostData.increaseNum * boostData.termDays
              : undefined;

          return (
            <Card
              key={boostData.id}
              shadow={isRecommended ? 'md' : 'xs'}
              p="lg"
              radius="lg"
              withBorder
              style={{
                borderColor: isRecommended ? 'var(--mantine-color-blue-5)' : undefined,
                background: isRecommended
                  ? 'linear-gradient(135deg, rgba(37,99,235,0.04), rgba(129,140,248,0.06))'
                  : 'var(--mantine-color-body)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* プラン名 + おすすめバッジ */}
              <Group justify="space-between" mb="sm" align="flex-start">
                <Group gap="xs">
                  <IconRocket
                    size={22}
                    style={{ transform: 'translateY(1px)' }}
                    color="var(--mantine-color-blue-6)"
                  />
                  <div>
                    <Text fz="lg" fw={800}>
                      {boostData.name}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      一時的に生成枚数をアップ
                    </Text>
                  </div>
                </Group>

                {isRecommended && (
                  <Badge
                    color="cyan"
                    radius="xl"
                    leftSection={<IconSparkles size={14} />}
                  >
                    おすすめブースト
                  </Badge>
                )}
              </Group>

              <Stack gap="xs" mb="md">
                {/* 料金 */}
                <div>
                  <Group align="baseline" gap="xs">
                    <IconCoinYen size={22} color="var(--mantine-color-blue-6)" />
                    <Text fz={24} fw={900} lh={1}>
                      {typeof boostData.price === 'number'
                        ? boostData.price.toLocaleString()
                        : boostData.price}
                    </Text>
                    <Text fz="sm" c="dimmed">
                      円（買い切り）
                    </Text>
                  </Group>
                  <Text fz="xs" c="dimmed">
                    一度購入すれば、期間中はずっと枚数が増えます。
                  </Text>
                </div>

                {/* 増える数 */}
                <div>
                  <Group gap={6} mb={4}>
                    <IconPencilCode size={18} color="var(--mantine-color-blue-6)" />
                    <Text fw={600} fz="sm">
                      画像生成枚数アップ
                    </Text>
                  </Group>
                  <Text fz="sm">
                    1日に生成できる枚数を＋
                    <Text span fz="sm" fw={800}>
                      {boostData.increaseNum}
                    </Text>
                    枚
                  </Text>

                  {/* 合計アップ枚数（出せる場合だけ） */}
                  {totalIncrease && (
                    <Text fz="xs" c="dimmed" mt={2}>
                      合計で
                      <Text span fw={800}>
                        {' '}{totalIncrease}{' '}
                      </Text>
                      枚分、追加で生成できます。
                    </Text>
                  )}
                </div>

                {/* 有効期間 */}
                <div>
                  <Group gap={6} mb={4}>
                    <IconAlarm size={18} color="var(--mantine-color-blue-6)" />
                    <Text fw={600} fz="sm">
                      有効期間
                    </Text>
                  </Group>
                  <Text fz="sm">
                    購入日から
                    <Text span fz="sm" fw={800}>
                      {' '}{boostData.termDays}{' '}
                    </Text>
                    日間有効
                  </Text>
                </div>

                {/* 利用シーンのイメージ */}
                <List spacing={4} mt="xs" fz="xs" c="dimmed">
                  <List.Item>試したいプロンプトがあるとき</List.Item>
                  <List.Item>休日にまとめてたくさん生成したいとき</List.Item>
                  <List.Item>短期間だけ創作に集中したいときに最適</List.Item>
                </List>
              </Stack>

              {/* 購入ボタン */}
              <Center mt="md">
                {user ? (
                  <Button
                    radius="xl"
                    size="md"
                    fullWidth
                    onClick={() => handleAddClick(boostData.id)}
                    variant={isRecommended ? 'filled' : 'light'}
                  >
                    今すぐブーストする
                  </Button>
                ) : (
                  <Text fz="xs" c="dimmed">
                    ログインするとブーストを購入できます
                  </Text>
                )}
              </Center>
            </Card>
          );
        })}
      </SimpleGrid>
    </Card>
  );
});

BoostListView.displayName = 'BoostListView';