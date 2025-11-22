'use client';

import React from 'react';
import { Group, Image, ActionIcon, Skeleton, Menu, Button } from '@mantine/core';
import { IconHeart, IconHeartFilled, IconShare, IconMenu2, IconEdit, IconTrash, IconSettings } from '@tabler/icons-react';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';
import { useRouter } from 'next/navigation';

type WorkActionGroupProps = {
  workId: string;
  workRating?: number;
  workCustomUserId?: string;
  thumbnailImgUrl?: string;
  isLiked?: boolean;
  isSubmitting: boolean;
  onOpen: () => void;
  onLikeClick: (workId: string) => void;
  onEditClick: (workId: string) => void;
  onDeleteClick: (workId: string) => void;
};

export const WorkActionGroup = ({
  workId,
  workRating,
  workCustomUserId,
  thumbnailImgUrl,
  isLiked,
  isSubmitting,
  onOpen,
  onLikeClick,
  onEditClick,
  onDeleteClick,
}: WorkActionGroupProps) => {
  const { user } = useFirebaseAuthContext();
  const isViewSettingNeeded = !!(
    user &&
    workRating !== undefined &&
    typeof user.viewRating === 'number' &&
    user.viewRating < workRating
  );
  const router = useRouter();
  console.log('user.viewRating:', user?.viewRating, 'workRating:', workRating, 'isViewSettingNeeded:', isViewSettingNeeded);

  const iconButtonStyle = {
    backgroundColor: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))',
    '&:hover': {
      backgroundColor: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))',
    },
  };

  return (
    <Group justify="flex-end">
      {/* サムネイル画像 */}
      {/* user.viewRatingがworkRatingより低い場合は設定ボタンをMantine UI Overlayで表示させる */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Image
          src={thumbnailImgUrl}
          style={{ cursor: 'pointer' }}
          onClick={onOpen}
          alt=""
        />
        {isViewSettingNeeded && (
          <Button
            radius="xl"
            size='xs'
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              backgroundColor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(2px)',
            }}
            onClick={(e) => {
              router.push(`/user/${user?.customUserId}?settingModal=true&callback=${workId}`);
            }}
          >
            表示の設定へ
          </Button>
        )}
      </div>
      {/* いいね */}
      {/* userがない場合は非表示 */}
      {user && (
        <ActionIcon style={iconButtonStyle} onClick={() => onLikeClick(workId)}>
          {isSubmitting ? (
            <Skeleton width={16} height={16} />
          ) : isLiked ? (
            <IconHeartFilled size={16} color="var(--mantine-color-red-6)" />
        ) : (
          <IconHeart size={16} color="var(--mantine-color-gray-6)" />
        )}
        </ActionIcon>
      )}

      {/* シェア */}
      <ActionIcon style={iconButtonStyle}>
        <IconShare size={16} color="var(--mantine-color-blue-6)" />
      </ActionIcon>

      {/* メニュー */}
      {/* customUserIdとuser.customUserIdが一致する場合のみ表示 */}
      {user && workCustomUserId === user.customUserId && (
        <Menu shadow="md">
          <Menu.Target>
            <ActionIcon style={iconButtonStyle}>
              <IconMenu2 size={16} color="var(--mantine-color-gray-6)" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconEdit size={14} />}
              onClick={() => onEditClick(workId)}
            >
              編集
            </Menu.Item>
            <Menu.Item
              color="red"
              leftSection={<IconTrash size={14} />}
              onClick={() => onDeleteClick(workId)}
            >
              削除
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      )}
    </Group>
  );
};