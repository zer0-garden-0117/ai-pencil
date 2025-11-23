import useSWRInfinite, {
  SWRInfiniteConfiguration,
  SWRInfiniteResponse,
} from 'swr/infinite';
import client from '../apiClient';
import type { operations } from '../../../generated/services/ila-v1';

export type PublicWorksGetResult =
  operations['getPublicWorksByFilter']['responses']['200']['content']['application/json'];
export type PublicWorks =
  operations['getPublicWorksByFilter']['responses']['200']['content']['application/json']['works'];

export type PublicWorksGetQuery = operations['getPublicWorksByFilter']['parameters']['query'];
export type FilterType = PublicWorksGetQuery['publicWorksFilterType'];

export type PublicWorksGetInfiniteArgs = {
  initialOffset?: PublicWorksGetQuery['offset'];
  limit: PublicWorksGetQuery['limit'];
  worksFilterType: PublicWorksGetQuery['publicWorksFilterType'];
  getIdTokenLatest: () => Promise<string | null>;
};

export const usePublicWorksGetByFilterInfinite = (
  args: PublicWorksGetInfiniteArgs,
  options?: SWRInfiniteConfiguration<PublicWorksGetResult, Error>
): SWRInfiniteResponse<PublicWorksGetResult, Error> => {
  const {
    initialOffset = 0,
    limit,
    worksFilterType,
    getIdTokenLatest,
  } = args;

  const getKey = (
    pageIndex: number,
    previousPageData: PublicWorksGetResult | null
  ) => {
    if (previousPageData && previousPageData?.works?.length === 0) {
      return null;
    }
    const offset = initialOffset + pageIndex * limit;
    return ['/public/works', offset, limit, worksFilterType] as const;
  };

  const fetcher = async (
    [, off, lim, filterType]: [
      string,
      PublicWorksGetQuery['offset'],
      PublicWorksGetQuery['limit'],
      PublicWorksGetQuery['publicWorksFilterType']
    ]
  ): Promise<PublicWorksGetResult> => {
    const token = await getIdTokenLatest();
    // if (!token) throw new Error('Failed to acquire latest ID token');
    // token が null の場合でもアクセス可能なAPIなので、そのまま進める

    const { data, error } = await client.GET('/public/works', {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        query: {
          offset: off,
          limit: lim,
          publicWorksFilterType: filterType,
        },
      },
    });

    if (error) throw error;
    return data;
  };

  return useSWRInfinite<PublicWorksGetResult, Error>(getKey, fetcher, {
    revalidateOnFocus: false,
    revalidateFirstPage: false,
    ...options,
  });
};