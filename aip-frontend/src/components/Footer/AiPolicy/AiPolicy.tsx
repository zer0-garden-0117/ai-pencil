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

export const AiPolicy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container size="md">
      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h2">
              AI生成について
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本ページでは、AIイラストSNSサービス「AIペンシル」（以下「本サービス」といいます。）における
              AI生成機能の概要や、生成コンテンツの取り扱いに関する方針について説明します。
              本サービスのAI生成機能をご利用になる前に、あわせて
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              や
              <Anchor href="/guidelines" size="sm">
                投稿ガイドライン
              </Anchor>
              もご確認ください。
            </Text>
          </div>

          <Divider />

          {/* 1. AI生成機能の目的 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              1. AI生成機能の目的
            </Title>
            <Text size="sm">
              本サービスのAI生成機能は、ユーザーの創作活動を支援し、AIを活用したイラスト制作を気軽に楽しめる環境を提供することを目的としています。
              ユーザーは、プロンプト（テキスト指示）等を入力することで、AIによってイラストを生成できます。
            </Text>
          </section>

          {/* 2. 使用しているAI技術の概要 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              2. 使用しているAI技術の概要
            </Title>
            <Text size="sm">
              本サービスでは、画像生成AIモデル等の技術を用いてイラストを生成します。
              使用している具体的なモデルやバージョンは、品質向上や安全性確保のために適宜変更・アップデートされる場合があります。
            </Text>
            <Text size="sm" mt="xs">
              なお、AIモデルは学習データに基づいて結果を生成するため、
              「常に正確な結果が得られる」「特定の作品や作家のスタイルを再現しない」ことを完全に保証するものではありません。
            </Text>
          </section>

          {/* 3. 生成プロセスとログ */}
          <section>
            <Title order={2} size="h3" mb="xs">
              3. 生成プロセスとログの取り扱い
            </Title>
            <Text size="sm">
              本サービスでは、以下のような情報を生成処理のログとして保存・利用する場合があります。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>生成に使用したプロンプトや一部の設定情報</List.Item>
              <List.Item>生成した画像のサムネイルまたは関連メタデータ</List.Item>
              <List.Item>生成日時、使用したモデル種別、エラー情報 等</List.Item>
            </List>
            <Text size="sm" mt="xs">
              これらの情報は、主に以下の目的で利用されます。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>生成品質の向上および不具合の調査</List.Item>
              <List.Item>不適切なコンテンツや不正利用の検知・防止</List.Item>
              <List.Item>サービスの改善・新機能の検討（統計的な分析を含みます）</List.Item>
            </List>
            <Text size="xs" c="dimmed" mt="xs">
              ※ 個人情報やログの取り扱いについては、
              <Anchor href="/privacy" size="xs">
                プライバシーポリシー
              </Anchor>
              もあわせてご確認ください。
            </Text>
          </section>

          {/* 4. 生成コンテンツの権利と利用 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              4. 生成コンテンツの権利と利用
            </Title>
            <Text size="sm">
              AIによって生成されたイラスト（以下「生成コンテンツ」といいます。）の権利や利用条件については、
              本サービスの
              <Anchor href="/license" size="sm">
                「著作権・ライセンス」
              </Anchor>
              の定めに従うものとします。
            </Text>
            <Text size="sm" mt="xs">
              ユーザーは、生成コンテンツについて、法令および本サービスの
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              、
              <Anchor href="/guidelines" size="sm">
                投稿ガイドライン
              </Anchor>
              に反しない範囲で利用してください。
              また、第三者の権利を侵害するおそれがある利用（他者作品の模倣・違法アップロード等）は禁止されています。
            </Text>
          </section>

          {/* 5. 制限事項・注意点 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              5. 制限事項・注意点
            </Title>
            <Text size="sm">
              AI生成機能の性質上、以下の点についてあらかじめご理解ください。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>同じプロンプトを使用しても、毎回同一の画像が生成されるとは限りません。</List.Item>
              <List.Item>生成結果がユーザーの意図と異なる場合があります。</List.Item>
              <List.Item>技術的制限や安全対策により、特定のプロンプトや表現が制限されることがあります。</List.Item>
              <List.Item>不適切な表現（暴力・差別・性的な内容など）を含む生成は、制限・ブロックされる場合があります。</List.Item>
            </List>
            <Text size="sm" mt="xs">
              生成コンテンツを外部サービス等で利用する場合は、各サービスの利用規約やガイドラインもご確認ください。
            </Text>
          </section>

          {/* 6. 不適切な生成への対応 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              6. 不適切な生成・利用への対応
            </Title>
            <Text size="sm">
              本サービスでは、安全な利用環境を維持するため、次のような対応を行う場合があります。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>不適切なプロンプトに対する生成処理の拒否または制限</List.Item>
              <List.Item>不適切な生成コンテンツの非表示・削除</List.Item>
              <List.Item>悪質な利用に対するアカウント制限・停止</List.Item>
            </List>
            <Text size="sm" mt="xs">
              不適切なコンテンツを発見した場合は、
              <Anchor href="/contact" size="sm">
                お問い合わせページ
              </Anchor>
              または通報機能（実装されている場合）からご連絡ください。
            </Text>
          </section>

          {/* 7. モデル・仕様の変更 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              7. モデルおよび仕様の変更
            </Title>
            <Text size="sm">
              AIモデルや生成ロジックは、品質向上や安全性確保のため、予告なく変更・アップデートされる場合があります。
              これにより、同一のプロンプトを用いても過去と異なる結果が生成されることがあります。
            </Text>
          </section>

          {/* 8. 本ページの位置づけ */}
          <section>
            <Title order={2} size="h3" mb="xs">
              8. 本ページの位置づけ
            </Title>
            <Text size="sm">
              本ページは、本サービスにおけるAI生成機能の概要および方針を説明するものであり、
              詳細な利用条件は
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              、
              <Anchor href="/privacy" size="sm">
                プライバシーポリシー
              </Anchor>
              および
              <Anchor href="/license" size="sm">
                著作権・ライセンス
              </Anchor>
              の内容が優先されます。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              制定日：{currentYear}年〇月〇日
              <br />
              本ページの内容やAI生成機能に関するご質問は、
              <Anchor href="/contact" size="xs">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
            </Text>
          </section>
        </Stack>
      </Paper>
    </Container>
  );
};