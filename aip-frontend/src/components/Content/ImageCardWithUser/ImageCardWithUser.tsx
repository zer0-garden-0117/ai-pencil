import {
  ActionIcon,
  AspectRatio,
  Card,
  Flex,
  Group,
  Image,
  Skeleton,
  Space,
  Text,
  Box
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';
import type { components } from '../../../generated/services/ila-v1';
import { SkeltonIcon } from '../SkeltonIcon/SkeltonIcon';

export type ApiWorkWithTag = components['schemas']['ApiWorkWithTag'];

interface ImageCardWithUserProps {
  data: ApiWorkWithTag | undefined;
  index: number;
}

export const ImageCardWithUser = ({ data }: ImageCardWithUserProps) => {
  const router = useRouter();
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <Card p="md" radius="md" withBorder>
      {/* 画像 + アイコン（重畳） */}
      <Card.Section>
      <AspectRatio ratio={1 / Math.sqrt(2)}>
        <Box pos="relative" w="100%" h="100%">
          <Skeleton
            visible={!imgLoaded || data?.apiWork?.thumbnailImgUrl === ''}
            h="100%"
            w="100%"
            radius="sm"
          >
            <Image
              src={data?.apiWork?.thumbnailImgUrl}
              alt={data?.apiWork?.mainTitle || 'Image without title'}
              style={{
                width: '100%',
                height: '100%',
                opacity: imgLoaded ? 1 : 0,
                transition: 'opacity 200ms ease',
                cursor: 'pointer',
              }}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(true)}
              loading="lazy"
              onClick={() => {
                data?.apiWork?.status === 'posted'
                  ? router.push(`/illust/${data?.apiWork?.workId}`)
                  : router.push(`/illust/history/${data?.apiWork?.workId}`);
              }}
            />
          </Skeleton>

          {/* 下部 半透明グレー帯 */}
          {data?.apiWork?.customUserId && (
            <Box
              pos="absolute"
              bottom={0}
              left={0}
              w="100%"
              h={56}
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
          )}

          {/* アイコン（グレー帯の上） */}
          {data?.apiWork?.customUserId && (
            <Box
              pos="absolute"
              bottom={8}
              left={8}
              style={{
                zIndex: 2,
              }}
            >
              <SkeltonIcon
                profileImageUrl={data?.apiWork?.profileImageUrl}
                width={48}
                height={48}
                marginTop={0}
                isClickable
                onClick={() => {
                  router.push(`/user/${data.apiWork!.customUserId}`);
                }}
              />
            </Box>
          )}
        </Box>
      </AspectRatio>
      </Card.Section>
    </Card>
  );
};

ImageCardWithUser.displayName = 'ImageCardWithUser';