'use client';

import React, { memo } from 'react';
import { Modal, Text, Card, Group, Button, Checkbox, Anchor, Pill, Radio, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { UserSettingFormValues } from './UserInfo.hook';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';
import { MyUserGetResult } from '@/apis/openapi/myusers/useMyUserGet';

type UserSettingModalProps = {
  loginUser: MyUserGetResult;
  settingOpened: boolean;
  setSettingOpened: React.Dispatch<React.SetStateAction<boolean>>;
  settingForm: UseFormReturnType<UserSettingFormValues>;
  isSaving: boolean;
  isLogouting: boolean;
  isDeleting: boolean;
  handleSettingSave: () => void;
  handleLogout: () => void;
  handleDeleteUserClick: () => void;
  handlePlanChangeClick: () => void;
  handleBoostChangeClick: () => void;
};

export const UserSettingModal = memo(function UserSettingModalComponent({
  loginUser,
  settingOpened,
  setSettingOpened,
  settingForm,
  isSaving,
  isLogouting,
  isDeleting,
  handleSettingSave,
  handleLogout,
  handleDeleteUserClick,
  handlePlanChangeClick,
  handleBoostChangeClick,
}: UserSettingModalProps) {
  const { signOut } = useFirebaseAuthContext();
  return (
    <Modal
      opened={settingOpened}
      onClose={() => setSettingOpened(false)}
      size="lg"
      centered
      withCloseButton={false}
    >
      {/* 表示設定 */}
      <Text mb={10} fz="md" fw={500}>
        表示設定
      </Text>
      <Card withBorder radius="md">
        <form
          onSubmit={settingForm.onSubmit(() => {
            handleSettingSave();
          })}
        >
          {/* settingFormに反映する */}
          <Radio.Group {...settingForm.getInputProps('viewRating')}>
            <Stack mt="xs">
              <Radio value="0" label="全年齢のみ表示" />
              <Radio value="1" label="微センシティブも表示 (R15)" />
              <Radio value="2" label="センシティブも表示 (R18)" />
            </Stack>
          </Radio.Group>

          <Group justify="flex-end" mt="md">
            <Button
              variant="outline"
              radius="xl"
              disabled={isSaving || isLogouting || isDeleting}
              onClick={() => setSettingOpened(false)}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              color="blue"
              radius="xl"
              disabled={isDeleting || isLogouting}
              loading={isSaving}
            >
              保存
            </Button>
          </Group>
        </form>
      </Card>


      {/* プラン、ブーストの設定 */}
      <Text mt={20} mb={10} fz="md" fw={500}>
        イラスト生成数の設定
      </Text>

      {/* プランの状態 */}
      <Card withBorder radius="md" p="md" mb={10}>
        <Group gap="10px" mb="5px" justify="space-between">
          <Text fw={500} fz="sm">
            サブスクリプション
          </Text>
          <Anchor>
            <Button
              onClick={handlePlanChangeClick}
              radius="xl"
              disabled={isSaving || isLogouting || isDeleting}
            >
              変更
            </Button>
          </Anchor>
        </Group>
        <Pill mb="md" style={{ display: 'inline-flex', width: 'fit-content' }}>
          {(() => {
            const parts = loginUser?.plan?.split(':') || [];
            const [planName, renewDate, renewTime] = parts;
            // planNameにFreeが含まれている場合はFreeのみ表示
            if (planName?.includes('Free')) return 'Free';
            return `${planName} (${renewDate}:${renewTime}に自動更新)`;
          })()}
        </Pill>

        {/* ブーストの状態 */}
        <Group gap="10px" mb="5px" justify="space-between">
          <Text fw={500} fz="sm">
            ブースト(買い切り型)
          </Text>
          <Anchor>
            <Button
              onClick={handleBoostChangeClick}
              radius="xl"
              disabled={isSaving || isLogouting || isDeleting}
            >
              追加
            </Button>
          </Anchor>
        </Group>
        <Group gap={1}>
          {loginUser?.boost?.map((boostItem, index) => {
            const [label, date] = boostItem.split(':');
            return (
              <Pill
                key={index}
                mb="md"
                style={{ display: 'inline-flex', width: 'fit-content', marginRight: 8 }}
              >
                {label} ({date}まで有効)
              </Pill>
            );
          })}
          {/* loginUser.boostが存在しない場合の処理 */}
          {(!loginUser?.boost || loginUser.boost.length === 0) && (
              <Pill
                mb="md"
                style={{ display: 'inline-flex', width: 'fit-content', marginRight: 8 }}
              >
                ブーストは追加されていません
              </Pill>
          )}
        </Group>
      </Card>
      

      {/* その他 */}
      <Text mt={20} mb={10} fz="md" fw={500}>
        その他
      </Text>

      {/* ログアウト / ユーザー削除 */}
      <Card withBorder radius="md" p="md" mb={10}>
        <Group justify="space-between" align="center">
          <Text fz="sm">ログアウト</Text>
          <Group>
            <Button 
              onClick={handleLogout}
              variant="outline" 
              color="red"
              size="sm"
              radius={"xl"}
              disabled={isSaving || isDeleting}
              loading={isLogouting}
            >
              Logout
            </Button>
          </Group>
        </Group>

        {/* ユーザーの削除 */}
        {/* <Group justify="space-between" align="center" mt={20}>
          <Text fz="sm">ユーザーの削除</Text>
          <Button
            variant="outline"
            color="red"
            size="sm"
            radius="xl"
            onClick={handleDeleteUserClick}
            disabled={isSaving || isLogouting || isDeleting}
          >
            ユーザーを削除する
          </Button>
        </Group> */}
      </Card>
    </Modal>
  );
});

UserSettingModal.displayName = 'UserSettingModal';