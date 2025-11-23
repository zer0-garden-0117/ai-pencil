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
  Card,
} from '@mantine/core';

export const About: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <Card withBorder padding="md" radius="md">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h5">
              運営者情報
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本ページでは、AIイラストSNSサービス「AIペンシル」（以下「本サービス」といいます。）の
              運営者に関する情報と、本サービスに込めた思いについてご案内します。
              本サービスは、個人によって開発・運営されています。
            </Text>
          </div>

          <Divider />

          {/* 基本情報 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              1. 基本情報
            </Title>

            <Stack gap={4} ml="xs">
              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  サービス名
                </Text>
                <Text size="sm">AIペンシル</Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  サイトURL
                </Text>
                <Text size="sm">
                  {/* 実際のURLに差し替えてください */}
                  <Anchor href="https://illust-ai.com" target="_blank" rel="noreferrer">
                    https://illust-ai.com
                  </Anchor>
                </Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  運営形態
                </Text>
                <Text size="sm">個人による開発・運営</Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  運営者名
                </Text>
                <Text size="sm">
                  {/* 公開したい表記に置き換えてください（本名・ハンドルネームなど） */}
                  AIペンシル 開発者（ハンドルネーム等）
                </Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  所在地
                </Text>
                <Text size="sm">
                  日本国内（詳細な住所は個人情報保護の観点から非公開としています）
                </Text>
              </Group>

              <Group gap="xs" align="flex-start">
                <Text size="sm" fw={600} w={110}>
                  お問い合わせ
                </Text>
                <Text size="sm">
                  ご連絡は
                  <Anchor href="/contact" size="sm">
                    お問い合わせページ
                  </Anchor>
                  よりお願いいたします。
                </Text>
              </Group>
            </Stack>
          </section>

          {/* サービスの概要・コンセプト */}
          <section>
            <Title order={2} size="h6" mb="xs">
              2. サービスの概要
            </Title>
            <Text size="sm">
              「AIペンシル」は、AIで生成したイラストを
              「作る・投稿する・見つける」ことができる個人開発のSNSサービスです。
              AIイラストに興味がある方が、気軽に創作を楽しんだり、
              好きな作品と出会える場を目指して運営しています。
            </Text>

            <List size="sm" mt="xs">
              <List.Item>AIによるイラスト生成・投稿機能</List.Item>
              <List.Item>フォロー・いいね等を通じたゆるやかな交流</List.Item>
              <List.Item>タグや検索で好みのイラストを探せる機能</List.Item>
              <List.Item>閲覧制限やレーティングによる安心・安全な閲覧体験</List.Item>
            </List>
          </section>

          {/* 個人運営としてのスタンス */}
          <section>
            <Title order={2} size="h6" mb="xs">
              3. 個人運営としてのスタンス
            </Title>
            <Text size="sm">
              本サービスは個人による制作・運営のため、大規模な商用サービスと比べると
              至らない点や機能の制限があるかもしれませんが、
              「AIイラストを楽しみたい人が、安心して使える場所」を大切にしながら、
              少しずつ改善・アップデートを続けていく方針です。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>ユーザーからのフィードバックを今後の改善に活かしていきます</List.Item>
              <List.Item>無理のない範囲で安定運用と新機能追加を行っていきます</List.Item>
              <List.Item>ルールやポリシーは、透明性を重視して公開します</List.Item>
            </List>
          </section>

          {/* 利用規約・ポリシー */}
          <section>
            <Title order={2} size="h6" mb="xs">
              4. 利用規約・ポリシーについて
            </Title>
            <Text size="sm">
              本サービスのご利用にあたっては、以下の各ページの内容が適用されます。
            </Text>
            <List size="sm" mt="xs">
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
              <List.Item>
                <Anchor href="/ai-policy" size="sm">
                  AI生成について
                </Anchor>
              </List.Item>
              <List.Item>
                <Anchor href="/license" size="sm">
                  著作権・ライセンスについて
                </Anchor>
              </List.Item>
            </List>
            <Text size="sm" mt="xs">
              各ポリシーの内容をご確認のうえ、ご理解・ご同意いただいた方のみ、本サービスをご利用ください。
            </Text>
          </section>

          {/* 免責（軽く） */}
          <section>
            <Title order={2} size="h6" mb="xs">
              5. 免責事項（概要）
            </Title>
            <Text size="sm">
              本サービス上で提供される機能や情報については、できる限り正確で安全な運営を心がけていますが、
              その完全性や継続性を保証するものではありません。
              詳細な免責事項については、
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              をご確認ください。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              最終更新日：{currentYear}年〇月〇日
              <br />
              本ページの内容や運営に関するご質問・ご意見は、
              <Anchor href="/contact" size="xs">
                お問い合わせページ
              </Anchor>
              よりお気軽にお寄せください。
            </Text>
          </section>
        </Stack>
      </Card>
  );
};