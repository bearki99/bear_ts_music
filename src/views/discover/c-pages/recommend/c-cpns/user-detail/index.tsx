import React, { ReactNode } from "react";
import { memo } from "react";
import { UserDetailWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  id?: number;
}

const UserDetail: React.FC<IProps> = (props) => {
    const {id} = props;
  return <UserDetailWrapper>
    {id}
  </UserDetailWrapper>;
};
export default memo(UserDetail);
UserDetail.displayName = "UserDetail";
