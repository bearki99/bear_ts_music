import { useBearSelector } from "@/store";
import { transformUrl } from "@/utils/transformUrl";
import React, { ReactNode } from "react";
import { memo } from "react";
import { UserDetailWrapper } from "./style";
interface IProps {
  children?: ReactNode;
  id?: number;
}

const UserDetail: React.FC<IProps> = (props) => {
  const { loginData } = useBearSelector((state) => ({
    loginData: state.login.loginData,
  }));
  
  const initialName = "bear";
  const initialImg = "http://p2.music.126.net/KJGiLgsOu3-O-oAvkkK1mA==/109951163288303355.jpg?param=80y80";

  const { id } = props;
  const myName = loginData && loginData.nickname || initialName;
  const avatarUrl = loginData && loginData.avatarUrl;
  const wantUrl = avatarUrl && transformUrl(avatarUrl, 80, 80) ||initialImg;
  return (
    <UserDetailWrapper>
      <div className="content sprite-bg">
        <div className="top">欢迎登录</div>
        <div className="main-content">
          <a className="left" href={"/#/user/home?id=" + id}>
            <img src={wantUrl} alt="" />
          </a>
          <div className="right">
            <a className="name" href={"/#/user/home?id=" + id}>
              {myName}
            </a>
          </div>
        </div>
      </div>
    </UserDetailWrapper>
  );
};
export default memo(UserDetail);
UserDetail.displayName = "UserDetail";
