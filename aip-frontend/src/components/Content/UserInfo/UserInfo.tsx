'use client';

import React from 'react';
import { useUserInfo } from './UserInfo.hook';
import { UserInfoView } from './UserInfo.view';

type UserInfoProps = {
  userId: string;
  tab: string;
  page: number;
  settingModal: boolean;
  callback: string | undefined;
};

export const UserInfo: React.FC<UserInfoProps> = (
  { userId, tab, page, settingModal, callback }
): JSX.Element => {
  const viewProps = useUserInfo({ userId, tab, page, settingModal, callback });
  return <UserInfoView {...viewProps} />;
};

export default UserInfo;