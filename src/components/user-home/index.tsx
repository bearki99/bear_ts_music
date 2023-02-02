import React, { ReactNode } from "react";
import { memo } from "react";
import { UserHomeWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const UserHome: React.FC<IProps> = () => {
  return <UserHomeWrapper>
    
  </UserHomeWrapper>;
};
export default memo(UserHome);
UserHome.displayName = "UserHome";
