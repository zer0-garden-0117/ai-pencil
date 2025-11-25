import '@mantine/core/styles.css';
import { type ReactNode } from "react";
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import localFont from 'next/font/local';

const notoSansJP = localFont({
  src: [
    {
      path: './fonts/NotoSansJP-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansJP-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

interface CustomMantineProviderProps {
  children: ReactNode;
}

export const CustomMantineProvider: React.FC<CustomMantineProviderProps> = ({ children }) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: `${notoSansJP.style.fontFamily}, sans-serif`,
        headings: { fontFamily: `${notoSansJP.style.fontFamily}, sans-serif` },
        components: {
          Icon: {
            defaultProps: {
              color: 'yellow',
            },
          },
        }
      }}
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
};