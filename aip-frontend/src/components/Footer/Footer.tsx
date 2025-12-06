import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Group,
  Stack,
  Text,
  Anchor,
  Divider,
  Button,
  Space,
} from '@mantine/core';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: '利用規約', href: '/terms' },
    { label: 'プライバシー', href: '/privacy' },
    { label: '投稿ガイドライン', href: '/guidelines' },
    { label: 'AI生成について', href: '/ai-policy' },
    { label: 'ヘルプ・FAQ', href: '/help' },
    { label: '著作権・ライセンス', href: '/license' },
    { label: 'お問い合わせ', href: '/contact' },
    { label: '運営者情報', href: '/about' },
  ];

  return (
    <>
    <Box
      component="footer"
      style={(theme) => ({
        borderTop: `1px solid ${theme.colors.gray[3]}`,
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <Container size="lg">
        <Stack gap="md">
          {/* 上段：左にブランド、右にリンク群 */}
          <Group justify="space-between" align="flex-start" wrap="wrap">
            {/* ブランド部分 */}
            <Stack gap={4}>
              <Text fw={700} size="lg">
                AIペンシル
              </Text>
              <Text size="xs" c="dimmed">
                AIイラストを作り、繋がるSNS
              </Text>
            </Stack>

            {/* リンク部分 */}
            <SimpleGrid
              cols={{ base: 2, xs: 3 }}
              spacing={8}
            >
              {links.map((item) => (
                <Anchor
                  component={Link}
                  href={item.href}
                  key={item.label}
                  underline="hover"
                  style={{ textDecorationColor: 'gray' }}
                >
                  <Text size="sm" c="dimmed">
                    {item.label}
                  </Text>
                </Anchor>
              ))}
            </SimpleGrid>
          </Group>

          <Divider />
          {/* 下段：コピーライト */}
          <Group justify="flex-end" wrap="wrap">
            <Text size="xs" c="dimmed">
              © {currentYear} AIペンシル All rights reserved.
            </Text>
          </Group>
        </Stack>
      </Container>
    </Box>
    <Space h="xl" />
    </>
  );
};