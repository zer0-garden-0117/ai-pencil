import client from "../apiClient";
import type { AuthHeader } from "../apiClient";
import type { operations } from "../../../generated/services/ila-v1";
import useSWRMutation, {
  SWRMutationConfiguration,
  SWRMutationResponse,
} from "swr/mutation";

export type MyUserViewRatingUpdateResult =
  operations["patchMyUserViewRating"]["responses"]["200"]["content"]["application/json"];

export type MyUserViewRatingUpdateRequestBody =
  operations["patchMyUserViewRating"]["requestBody"]["content"]["application/json"];

export type MyUserViewRatingUpdateHeader = AuthHeader;

export type MyUserViewRatingUpdateArgs = {
  headers?: MyUserViewRatingUpdateHeader;
  body: MyUserViewRatingUpdateRequestBody;
};

export const useMyUserViewRatingUpdate = (
  options?: SWRMutationConfiguration<
    MyUserViewRatingUpdateResult,
    Error,
    string,
    MyUserViewRatingUpdateArgs
  >
): SWRMutationResponse<
  MyUserViewRatingUpdateResult,
  Error,
  string,
  MyUserViewRatingUpdateArgs
> => {
  return useSWRMutation<
    MyUserViewRatingUpdateResult,
    Error,
    string,
    MyUserViewRatingUpdateArgs
  >(
    `/me/viewrating`,
    async (_, { arg }): Promise<MyUserViewRatingUpdateResult> => {
      const { data, error } = await client.PATCH(`/me/viewrating`, {
        headers: {
          Authorization: `${arg?.headers?.Authorization}`,
          "Content-Type": "application/json",
        },
        body: arg.body,
      });

      if (error) {
        throw error;
      }
      return data;
    },
    options
  );
};