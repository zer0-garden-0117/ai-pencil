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

export const Privacy: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container size="md">
      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h2">
              プライバシーポリシー
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              本プライバシーポリシー（以下「本ポリシー」といいます。）は、AIイラストSNSサービス
              「AIペンシル」（以下「本サービス」といいます。）における、ユーザーの個人情報および
              関連情報の取り扱いについて定めるものです。
              本サービスをご利用になる前に、本ポリシーをよくお読みください。
            </Text>
          </div>

          <Divider />

          {/* 第1条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第1条（基本方針）
            </Title>
            <Text size="sm">
              運営者は、ユーザーのプライバシーを尊重し、個人情報の保護に関する法令およびガイドラインを遵守するとともに、
              安全かつ適切な管理を行うよう努めます。
              また、本サービスの提供に必要な範囲内でのみ、情報を取得・利用いたします。
            </Text>
          </section>

          {/* 第2条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第2条（取得する情報の種類）
            </Title>
            <Text size="sm">本サービスは、ユーザーから以下の情報を取得する場合があります。</Text>
            <List size="sm" mt="xs">
              <List.Item>メールアドレス、ユーザー名、プロフィール情報など、アカウント登録時にユーザーが入力する情報</List.Item>
              <List.Item>投稿した画像、説明文、タグ、コメントなど、本サービス上でユーザーが投稿・生成するコンテンツ</List.Item>
              <List.Item>IPアドレス、端末情報、ブラウザ情報、リファラ、利用日時、利用履歴など、本サービス利用時に自動的に送信される情報</List.Item>
              <List.Item>クッキー（Cookie）や類似技術を通じて取得されるアクセス情報</List.Item>
              <List.Item>不正利用の監視や品質向上のために必要な、AI生成処理に関するログ情報</List.Item>
            </List>
          </section>

          {/* 第3条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第3条（情報の利用目的）
            </Title>
            <Text size="sm">取得した情報は、主に次の目的のために利用します。</Text>
            <List size="sm" mt="xs">
              <List.Item>本サービスの提供、運営、維持および改善のため</List.Item>
              <List.Item>ユーザーアカウントの作成、本人確認、不正利用の防止のため</List.Item>
              <List.Item>生成・投稿機能、フォロー機能、いいね機能等のSNS機能を提供するため</List.Item>
              <List.Item>お問い合わせへの対応、お知らせや重要な通知の送信のため</List.Item>
              <List.Item>統計データの作成、サービス改善のための分析のため（個人を特定しない形式で利用）</List.Item>
              <List.Item>利用規約および
                <Anchor href="/guidelines" size="sm">
                  投稿ガイドライン
                </Anchor>
                等に違反する行為への対応のため
              </List.Item>
            </List>
          </section>

          {/* 第4条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第4条（クッキー等の利用）
            </Title>
            <Text size="sm">
              1. 本サービスでは、ユーザーの利便性向上やアクセス状況の分析のために、クッキー（Cookie）や
              ローカルストレージ等の技術を利用する場合があります。
              <br />
              2. ユーザーは、ブラウザの設定を変更することにより、クッキーの受け取りを拒否することができますが、
              その場合、本サービスの一部機能が利用できなくなることがあります。
            </Text>
          </section>

          {/* 第5条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第5条（外部サービス・第三者提供）
            </Title>
            <Text size="sm">
              1. 本サービスでは、認証、アクセス解析、ストレージ等の目的で、外部のサービスを利用する場合があります。
              これらの外部サービス事業者がユーザー情報を取り扱うことがありますが、その場合は、
              各事業者のプライバシーポリシーに従って取り扱われます。
              <br />
              2. 運営者は、次のいずれかに該当する場合を除き、ユーザーの個人情報を第三者に提供しません。
            </Text>
            <List size="sm" mt="xs">
              <List.Item>ユーザー本人の同意がある場合</List.Item>
              <List.Item>法令に基づき開示・提供が求められた場合</List.Item>
              <List.Item>人の生命・身体・財産の保護のために必要であり、ユーザーの同意を得ることが困難な場合</List.Item>
              <List.Item>本サービスの運営に必要な範囲で業務委託先に提供する場合（この場合、適切な管理・監督を行います）</List.Item>
            </List>
          </section>

          {/* 第6条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第6条（情報の管理・安全対策）
            </Title>
            <Text size="sm">
              運営者は、ユーザー情報への不正アクセス、紛失、破壊、改ざん、漏えい等を防止するため、
              適切な技術的・組織的な安全管理措置を講じます。
              ただし、インターネットの性質上、完全なセキュリティを保証するものではありません。
            </Text>
          </section>

          {/* 第7条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第7条（ユーザーによる開示・訂正・削除等の請求）
            </Title>
            <Text size="sm">
              1. ユーザーは、自身のアカウント情報やプロフィール情報を、本サービス上の設定画面等から確認・変更できる場合があります。
              <br />
              2. 本サービスが保有するユーザーの個人情報について、開示、訂正、利用停止、削除等をご希望の場合は、
              ご本人確認のうえ、合理的な範囲で対応いたします。
              <br />
              3. 具体的な手続きについては、
              <Anchor href="/contact" size="sm">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
            </Text>
          </section>

          {/* 第8条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第8条（投稿コンテンツとプライバシー）
            </Title>
            <Text size="sm">
              1. ユーザーが本サービス上で公開範囲を「公開」として投稿したコンテンツは、他のユーザーや第三者から閲覧される可能性があります。
              個人情報を含む内容を投稿する場合は、ユーザー自身の責任においてご注意ください。
              <br />
              2. 運営者は、プライバシー保護および
              <Anchor href="/terms" size="sm">
                利用規約
              </Anchor>
              の遵守の観点から、不適切と判断されたコンテンツについて、削除や非表示等の対応を行うことがあります。
            </Text>
          </section>

          {/* 第9条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第9条（統計情報の利用）
            </Title>
            <Text size="sm">
              運営者は、個人を特定できない形式に加工した統計情報を作成し、サービスの改善や新機能の検討等に利用することがあります。
              これらの統計情報については、第三者に開示・提供する場合がありますが、個人を特定することはできません。
            </Text>
          </section>

          {/* 第10条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第10条（本ポリシーの変更）
            </Title>
            <Text size="sm">
              1. 運営者は、必要に応じて本ポリシーの内容を変更することがあります。
              <br />
              2. 本ポリシーを変更する場合、その内容および効力発生日を本サービス上での表示その他適切な方法で周知します。
              <br />
              3. 効力発生日以降にユーザーが本サービスを利用した場合、変更後の本ポリシーに同意したものとみなします。
            </Text>
          </section>

          {/* 第11条 */}
          <section>
            <Title order={2} size="h3" mb="xs">
              第11条（お問い合わせ窓口）
            </Title>
            <Text size="sm">
              本ポリシーおよびユーザー情報の取り扱いに関するお問い合わせは、
              <Anchor href="/contact" size="sm">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              制定日：{currentYear}年〇月〇日
              <br />
              本ポリシーは、必要に応じて改定される場合があります。
            </Text>
          </section>
        </Stack>
      </Paper>
    </Container>
  );
};