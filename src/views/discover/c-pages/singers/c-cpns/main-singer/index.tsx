import React, { ReactNode } from "react";
import { memo } from "react";
import { MainSingerWrapper } from "./style";
interface IProps {
  children?: ReactNode;
}

const MainSinger: React.FC<IProps> = () => {
  return <MainSingerWrapper>
    
  </MainSingerWrapper>;
};
export default memo(MainSinger);
MainSinger.displayName = "MainSinger";
