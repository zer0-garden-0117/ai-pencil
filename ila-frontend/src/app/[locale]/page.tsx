'use client';
import FollowWorkCards from "@/components/Content/FollowWorkCards/FollowWorkCards";
import FilterWorkCards from "@/components/Content/FilterWorkCards/FilterWorkCards";
import { Card, Space } from "@mantine/core";
import { useTranslations } from "next-intl";

const TopPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <Card withBorder>
        <FilterWorkCards filterType="new" />
        <Space h="md" />
        <FollowWorkCards />
        <Space h="md" />
        <FilterWorkCards filterType="random"/>
        <Space h="md" />
        <FilterWorkCards filterType="recommended"/>
      </Card>
    </>
  );
};

export default TopPage;