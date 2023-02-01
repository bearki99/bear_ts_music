import React, { ReactNode, useState } from "react";
import { memo } from "react";
import { LoginWrapper } from "./style";
import MyLogin from "@/components/login";
interface IProps {
  children?: ReactNode;
}

const Login: React.FC<IProps> = () => {
  const [show, setShow] = useState(false);
  function handleHidden() {
    setShow(false);
  }
  return (
    <LoginWrapper className="sprite-bg">
      <div className="discribe">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>
      <div className="sprite-bg btn" onClick={() => setShow(true)}>
        用户登录
      </div>
      {show && <MyLogin show={show} handleHidden={handleHidden} />}
    </LoginWrapper>
  );
};
export default memo(Login);
