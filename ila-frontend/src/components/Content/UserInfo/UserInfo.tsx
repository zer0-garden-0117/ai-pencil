'use client';

import React from 'react';
import { useUserInfo } from './UserInfo.hook';
import { UserInfoView } from './UserInfo.view';

type UserInfoProps = {
  userId: string;
  tab: string;
  page: number;
  settingModal: boolean;
  callbackUrl: string | undefined;
};

export const UserInfo: React.FC<UserInfoProps> = (
  { userId, tab, page, settingModal, callbackUrl }
): JSX.Element => {
  const viewProps = useUserInfo({ userId, tab, page, settingModal, callbackUrl });
  return <UserInfoView {...viewProps} />;
};

export default UserInfo;