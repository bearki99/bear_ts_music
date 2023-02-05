import { getloginStatus } from "@/utils/getLoginStatus";
import React, { ReactNode } from "react";
import { memo, useEffect } from "react";
import { MineWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const Mine: React.FC<IProps> = () => {
  useEffect(()=>{
    getloginStatus();
  }, []);
  return <MineWrapper>
    <div className="content wrap-v2 wrap-bg">
      <div className="left">
        left
      </div>
      <div className="right">right</div>
    </div>
  </MineWrapper>;
};
export default memo(Mine);
