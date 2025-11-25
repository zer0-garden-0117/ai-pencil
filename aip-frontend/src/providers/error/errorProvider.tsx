'use client';
import React, { createContext, useState, useContext, ReactNode, useRef } from 'react';
import { SWRConfig } from 'swr';
import { notifications } from '@mantine/notifications';

interface ErrorState {
  title: string;
  message?: ReactNode;
}

interface ErrorContextType {
  error: ErrorState | null;
  setError: (error: ErrorState | null) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

const DEFAULT_ERROR_MESSAGES: Record<number, string> = {
  400: '不正なリクエストです。',
  401: 'ログインの有効期限が切れました。再ログインしてください。',
  403: 'この操作を行う権限がありません。',
  404: 'お探しのデータが見つかりませんでした。',
  429: 'しばらく時間をおいて再度お試しください。（リクエストが多すぎます）',
  500: 'サーバーエラーが発生しました。時間をおいて再度お試しください。',
};

const ERROR_AUTOCLOSE_MS = 2000;
const ERROR_COOLDOWN_MS = 30000;

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [error, setError] = useState<ErrorState | null>(null);

  // いま「エラー通知表示中かどうか」を覚えておくフラグ
  const isShowingErrorRef = useRef(false);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <SWRConfig
        value={{
          onError: (error: any) => {
            if (isShowingErrorRef.current) {
              return;
            }

            isShowingErrorRef.current = true;
            setTimeout(() => {
              isShowingErrorRef.current = false;
            }, ERROR_COOLDOWN_MS);

            // 1. ネットワークレベルのエラー
            if (error instanceof TypeError) {
              notifications.show({
                id: 'global-error',
                title: '通信エラー',
                message: 'サーバーに接続できませんでした。時間をおいて再度お試しください。',
                color: 'gray',
                autoClose: ERROR_AUTOCLOSE_MS,
                withCloseButton: false,
                radius: 'md',
                styles: {
                  description: { fontSize: 14 },
                },
              });
              return;
            }

            // 2. HTTPステータス付きのエラー
            const status: number | undefined = error.status;
            if (status) {
              const fallbackMessage =
                DEFAULT_ERROR_MESSAGES[status] ?? 'エラーが発生しました。時間をおいて再度お試しください。';

              const messageFromError =
                error.message && typeof error.message === 'string'
                  ? error.message
                  : undefined;

              const finalMessage = messageFromError || fallbackMessage;

              notifications.show({
                id: 'global-error',
                title: `エラー (${status})`,
                message: finalMessage,
                color: 'gray',
                autoClose: ERROR_AUTOCLOSE_MS,
                withCloseButton: false,
                radius: 'md',
                styles: {
                  description: { fontSize: 14 },
                },
              });

              return;
            }

            // 3. それ以外のエラー
            notifications.show({
              id: 'global-error',
              title: 'エラー',
              message: error?.message ?? '処理に失敗しました。時間をおいて再度お試しください。',
              color: 'gray',
              autoClose: ERROR_AUTOCLOSE_MS,
              withCloseButton: false,
              radius: 'md',
              styles: {
                description: { fontSize: 14 },
              },
            });
          },
        }}
      >
        {children}
      </SWRConfig>
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};