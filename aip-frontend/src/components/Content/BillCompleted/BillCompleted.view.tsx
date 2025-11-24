'use client';

import React, { memo } from 'react';
import { Group, Card, Button, Notification, Space, Center, Loader } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

type BillCompletedViewProps = {
  productName: string;
  isLoading: boolean;
  handleDrawClick: () => void;
};

export const BillCompletedView = memo(function WorkViewComponent({
  productName,
  isLoading,
  handleDrawClick,
}: BillCompletedViewProps): JSX.Element {
  return (
    <>
    <Card withBorder padding="md" radius="md">
      <Notification
        // isLoadingがtrueの時は更新中...を表示し、falseの時は購入完了を表示
        title={isLoading ? "更新中..." : "購入完了"}
        // isLoadingがtrueの時はloadingをtrueにし、falseの時はiconを表示
        loading={isLoading}
        // isLoadingがfalseの時だけiconを表示
        icon={!isLoading ? <IconCheck size={20} /> : null}
        withCloseButton={false}
        style={{ boxShadow: 'none' }}
        withBorder
      >
        {/* isLoadingがtrueの時は情報を更新中です。しばらくお待ちください。を表示し、それ以外は購入が完了しましたを表示 */}
        {isLoading ? `情報を更新中です。しばらくお待ちください。` : `${productName}の購入が完了しました`}
      </Notification>
      <Space h="md" />
      
      {/* 早速イラストを生成する */}
      {/* isLoadingがfalseの時だけボタンを表示 */}
      {!isLoading && (
        <Group justify="flex-end" mt="md">
          <Button
            onClick={handleDrawClick}
            radius={"xl"}
          >
            早速イラストを生成
          </Button>
        </Group>
      )}
      <Space h="md" />
    </Card>
    </>
  );
});
BillCompletedView.displayName = 'BillCompletedView';