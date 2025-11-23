'use client';
import { About } from "@/components/Footer/About/About";
import { useTranslations } from "next-intl";

const AboutPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;