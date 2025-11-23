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

export const License: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container size="md" py="xl">
      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h2">
              著作権・ライセンスについて
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本ページでは、AIイラストSNSサービス「AIペンシル」（以下「本サービス」といいます。）における
              コンテンツの著作権およびライセンスの取り扱いについて説明します。
              本サービスでイラストを「作る・投稿する・見つける」際には、
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              や
              <Anchor href="/guidelines" size="sm">
                投稿ガイドライン
              </Anchor>
              とあわせてご確認ください。
            </Text>
          </div>

          <Divider />

          {/* 1. コンテンツの定義 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              1. コンテンツの定義
            </Title>
            <Text size="sm">
              本サービスにおける「コンテンツ」とは、ユーザーが本サービスを通じて投稿・生成・アップロードする
              一切の情報（イラスト画像、テキスト、タグ、プロフィール画像等）を指します。
            </Text>
          </section>

          {/* 2. 著作権の帰属 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              2. 著作権の帰属
            </Title>
            <Text size="sm">
              1. ユーザーが本サービスに投稿したコンテンツ（AI生成コンテンツを含みます）の著作権は、
              原則として当該コンテンツを創作・生成・投稿したユーザーに帰属します。
              <br />
              2. ただし、ユーザーが他者の著作物を無断で利用した場合など、
              ユーザー自身に著作権がないコンテンツについては、この限りではありません。
            </Text>
          </section>

          {/* 3. 運営者への利用許諾（ライセンス） */}
          <section>
            <Title order={2} size="h3" mb="xs">
              3. 本サービス運営者への利用許諾（ライセンス）
            </Title>
            <Text size="sm">
              ユーザーは、本サービスにコンテンツを投稿することにより、運営者に対して、以下の範囲で
              当該コンテンツを無償で利用する権利（非独占的ライセンス）を付与するものとします。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>本サービス上での表示、配信、保存および複製</List.Item>
              <List.Item>一覧ページやランキング表示など、本サービスの機能提供のための利用</List.Item>
              <List.Item>本サービスの紹介・プロモーションのための、Webサイト・SNS等での掲載（必要に応じて引用・サムネイル化等を含みます）</List.Item>
            </List>
            <Text size="sm" mt="xs">
              これらの利用は、本サービスの運営・改善およびコミュニティ形成のために行うものであり、
              ユーザーの権利を不当に制限することを目的とするものではありません。
            </Text>
          </section>

          {/* 4. ユーザーによる利用（個人・商用利用など） */}
          <section>
            <Title order={2} size="h3" mb="xs">
              4. ユーザーによるコンテンツの利用（個人・商用利用など）
            </Title>
            <Text size="sm">
              1. ユーザー自身が生成・投稿したコンテンツを本サービス外で利用するかどうか（個人利用・商用利用等を含みます）は、
              ユーザー自身の判断と責任において行ってください。
              <br />
              2. 第三者が他のユーザーのコンテンツを利用する場合は、著作権法その他の法令に従い、
              必要に応じて権利者本人の許諾を得る必要があります。
              <br />
              3. 本サービス上で他ユーザーのコンテンツを閲覧・ブックマーク・シェア（共有機能を利用する場合）することは、
              本サービスの機能の範囲内で許容されますが、それを超える利用（無断転載、二次配布等）は禁止されます。
            </Text>
          </section>

          {/* 5. AI生成コンテンツに関する注意点 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              5. AI生成コンテンツに関する注意点
            </Title>
            <Text size="sm">
              1. AI生成コンテンツは、学習データやモデル特性に依存するため、
              既存作品や特定の作家・キャラクターなどと類似した結果が生成される可能性があります。
              そのため、外部サービスや商用利用を行う際には、ユーザー自身の責任で権利関係をご確認ください。
              <br />
              2. 公的キャラクター、実在の人物、ブランドロゴ等に類似するコンテンツについては、
              権利侵害となるおそれがあります。そのような利用は避けてください。
              <br />
              3. AI生成機能の概要や方針については、
              <Anchor href="/ai-policy" size="sm">
                「AI生成について」
              </Anchor>
              もご参照ください。
            </Text>
          </section>

          {/* 6. 禁止される利用例 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              6. 禁止されるコンテンツ利用の例
            </Title>
            <Text size="sm">
              本サービス上のコンテンツ（自分のもの・他人のものを問わず）について、次のような利用は原則として禁止されます。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>権利者の許諾なく、他者のコンテンツを転載・再配布する行為</List.Item>
              <List.Item>他者のコンテンツを自作であるかのように偽る行為</List.Item>
              <List.Item>コンテンツを用いて、第三者の名誉・信用を毀損する行為</List.Item>
              <List.Item>法令や公序良俗に反する目的でコンテンツを利用する行為</List.Item>
              <List.Item>
                その他、
                <Anchor href="/terms" size="sm">
                  利用規約
                </Anchor>
                および
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
                に違反する用途
              </List.Item>
            </List>
          </section>

          {/* 7. コンテンツの削除・利用停止 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              7. コンテンツの削除・利用停止
            </Title>
            <Text size="sm">
              1. ユーザーは、自身の投稿コンテンツを本サービスの機能を通じて削除できる場合があります。
              <br />
              2. 運営者は、次のいずれかに該当すると判断した場合、事前の通知なくコンテンツの削除・非表示・利用停止等の対応を行うことがあります。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>本サービスの
                <Anchor href="/terms" size="sm">
                  利用規約
                </Anchor>
                や
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
                に違反する場合
              </List.Item>
              <List.Item>第三者から権利侵害の申し立てがあり、対応が必要と判断される場合</List.Item>
              <List.Item>法令または公的機関からの要請があった場合</List.Item>
              <List.Item>その他、本サービスの運営上やむを得ない事情がある場合</List.Item>
            </List>
          </section>

          {/* 8. 免責と注意事項 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              8. 免責および注意事項
            </Title>
            <Text size="sm">
              1. 本サービス上のコンテンツ利用に関連してユーザー間または第三者との間で発生したトラブルについては、
              当事者間で解決するものとし、運営者は原則として責任を負いません。
              <br />
              2. 本ページの内容は一般的なガイドラインであり、特定の利用ケースに対する法的助言を行うものではありません。
              必要に応じて専門家（弁護士等）にご相談ください。
            </Text>
          </section>

          {/* 9. 本ページの位置づけと変更 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              9. 本ページの位置づけと変更
            </Title>
            <Text size="sm">
              1. 本ページの内容は、本サービスにおける著作権・ライセンスの基本的な考え方を示すものであり、
              詳細については
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              が優先されます。
              <br />
              2. 本サービスの運営方針や法令の変更等に応じて、本ページの内容は予告なく改定される場合があります。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              制定日：{currentYear}年〇月〇日
              <br />
              本ページの内容やコンテンツの権利に関するご質問は、
              <Anchor href="/contact" size="xs">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
            </Text>
          </section>
        </Stack>
      </Paper>

      <Space h="xl" />
    </Container>
  );
};