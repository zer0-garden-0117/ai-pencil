import client from "../apiClient";
import type { AuthHeader } from '../apiClient';
import type { operations } from "../../../generated/services/ila-v1";
import useSWRMutation, { SWRMutationConfiguration, SWRMutationResponse } from 'swr/mutation';

export type MyUserUpdateResult =
  operations["patchMyUser"]["responses"]["200"]["content"]["application/json"];

type ApiMyUserUpdateBody =
  operations["patchMyUser"]["requestBody"]["content"]["multipart/form-data"];

// OpenAPI 生成型をベースに、ファイル系だけ File に差し替え
export type MyUserUpdateRequestBody = Omit<ApiMyUserUpdateBody, "coverImage" | "profileImage"> & {
  coverImage?: File | null;
  profileImage?: File | null;
};

export type MyUserUpdateHeader = AuthHeader;

export type MyUserUpdateArgs = {
  headers?: MyUserUpdateHeader;
  body: MyUserUpdateRequestBody;
};

export const useMyUserUpdate = (
  options?: SWRMutationConfiguration<
    MyUserUpdateResult,
    Error,
    string,
    MyUserUpdateArgs
  >
): SWRMutationResponse<MyUserUpdateResult, Error, string, MyUserUpdateArgs> => {
  return useSWRMutation<MyUserUpdateResult, Error, string, MyUserUpdateArgs>(
    `/me`,
    async (_, { arg }): Promise<MyUserUpdateResult> => {
      const { data, error } = await client.PATCH(
        `/me`,
        {
          headers: {
            Authorization: `${arg?.headers?.Authorization}`,
            'Content-Type': 'multipart/form-data',
          },
          body: arg.body as unknown as any,
          bodySerializer: (body) => {
            const fd = new FormData();
            if (body.coverImage) {
              fd.append('coverImage', body.coverImage);
            }
            if (body.profileImage) {
              fd.append('profileImage', body.profileImage);
            }
            if (body.customUserId) {
              fd.append('customUserId', body.customUserId);
            }
            if (body.userName) {
              fd.append('userName', body.userName);
            }
            if (body.userProfile) {
              fd.append('userProfile', body.userProfile);
            }
            return fd;
          }
        }
      );
      if (error) {
        throw error;
      }
      return data;
    },
    options
  );
};