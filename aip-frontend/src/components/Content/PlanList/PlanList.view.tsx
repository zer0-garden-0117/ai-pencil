'use client';

import React, { memo } from 'react';
import { Button, Card, Center, Group, List, SimpleGrid, Space, Text, Badge, Stack } from '@mantine/core';
import { PlanData } from './PlanList.hook';
import {
  IconAlarm,
  IconCoinYen,
  IconMoneybag,
  IconPencilCode,
  IconPhoto,
  IconSparkles,
} from '@tabler/icons-react';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';

type PlanListViewProps = {
  planData: PlanData[];
  handleSubscriptionClick: (plan: string) => void;
  handleSubscriptionChangeClick: () => void;
};

export const PlanListView = memo(function WorkViewComponent({
  planData,
  handleSubscriptionClick,
  handleSubscriptionChangeClick,
}: PlanListViewProps): JSX.Element {
  const { user } = useFirebaseAuthContext();

  const isFreeUser = user?.plan === 'Free';

  return (
    <Card withBorder p="lg" radius="lg">
      <Group justify="space-between" align="flex-start">
        <div>
          <Text fz="lg" fw={700}>
            サブスクリプションの購入
          </Text>
          <Text fz="sm" c="dimmed" mt={4}>
            生成回数や履歴保存を増やして、AIイラスト体験をもっと快適に。
          </Text>
        </div>
        <Badge variant="outline" radius="xl">
          いつでも解約OK
        </Badge>
      </Group>

      <Space h="md" />

      {/* プランリスト */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2 }} spacing={{ base: 16 }}>
        {planData.map((plan) => {
          const isRecommended = plan.isRecommended;

          return (
            <Card
              key={plan.id}
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
                <div>
                  <Text fz="lg" fw={800}>
                    {plan.name}
                  </Text>
                  {plan.id === 'free' && (
                    <Text fz="xs" c="dimmed">
                      はじめての方向けのお試しプラン
                    </Text>
                  )}
                </div>

                {isRecommended && (
                  <Badge
                    leftSection={<IconSparkles size={14} />}
                    color="orange"
                    radius="xl"
                    variant="filled"
                  >
                    人気 No.1
                  </Badge>
                )}
              </Group>

              {/* 価格ブロック */}
              <Group align="baseline" gap="xs" mb="xs">
                <IconCoinYen size={24} color="var(--mantine-color-blue-6)" />
                <Text fz={28} fw={900} lh={1}>
                  {plan.price.toLocaleString()}
                </Text>
                <Text fz="sm" c="dimmed">
                  円 / 月
                </Text>
              </Group>
              <Text fz="xs" c="dimmed" mb="sm">
                ※税込 / 自動更新・いつでもキャンセル可能
              </Text>

              {/* メリット（箇条書き） */}
              <Stack gap={6} mb="md">
                <Group gap={6}>
                  <IconPencilCode size={18} color="var(--mantine-color-blue-6)" />
                  <Text fw={600} fz="sm">
                    画像生成
                  </Text>
                </Group>
                <Text fz="sm">
                  1日に
                  <Text span fw={800}>
                    {plan.illustNum}
                  </Text>
                  枚まで生成可能
                </Text>

                <Group gap={6} mt="xs">
                  <IconAlarm size={18} color="var(--mantine-color-blue-6)" />
                  <Text fw={600} fz="sm">
                    生成履歴
                  </Text>
                </Group>
                <Text fz="sm">
                  生成履歴を
                  <Text span fw={800}>
                    {plan.illustHistoryDays}
                  </Text>
                  日間保存
                </Text>

                {/* 追加メリットのイメージ（コピーだけでOK） */}
                {plan.id !== 'free' && (
                  <List spacing={4} mt="xs" fz="xs" c="dimmed">
                    <List.Item icon={<IconPhoto size={14} />}>
                      お気に入りのプロンプトをいつでも呼び出し
                    </List.Item>
                    <List.Item icon={<IconMoneybag size={14} />}>
                      Freeに比べて圧倒的に多くの枚数を生成
                    </List.Item>
                    <List.Item icon={<IconSparkles size={14} />}>
                      集中的に創作したい日にも安心の枚数
                    </List.Item>
                  </List>
                )}
              </Stack>

              {/* 購入ボタン */}
              <Center mt="md">
                {/* plan.idがfreeの場合はボタンを表示しない */}
                {plan.id !== 'free' && user && (
                  <Button
                    radius="xl"
                    size="md"
                    fullWidth
                    onClick={
                      isFreeUser
                        ? () => handleSubscriptionClick(plan.id)
                        : () => handleSubscriptionChangeClick()
                    }
                    variant={isRecommended ? 'filled' : 'light'}
                  >
                    {isFreeUser
                      ? `${plan.name} を選ぶ`
                      : '現在のプランを変更する'}
                  </Button>
                )}

                {/* 未ログインユーザー向けの導線（任意）：ログインしていない時に表示 */}
                {plan.id !== 'free' && !user && (
                  <Text fz="xs" c="dimmed">
                    ログインするとこのプランを申し込めます
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

PlanListView.displayName = 'PlanListView';