'use client';

import React, { memo } from 'react';
import { Modal, Text, Group, Button, Loader } from '@mantine/core';

type UserDeleteConfirmModalProps = {
  confirmOpened: boolean;
  setConfirmOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleting: boolean;
  handleConfirmDelete: () => void;
};

export const UserDeleteConfirmModal = memo(function UserDeleteConfirmModalComponent({
  confirmOpened,
  setConfirmOpened,
  isDeleting,
  handleConfirmDelete,
}: UserDeleteConfirmModalProps) {
  return (
    <Modal
      opened={confirmOpened}
      onClose={() => setConfirmOpened(false)}
      title="削除の確認"
      centered
      withCloseButton={false}
    >
      <Text size="sm" mb="md">
        本当に削除しますか？この操作は取り消しできません。
      </Text>
      <Group justify="flex-end" mt="md">
        <Button
          variant="default"
          onClick={() => setConfirmOpened(false)}
          disabled={isDeleting}
        >
          キャンセル
        </Button>
        <Button
          color="red"
          onClick={handleConfirmDelete}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <Group gap="xs" align="center">
              <span>削除中…</span>
              <Loader size="xs" />
            </Group>
          ) : (
            '削除'
          )}
        </Button>
      </Group>
    </Modal>
  );
});

UserDeleteConfirmModal.displayName = 'UserDeleteConfirmModal';