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
  Card,
} from '@mantine/core';

export const Terms: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <Card withBorder padding="md" radius="md">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h5">
              利用規約
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              この利用規約（以下「本規約」といいます。）は、AIイラストSNSサービス「AIペンシル」（以下「本サービス」といいます。）の利用条件を定めるものです。
              本サービスをご利用になる前に、必ず本規約をお読みください。ユーザーが本サービスを利用した時点で、本規約に同意したものとみなします。
            </Text>
          </div>

          <Divider />

          {/* 第1条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第1条（適用範囲）
            </Title>
            <Text size="sm">
              1. 本規約は、ユーザーと本サービスの運営者（以下「運営者」といいます。）との間の、本サービスの利用に関わる一切の関係に適用されます。
              <br />
              2. 運営者が本サービス上で掲載する各種ルール、ガイドライン等（
              <Anchor href="/guidelines" size="sm">
                投稿ガイドライン
              </Anchor>
              等を含みますが、これらに限りません）は、本規約の一部を構成するものとします。
            </Text>
          </section>

          {/* 第2条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第2条（定義）
            </Title>
            <Text size="sm">
              本規約において使用する用語の定義は、次の各号のとおりとします。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>「ユーザー」とは、本サービスを閲覧または利用する全ての方をいいます。</List.Item>
              <List.Item>
                「コンテンツ」とは、本サービス上で投稿・生成・表示される画像、文章、コメント、プロフィールその他一切のデータをいいます。
              </List.Item>
              <List.Item>
                「生成コンテンツ」とは、本サービスまたは外部ツールによりAI生成されたイラスト等のコンテンツをいいます。
              </List.Item>
            </List>
          </section>

          {/* 第3条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第3条（アカウント登録）
            </Title>
            <Text size="sm">
              1. 本サービスの一部機能を利用するためには、運営者が定める方法によりアカウント登録が必要となる場合があります。
              <br />
              2. ユーザーは、登録情報について真実かつ正確な情報を提供し、常に最新の状態に保つものとします。
              <br />
              3. アカウントに紐づくID・パスワード等の管理はユーザー自身の責任で行うものとし、第三者による利用や不正アクセスについて運営者は責任を負いません。
            </Text>
          </section>

          {/* 第4条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第4条（コンテンツの投稿・生成）
            </Title>
            <Text size="sm">
              1. ユーザーは、本サービスを通じてコンテンツを投稿・生成するにあたり、自己の責任において行うものとします。
              <br />
              2. 投稿・生成されたコンテンツの著作権・利用条件等の取り扱いは、
              <Anchor href="/license" size="sm">
                「著作権・ライセンス」
              </Anchor>
              に定める内容に従うものとします。
              <br />
              3. ユーザーは、第三者の著作権、肖像権、その他一切の権利を侵害しないよう十分に注意するものとします。
            </Text>
          </section>

          {/* 第5条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第5条（禁止事項）
            </Title>
            <Text size="sm">ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</Text>
            <List size="sm" mt="xs">
              <List.Item>法令または公序良俗に違反する行為</List.Item>
              <List.Item>他のユーザーまたは第三者の権利・利益を侵害する行為</List.Item>
              <List.Item>過度に暴力的な表現、差別的表現、犯罪行為を助長する表現等を含むコンテンツの投稿</List.Item>
              <List.Item>
                性的・わいせつな表現、年齢制限が必要な表現を、運営者の定める
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
                に反して投稿・表示する行為
              </List.Item>
              <List.Item>本サービスの運営を妨害する行為、またはそのおそれのある行為</List.Item>
              <List.Item>不正アクセス、なりすまし、スパム行為、その他不正な目的で本サービスを利用する行為</List.Item>
              <List.Item>その他、運営者が不適切と判断する行為</List.Item>
            </List>
          </section>

          {/* 第6条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第6条（AI生成に関する注意事項）
            </Title>
            <Text size="sm">
              1. 本サービスは、AI技術を利用してイラスト等を生成する機能を提供する場合がありますが、その生成結果の正確性、唯一性、有用性等について、一切の保証を行いません。
              <br />
              2. 生成コンテンツの利用により生じたトラブルや損害については、ユーザー自身の責任と負担において解決するものとし、運営者は一切の責任を負いません。
              <br />
              3. AIモデルおよび生成プロセスに関する詳細は、
              <Anchor href="/ai-policy" size="sm">
                「AI生成について」
              </Anchor>
              に定めるものとします。
            </Text>
          </section>

          {/* 第7条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第7条（コンテンツの取り扱い・削除）
            </Title>
            <Text size="sm">
              1. 運営者は、ユーザーが投稿・生成したコンテンツについて、本サービスの運営・表示・プロモーション等のために必要な範囲で利用できるものとします。
              <br />
              2. 運営者は、ユーザーが本規約または投稿ガイドラインに違反していると判断した場合、事前の通知なくコンテンツの非表示・削除、アカウントの制限・停止等の措置を行うことができます。
              <br />
              3. ユーザーが自らコンテンツを削除した場合であっても、バックアップや技術的な理由により、一定期間データが残存することがあります。
            </Text>
          </section>

          {/* 第8条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第8条（本サービスの変更・停止）
            </Title>
            <Text size="sm">
              1. 運営者は、ユーザーへの事前通知の有無にかかわらず、本サービスの内容の全部または一部を変更・追加・廃止することができます。
              <br />
              2. システム保守、障害対応、天災地変その他やむを得ない事由により、本サービスの提供を一時的に中断または停止する場合があります。
            </Text>
          </section>

          {/* 第9条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第9条（免責事項）
            </Title>
            <Text size="sm">
              1. 運営者は、本サービスの提供、変更、中断、停止、終了、または本サービスを通じて得られる情報等に起因してユーザーに生じた損害について、一切の責任を負いません。
              <br />
              2. ユーザー同士、またはユーザーと第三者との間で生じたトラブルについて、運営者は一切関与せず、責任を負いません。
            </Text>
          </section>

          {/* 第10条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第10条（規約の変更）
            </Title>
            <Text size="sm">
              1. 運営者は、必要と判断した場合、本規約を変更することができます。
              <br />
              2. 本規約を変更する場合、その内容および効力発生日を本サービス上での表示その他適切な方法で周知し、効力発生日以降にユーザーが本サービスを利用した場合、変更後の規約に同意したものとみなします。
            </Text>
          </section>

          {/* 第11条 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              第11条（準拠法・管轄）
            </Title>
            <Text size="sm">
              1. 本規約の解釈および適用は、日本法を準拠法とします。
              <br />
              2. 本サービスに関してユーザーと運営者との間で生じた紛争については、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              制定日：2025年11月23日
              <br />
              本規約に関するお問い合わせは、
              <Anchor href="/contact" size="xs">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
            </Text>
          </section>
        </Stack>
      </Card>
  );
};