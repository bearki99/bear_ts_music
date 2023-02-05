import { getloginStatus } from '@/utils/getLoginStatus';
import React, { ReactNode } from 'react';
import { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}

const AuthToken: React.FC<IProps> = (props) => {
  useEffect(() => {
    getloginStatus();
  }, []);
  return <>{props.children}</>;
};
export default memo(AuthToken);
AuthToken.displayName = 'AuthToken';
