'use client';
import { AiPolicy } from "@/components/Footer/AiPolicy/AiPolicy";
import { useTranslations } from "next-intl";

const AiPolicyPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <AiPolicy />
    </>
  );
};

export default AiPolicyPage;