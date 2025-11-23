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

export const HelpFaq: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
      <Card withBorder padding="md" radius="md">
        <Stack gap="lg">
          {/* 見出し */}
          <div>
            <Title order={1} size="h5">
              ヘルプ・FAQ
            </Title>
            <Text c="dimmed" size="sm" mt="xs">
              このページでは、AIイラストSNSサービス「AIペンシル」に関する
              よくある質問と、その回答をまとめています。
              初めてご利用の方や、使い方で困ったときにご参考ください。
            </Text>
          </div>

          <Divider />

          {/* セクション1：アカウント・基本事項 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              1. アカウント・ログインについて
            </Title>

            <Stack gap="sm">
              <div>
                <Text fw={600} size="sm">
                  Q1-1. アカウント登録は必須ですか？
                </Text>
                <Text size="sm" mt={2}>
                  一部の機能（イラストの投稿、いいね・フォロー、AI生成機能など）を利用するには、
                  アカウント登録・ログインが必要です。
                  閲覧のみであれば、ログインなしでも利用できる場合があります。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q1-2. ログインできません／エラーが出ます。
                </Text>
                <Text size="sm" mt={2}>
                  ブラウザを再読み込みしたり、シークレットウィンドウでお試しください。
                  それでも改善しない場合は、
                  <Anchor href="/contact" size="sm">
                    お問い合わせページ
                  </Anchor>
                  から状況（エラーメッセージやご利用の環境など）をお知らせください。
                </Text>
              </div>
            </Stack>
          </section>

          {/* セクション2：AI生成・投稿機能 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              2. AIイラストの生成・投稿について
            </Title>

            <Stack gap="sm">
              <div>
                <Text fw={600} size="sm">
                  Q2-1. どのようにAIイラストを生成できますか？
                </Text>
                <Text size="sm" mt={2}>
                  ログイン後、生成画面からプロンプト（テキストの指示）や各種設定を入力し、
                  生成ボタンを押すことでAIイラストを作成できます。
                  詳細は、今後追加予定のガイドやチュートリアルもご参照ください。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q2-2. 生成したイラストは自動的に公開されますか？
                </Text>
                <Text size="sm" mt={2}>
                  生成直後は下書き・履歴状態として保存し、投稿操作を行うことで
                  公開される仕様にすることを想定しています（実装状況に応じて調整）。
                  公開範囲やレーティングを確認したうえで投稿してください。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q2-3. 生成したイラストを外部サービスで使ってもいいですか？
                </Text>
                <Text size="sm" mt={2}>
                  ご自身が生成・投稿したイラストの外部利用（個人利用・商用利用など）については、
                  ユーザーご自身の判断と責任でお願いします。
                  詳細は、
                  <Anchor href="/license" size="sm">
                    「著作権・ライセンスについて」
                  </Anchor>
                  をご確認ください。
                </Text>
              </div>
            </Stack>
          </section>

          {/* セクション3：閲覧設定・R18関連 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              3. 閲覧設定・センシティブ内容について
            </Title>

            <Stack gap="sm">
              <div>
                <Text fw={600} size="sm">
                  Q3-1. R-18 やセンシティブなイラストは表示されますか？
                </Text>
                <Text size="sm" mt={2}>
                  本サービスでは、閲覧者の設定に応じて、センシティブなコンテンツは
                  自動的に非表示・ロック・ぼかし表示などの制御が行われます。
                  デフォルトでは安全寄りの設定になっています。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q3-2. 閲覧設定（表示するコンテンツの範囲）はどこで変更できますか？
                </Text>
                <Text size="sm" mt={2}>
                  ログイン後、ユーザー設定画面から閲覧レーティングに関する設定を変更できます。
                  具体的な項目名や仕様は、今後のアップデートにより変更される場合があります。
                  不明な点があれば、
                  <Anchor href="/contact" size="sm">
                    お問い合わせページ
                  </Anchor>
                  よりご質問ください。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q3-3. 不適切なイラストを見つけた場合はどうすればよいですか？
                </Text>
                <Text size="sm" mt={2}>
                  通報機能がある場合は、該当のイラスト詳細ページから通報をお願いします。
                  まだ通報機能がない場合やうまく利用できない場合は、
                  イラストのURLを添えて
                  <Anchor href="/contact" size="sm">
                    お問い合わせページ
                  </Anchor>
                  からご連絡ください。
                </Text>
              </div>
            </Stack>
          </section>

          {/* セクション4：トラブル・不具合 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              4. トラブル・不具合について
            </Title>

            <Stack gap="sm">
              <div>
                <Text fw={600} size="sm">
                  Q4-1. 画面が正しく表示されません／画像が読み込まれません。
                </Text>
                <Text size="sm" mt={2}>
                  ブラウザの再読み込み、キャッシュの削除、別ブラウザでのアクセスをお試しください。
                  それでも解決しない場合は、発生している状況や端末・ブラウザ情報を添えて
                  <Anchor href="/contact" size="sm">
                    お問い合わせページ
                  </Anchor>
                  よりご連絡ください。
                </Text>
              </div>

              <div>
                <Text fw={600} size="sm">
                  Q4-2. 不具合や改善要望を送ることはできますか？
                </Text>
                <Text size="sm" mt={2}>
                  はい、歓迎しています。
                  本サービスは個人運営のため、すべてに即時対応はできませんが、
                  いただいたご意見は今後のアップデート検討の参考にさせていただきます。
                </Text>
              </div>
            </Stack>
          </section>

          {/* セクション5：ポリシー・ルール関連 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              5. 各種ポリシー・ルールについて
            </Title>

            <Text size="sm">
              本サービスのご利用にあたっては、以下の各ポリシーもあわせてご確認ください。
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
          </section>

          {/* お問い合わせ案内 */}
          <section>
            <Title order={2} size="h6" mb="xs">
              6. 解決しない場合は
            </Title>
            <Text size="sm">
              このページの内容を確認しても解決しない場合や、
              個別の事情があるご相談については、
              <Anchor href="/contact" size="sm">
                お問い合わせページ
              </Anchor>
              よりご連絡ください。
              可能な範囲で回答・対応させていただきます。
            </Text>
          </section>

          {/* 末尾情報 */}
          <section>
            <Text size="xs" c="dimmed">
              最終更新日：{currentYear}年〇月〇日
              <br />
              FAQの内容は、サービスのアップデートにあわせて随時見直し・更新される場合があります。
            </Text>
          </section>
        </Stack>
      </Card>
  );
};