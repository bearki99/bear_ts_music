import React, { ReactNode } from "react";
import { memo } from "react";
import { WaitWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Wait: React.FC<IProps> = () => {
  return <WaitWrapper>
    aaaa
    <div className="content">
        <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9765284460/1b1d/9f46/2fa3/2d5d07bb5fcf8c24c1ad788c923ef313.png" alt="" />
        <h4>扫描成功</h4>
        <span>请在手机上确认登录</span>
    </div>
  </WaitWrapper>;
};
export default memo(Wait);
Wait.displayName = "Wait";
