'use client';
import { HelpFaq } from "@/components/Footer/HelpFaq/HelpFaq";
import { useTranslations } from "next-intl";

const HelpPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <HelpFaq />
    </>
  );
};

export default HelpPage;