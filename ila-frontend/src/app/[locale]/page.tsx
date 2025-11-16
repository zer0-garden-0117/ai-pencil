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
      <FilterWorkCards />
      <Space h="md" />
      <FollowWorkCards />
      </Card>
    </>
  );
};

export default TopPage;