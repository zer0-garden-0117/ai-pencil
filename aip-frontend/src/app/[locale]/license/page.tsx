'use client';
import { License } from "@/components/Footer/License/License";
import { useTranslations } from "next-intl";

const LicensePage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <License />
    </>
  );
};

export default LicensePage;