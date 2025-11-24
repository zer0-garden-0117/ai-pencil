import { useFirebaseAuthContext } from "@/providers/auth/firebaseAuthProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type UseBillCompletedrops = {
  priceId: string;
};

export const useBillCompleted = ({ priceId }: UseBillCompletedrops) => {
  const { getFreshIdToken } = useFirebaseAuthContext();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);


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

  useEffect(() => {
    const timer = setTimeout(async () => {
      // ユーザー情報を更新する
      await getFreshIdToken();
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return {
    productName,
    isLoading,
    handleDrawClick,
  };
};