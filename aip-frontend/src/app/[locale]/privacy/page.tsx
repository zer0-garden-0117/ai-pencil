'use client';
import { Privacy } from "@/components/Footer/Privacy/Privacy";
import { useTranslations } from "next-intl";

const PrivacyPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <Privacy />
    </>
  );
};

export default PrivacyPage;