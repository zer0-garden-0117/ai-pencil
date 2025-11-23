import { Box, Flex, Stack, Text } from '@mantine/core';
import { useTranslations } from "next-intl";
import { useNavigate } from '@/utils/navigate';
import { useState } from 'react';
import classes from './Logo.module.css';
import { IconCube, IconPencil, IconPencilCode, IconPencilCog, IconPencilHeart, IconPencilX } from '@tabler/icons-react';

export interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = () => {
  const t = useTranslations("logo");
  const navigation = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const onClickLogo = () => {
    navigation("/");
  };

  return (
    <Flex
      direction="row"
      justify="flex-start"
      align="center"
      gap={4}
      onClick={onClickLogo}
      className={classes.logoContainer}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        transform: isActive ? 'scale(0.95)' : 'scale(1)',
        transition: 'transform 0.2s ease',
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Flex
        direction="column"
        gap={-3}
      >
      <Text
        fw={700}
        size="lg"
        style={{ fontFamily: 'var(--mantine-font-family)' }}
        c={"black"}
        ml={-13}
      >
        AIペンシル
      </Text>
      <Text
        fw={400}
        size="xs"
        style={{ fontFamily: 'var(--mantine-font-family)' }}
        c={"dimmed"}
        ml={-13}
      >
        AIイラストを作り、繋がるSNS
      </Text>
      </Flex>
    </Flex>
  );
};