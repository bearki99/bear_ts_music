import React, { ReactNode } from "react";
import { memo } from "react";
import { LoginWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Login: React.FC<IProps> = () => {
  return (
    <LoginWrapper className="sprite-bg">
      <div className="discribe">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="sprite-bg btn">
        用户登录
      </div>
    </LoginWrapper>
  );
};
export default memo(Login);
