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
} from '@mantine/core';

export const Guidelines: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container size="md">
      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h2">
              投稿ガイドライン
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本投稿ガイドライン（以下「本ガイドライン」といいます。）は、AIイラストSNSサービス
              「AIペンシル」（以下「本サービス」といいます。）において、ユーザーが投稿する
              コンテンツの基準および注意事項を定めるものです。
              快適で安心して利用できるコミュニティ運営のため、ご一読のうえ遵守をお願いします。
            </Text>
          </div>

          <Divider />

          {/* 第1章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              1. 基本方針
            </Title>
            <Text size="sm">
              本サービスは、AI技術を活用した創作活動を楽しむためのコミュニティです。
              他のユーザーを尊重し、安心して利用できる環境づくりにご協力ください。
            </Text>
          </section>

          {/* 第2章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              2. 投稿できるコンテンツ
            </Title>
            <Text size="sm">以下の種類のコンテンツを投稿できます。</Text>
            <List size="sm" mt="xs">
              <List.Item>ユーザー自身がAIを利用して生成したイラスト</List.Item>
              <List.Item>ユーザー自身が作成したイラスト（非AI含む）</List.Item>
              <List.Item>AI生成に関連するノウハウ・プロンプト例（対応箇所がある場合）</List.Item>
              <List.Item>運営者が許可したその他のコンテンツ</List.Item>
            </List>
          </section>

          {/* 第3章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              3. 投稿できないコンテンツ（禁止事項）
            </Title>
            <Text size="sm">以下に該当するコンテンツの投稿は禁止されています。</Text>

            <List size="sm" mt="xs">
              <List.Item>
                他者の著作権・肖像権・商標権・その他の権利を侵害する画像
              </List.Item>
              <List.Item>
                実在人物の顔写真を素材にした、本人の同意のない生成コンテンツ（例：Deepfake 等）
              </List.Item>
              <List.Item>
                過度に暴力的、残虐、差別的、攻撃的な表現
              </List.Item>
              <List.Item>
                犯罪行為や違法行為を助長する内容
              </List.Item>
              <List.Item>
                公序良俗に反するわいせつ表現、児童ポルノ・未成年を示唆する性的表現
              </List.Item>
              <List.Item>
                R-18 / R-18G 等の成人向け表現を、適切な設定・区分なく投稿する行為
              </List.Item>
              <List.Item>
                他者に迷惑をかけるスパム投稿、広告のみを目的とした投稿
              </List.Item>
              <List.Item>
                本サービスの運営やシステムを妨害する行為
              </List.Item>
              <List.Item>その他、運営者が不適切と判断する内容</List.Item>
            </List>

            <Text size="xs" c="dimmed" mt="xs">
              ※詳細は
              <Anchor href="/terms" size="xs">
                利用規約
              </Anchor>
              および
              <Anchor href="/privacy" size="xs">
                プライバシーポリシー
              </Anchor>
              もあわせてご確認ください。
            </Text>
          </section>

          {/* 第4章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              4. R-18 / センシティブ表現に関するルール
            </Title>
            <Text size="sm">
              本サービスでは、年齢制限が必要なコンテンツの投稿を一部許可していますが、
              適切なラベル付け・設定が必須です。
            </Text>

            <List size="sm" mt="xs">
              <List.Item>センシティブな内容を含む場合、「閲覧制限」設定を必ずONにする</List.Item>
              <List.Item>未設定のまま投稿された場合、運営者が修正・非表示・削除する場合があります</List.Item>
              <List.Item>
                ユーザーの「閲覧設定」に基づき、R-18コンテンツは自動的にロック・非表示処理が行われます
              </List.Item>
            </List>

            <Text size="xs" c="dimmed" mt="xs">
              ※閲覧設定機能の詳細は
              <Anchor href="/me/viewrating" size="xs">
                ユーザー設定
              </Anchor>
              にて確認できます。
            </Text>
          </section>

          {/* 第5章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              5. 違反した場合の対応
            </Title>
            <Text size="sm">
              本ガイドラインに違反したコンテンツを運営者が確認した場合、以下の対応を行うことがあります。
            </Text>

            <List size="sm" mt="xs">
              <List.Item>コンテンツの非表示・削除</List.Item>
              <List.Item>アカウントの一時利用停止または制限</List.Item>
              <List.Item>重大な違反の場合、アカウントの永久停止</List.Item>
              <List.Item>法令違反が疑われる場合、関係機関への連絡</List.Item>
            </List>
          </section>

          {/* 第6章 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              6. ガイドラインの改定
            </Title>
            <Text size="sm">
              本ガイドラインの内容は、必要に応じて変更される場合があります。
              変更内容および施行日は、本サービス上で告知します。
              引き続き本サービスを利用した場合は、改定後の内容に同意したものとみなします。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              制定日：{currentYear}年〇月〇日
              <br />
              本ガイドラインに関するお問い合わせは
              <Anchor href="/contact" size="xs">
                お問い合わせページ
              </Anchor>
              からご連絡ください。
            </Text>
          </section>
        </Stack>
      </Paper>
    </Container>
  );
};