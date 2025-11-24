import { useRouter } from "next/navigation";

type UseBillCompletedrops = {
  priceId: string;
};

export const useBillCompleted = ({ priceId }: UseBillCompletedrops) => {
  const router = useRouter();

  const PRODUCT_NAME_MAP: Record<string, string> = {
    [process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_BASIC ?? ""]: "Basic",
    [process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_BOOST_S ?? ""]: "Boost S",
    [process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_BOOST_M ?? ""]: "Boost M",
    [process.env.NEXT_PUBLIC_STRIPE_PRODUCT_ID_BOOST_L ?? ""]: "Boost L",
  };

  const productName = PRODUCT_NAME_MAP[priceId] ?? "Unknown";

  const handleDrawClick = () => {
    router.push("/illust/create");
  };

  return {
    productName,
    handleDrawClick,
  };
};