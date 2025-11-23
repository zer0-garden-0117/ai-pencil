import { useRouter } from "next/navigation";

type UseBillCompletedrops = {
  priceId: string;
};

export const useBillCompleted = (
  { priceId }: UseBillCompletedrops
) => {

  const router = useRouter();

  const productName = 
    priceId === 'price_1SWf1pGV099jFwTVuuj4K0dj' ? 'Basic' :
    priceId === 'price_1SFuRWGV099jFwTVqJj2MZUG' ? 'Boost S' :
    priceId === 'price_1SFuRyGV099jFwTVZWPwlLq0' ? 'Boost M' :
    priceId === 'price_1SFuTHGV099jFwTVP7VUCctG' ? 'Boost L' :
    'Unknown';

  const handleDrawClick = () => {
    router.push('/illust/create');
  }

  return {
    productName,
    handleDrawClick,
  };
};