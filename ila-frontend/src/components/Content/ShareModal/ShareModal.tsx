'use client';

import React, { memo, useState, useEffect } from 'react';
import { Modal, Group, Button } from '@mantine/core';
import { IconBrandX, IconCopy, IconCopyCheck } from '@tabler/icons-react';
import { ApiWorkWithTag } from '../ImageCardWithUser/ImageCardWithUser';

export type ShareModalProps = {
  imageData: ApiWorkWithTag | undefined;
  shareOpened: boolean;
  onClose: () => void;
};

export const ShareModal = memo(function ShareModal({
  imageData,
  shareOpened,
  onClose,
}: ShareModalProps): JSX.Element {
  const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || '';
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (shareOpened) {
      setCopied(false);
    }
  }, [shareOpened]);

  const handleShareToX = () => {
    if (!imageData) return;

    const description = imageData.apiWork?.description ?? "";
    const workUrl = imageData.apiWork?.workId
      ? `${frontendUrl}/illust/${imageData.apiWork.workId}`
      : "";
    const hashtag = "#AIペンシル";

    // 改行入りの投稿本文を作る
    const tweetText = `${description}\n${workUrl}\n${hashtag}`;

    // intent URL に変換
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCopyUrl = async () => {
    if (!imageData) return;
    try {
      await navigator.clipboard.writeText(imageData.apiWork?.workId ? `${frontendUrl}/illust/${imageData.apiWork.workId}` : '');
      setCopied(true);
    } catch (e) {
      console.error('Failed to copy text: ', e);
      setCopied(false);
    }
  };

  return (
    <>
      <Modal
        opened={shareOpened}
        onClose={onClose}
        title="このイラストを共有する"
        centered
      >
        <Group gap="xs" mb="xs">
          <Button
            radius={'xl'}
            leftSection={<IconBrandX size={18} />}
            onClick={handleShareToX}
            color='black'
          >
            共有
          </Button>
          <Button
            radius={'xl'}
            onClick={handleCopyUrl}
            rightSection={
              // copied状態でアイコンを変える
              // コピー前はIconCopy、コピー後はIconCopyCheck
              copied ? <IconCopyCheck size={18} /> : <IconCopy size={18} />
            }
          >
            URLをコピー
          </Button>
        </Group>
      </Modal>
    </>
  );
});

export default ShareModal;