'use client';

import UserInfo from "@/components/Content/UserInfo/UserInfo";

const UserPage: React.FC<
  {
    params: { id: string },
    searchParams: { tab?: string, page?: string, settingModal?: boolean, callback?: string}
  }
> = (
  { params, searchParams }
) => {
  const userId = decodeURIComponent(params.id);
  const tab = searchParams.tab ?? 'home';
  const page = Number(searchParams.page ?? 1);
  const settingModal = searchParams.settingModal ?? false;
  const callback = searchParams.callback ?? undefined;

  return (
    <UserInfo
      userId={userId}
      tab={tab}
      page={page}
      settingModal={settingModal}
      callback={callback}
    />
  )
};

export default UserPage;