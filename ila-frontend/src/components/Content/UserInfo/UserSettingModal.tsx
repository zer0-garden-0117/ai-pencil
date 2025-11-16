'use client';

import React, { memo } from 'react';
import { Modal, Text, Card, Group, Button, Checkbox } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import LogoutButton from '@/components/Common/LogoutButton/LogoutButton';
import { UserSettingFormValues } from './UserInfo.hook';

type UserSettingModalProps = {
  settingOpened: boolean;
  setSettingOpened: React.Dispatch<React.SetStateAction<boolean>>;
  settingForm: UseFormReturnType<UserSettingFormValues>;
  isSaving: boolean;
  isDeleting: boolean;
  handleSettingSave: () => void;
  handleDeleteUserClick: () => void;
};

export const UserSettingModal = memo(function UserSettingModalComponent({
  settingOpened,
  setSettingOpened,
  settingForm,
  isSaving,
  isDeleting,
  handleSettingSave,
  handleDeleteUserClick,
}: UserSettingModalProps) {
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
          {/* センシティブな画像を表示するかどうか */}
          <Checkbox
            label="センシティブな画像を表示する (R18+)"
            {...settingForm.getInputProps('showSensitiveImages')}
          />
          {/* 微センシティブな画像を表示するかどうか */}
          <Checkbox
            mt={10}
            label="微センシティブな画像を表示する (R15+)"
            {...settingForm.getInputProps('showMildlySensitiveImages')}
          />

          <Group justify="flex-end" mt="md">
            <Button
              variant="outline"
              radius="xl"
              disabled={isSaving || isDeleting}
              onClick={() => setSettingOpened(false)}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              color="blue"
              radius="xl"
              disabled={isDeleting}
              loading={isSaving}
            >
              保存
            </Button>
          </Group>
        </form>
      </Card>

      {/* その他 */}
      <Text mt={20} mb={10} fz="md" fw={500}>
        その他
      </Text>

      {/* ログアウト / ユーザー削除 */}
      <Card withBorder radius="md" p="md" mb={10}>
        <Group justify="space-between" align="center">
          <Text fz="sm">ログアウト</Text>
          <LogoutButton isDisable={isSaving || isDeleting} />
        </Group>

        <Group justify="space-between" align="center" mt={20}>
          <Text fz="sm">ユーザーの削除</Text>
          <Button
            variant="outline"
            color="red"
            size="sm"
            radius="xl"
            onClick={handleDeleteUserClick}
            disabled={isSaving || isDeleting}
          >
            ユーザーを削除する
          </Button>
        </Group>
      </Card>
    </Modal>
  );
});

UserSettingModal.displayName = 'UserSettingModal';