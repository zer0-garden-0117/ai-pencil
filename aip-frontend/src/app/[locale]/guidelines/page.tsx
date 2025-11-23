'use client';
import { Guidelines } from "@/components/Footer/Guidelines/Guidelines";
import { useTranslations } from "next-intl";

const GuidelinesPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <Guidelines />
    </>
  );
};

export default GuidelinesPage;