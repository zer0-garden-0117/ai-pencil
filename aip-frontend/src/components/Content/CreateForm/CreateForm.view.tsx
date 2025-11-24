'use client';

import React, { memo } from 'react';
import { CreateWorkValues } from './CreateForm.hook';
import { UseFormReturnType } from '@mantine/form';
import { Button, Card, Group, Loader, Notification, Radio, Space, Text, Textarea, TextInput } from '@mantine/core';
import { IconCube, IconInfoCircle, IconInfoSmall, IconPencil } from '@tabler/icons-react';
import { IoInformationSharp } from "react-icons/io5";
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { IconPencilCode } from '@tabler/icons-react';
import { useFirebaseAuthContext } from '@/providers/auth/firebaseAuthProvider';

type CreateWorkViewProps = {
  form: UseFormReturnType<CreateWorkValues>,
  isSubmitting: boolean,
  handleDrawClick: (values: CreateWorkValues) => Promise<void>,
  handleHistoryClick: () => void
  handlePlanChangeClick: () => void
  handleBoostAddClick: () => void
  handleSettingsClick: () => void
};

export const CreateWorkView = memo(function WorkViewComponent({
  form,
  isSubmitting,
  handleDrawClick,
  handleHistoryClick,
  handlePlanChangeClick,
  handleBoostAddClick,
  handleSettingsClick
}: CreateWorkViewProps): JSX.Element {
  const { user } = useFirebaseAuthContext();
  const isPromptEmpty = !form.values.prompt?.trim();

  return (
    <Card withBorder padding="md" radius="md">
      <Group justify="space-between">
        <Text fz="md" fw={700}>
          イラストの生成
        </Text>
        <Button
          radius={"xl"}
          size="xs"
          leftSection={
            <IconPencilCode
              size={16}
              style={{ display: 'block' }}
            />
          }
          onClick={handleHistoryClick}
          disabled={isSubmitting} 
        >
          生成履歴を見る
        </Button>
      </Group>
      <Space h="xs" />

      {/* あと何回生成できるか表示 */}
      <Notification
        title="生成可能回数"
        withCloseButton={false}
        style={{ boxShadow: 'none' }}
        withBorder
        icon={<IoInformationSharp size={20} />}
      >
        今日はあと{user?.remainingIllustNum}回イラストを生成できます。
        <Button
          size='compact-xs'
          onClick={handleSettingsClick}
          disabled={isSubmitting} 
          radius="xl"
        >
          イラスト生成数の設定
        </Button>
      </Notification>
      <Space h="md" />

      <form onSubmit={form.onSubmit(handleDrawClick)}>
        {/* モデルの選択(ラジオボタン) */}
        <Radio.Group
          name="モデル"
          label={<Group gap={"5px"}><IconCube size={20} color='var(--mantine-color-blue-6)'/>モデル</Group>}
          mb="md"
          {...form.getInputProps('model')}
        >
          <Group>
            <Radio value="light-pencil" label="light-pencil" />
            <Radio value="coming soon..." label="coming soon..." disabled />
          </Group>
        </Radio.Group>
        {/* プロンプト */}
        <Textarea
          label={<Group gap={"5px"}><IconPencilCode size={20} color='var(--mantine-color-blue-6)'/>プロンプト</Group>}
          placeholder="1girl, blonde hair, smile, ..."
          {...form.getInputProps('prompt')}
          mb="mdc"
          error={form.errors.prompt}
          rows={5}
          minRows={5}
          maxRows={5}
          maxLength={250}
        />
        {/* ネガティブプロンプト */}
        <Textarea
          label={<Group gap={"5px"}><IconPencilCode size={20} color='var(--mantine-color-blue-6)'/>ネガティブプロンプト(任意)</Group>}
          placeholder="lowres, bad anatomy, ..."
          {...form.getInputProps('negativePrompt')}
          mb="md"
          error={form.errors.negativePrompt}
          rows={5}
          minRows={5}
          maxRows={5}
          maxLength={250}
        />
        <Group justify="flex-end" mt="md">
          {user && (
            <Button
              type="submit"
              radius="xl"
              disabled={isSubmitting || isPromptEmpty || (user?.remainingIllustNum ?? 0) <= 0}
              rightSection={
                !isSubmitting ? (
                  <>
                    <IconPencil
                      size={20}
                      style={{ display: 'block' }}
                    />
                    {user?.remainingIllustNum}
                    <IconArrowNarrowRight
                      size={20}
                      style={{ display: 'block' }}
                    />
                    {(user?.remainingIllustNum ?? 0) - 1}
                  </>
                ) : undefined
              }
            >
              {isSubmitting ? (
                <Group gap="xs" align="center">
                  <span>イラスト生成中…</span>
                  <Loader size="xs" color='gray'/>
                </Group>
              ) : (
                'イラスト生成'
              )}
            </Button>
          )}
        </Group>
      </form>
    </Card>
  );
});
CreateWorkView.displayName = 'CreateWorkView';