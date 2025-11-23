'use client';
import { Contact } from "@/components/Footer/Contact/Contact";
import { useTranslations } from "next-intl";

const ContactPage: React.FC = () => {
  const t = useTranslations("page");

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;