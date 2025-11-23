import React from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  List,
  Anchor,
  Paper,
  Divider,
  Space,
  Group,
} from '@mantine/core';

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const xUrl = 'https://x.com/';
  const xId = '@';

  return (
    <Container size="md" py="xl">
      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h2">
              お問い合わせ
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本ページでは、AIイラストSNSサービス「AIペンシル」に関するお問い合わせ方法についてご案内します。
              現在、お問い合わせはX（旧Twitter）のダイレクトメッセージ（DM）にて受け付けています。
            </Text>
          </div>

          <Divider />

          {/* 1. お問い合わせ窓口 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              1. お問い合わせ窓口
            </Title>

            <Stack gap="xs" ml="xs">
              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={120}>
                  Xアカウント
                </Text>
                <Text size="sm">
                  <Anchor href={xUrl} target="_blank" rel="noreferrer">
                    {xId}
                  </Anchor>
                </Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={120}>
                  受付方法
                </Text>
                <Text size="sm">
                  上記Xアカウント宛てに、ダイレクトメッセージ（DM）をお送りください。
                </Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={120}>
                  返信について
                </Text>
                <Text size="sm">
                  個人運営のため、内容によっては返信までお時間をいただく場合や、
                  すべてのお問い合わせに個別の回答ができない場合があります。あらかじめご了承ください。
                </Text>
              </Group>
            </Stack>
          </section>

          {/* 2. DM送信時のお願い */}
          <section>
            <Title order={2} size="h3" mb="xs">
              2. DM送信時のお願い
            </Title>
            <Text size="sm">
              スムーズな確認のため、DMには可能な範囲で次の内容を含めていただけると助かります。
            </Text>

            <List size="sm" mt="xs">
              <List.Item>ご利用中の環境（例：PC／スマホ、ブラウザ名など）</List.Item>
              <List.Item>発生している問題・ご質問の内容</List.Item>
              <List.Item>問題が発生した画面のURLやスクリーンショット（可能な場合）</List.Item>
              <List.Item>再現手順（どのような操作をしたときに発生したか）</List.Item>
            </List>
          </section>

          {/* 3. お問い合わせいただける内容の例 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              3. お問い合わせいただける内容の例
            </Title>
            <List size="sm" mt="xs">
              <List.Item>不具合やエラーのご報告</List.Item>
              <List.Item>アカウントやログインに関するご相談</List.Item>
              <List.Item>不適切なコンテンツ・迷惑行為の通報</List.Item>
              <List.Item>機能改善のご要望やご意見</List.Item>
              <List.Item>その他、本サービスに関するお問い合わせ</List.Item>
            </List>
          </section>

          {/* 4. 注意事項 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              4. 注意事項
            </Title>
            <Text size="sm">
              お問い合わせの際は、以下の点にご注意ください。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>
                Xアカウントの仕様上、DMの受信状況によっては、メッセージの確認が遅れる場合があります。
              </List.Item>
              <List.Item>
                個人情報（本名・住所・電話番号など）は、必要な場合を除き、むやみに送信しないようご注意ください。
              </List.Item>
              <List.Item>
                本サービスの利用に関する基本的なルールや方針は、
                <Anchor href="/terms" size="sm">
                  利用規約
                </Anchor>
                や
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
                、
                <Anchor href="/privacy" size="sm">
                  プライバシーポリシー
                </Anchor>
                など各種ポリシーページもあわせてご確認ください。
              </List.Item>
            </List>
          </section>

          {/* 5. 参考リンク */}
          <section>
            <Title order={2} size="h3" mb="xs">
              5. あわせてご確認ください
            </Title>
            <List size="sm" mt="xs">
              <List.Item>
                <Anchor href="/help" size="sm">
                  ヘルプ・FAQ
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="/terms" size="sm">
                  利用規約
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="/privacy" size="sm">
                  プライバシーポリシー
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
              </List.Item>
            </List>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              最終更新日：{currentYear}年〇月〇日
              <br />
              お問い合わせ方法は、今後の運営状況に応じて予告なく変更される場合があります。
            </Text>
          </section>
        </Stack>
      </Paper>

      <Space h="xl" />
    </Container>
  );
};