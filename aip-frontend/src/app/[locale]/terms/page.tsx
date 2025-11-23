'use client';
import { Terms } from "@/components/Footer/Terms/Terms";
import { useTranslations } from "next-intl";

const TermsPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <Terms />
    </>
  );
};

export default TermsPage;