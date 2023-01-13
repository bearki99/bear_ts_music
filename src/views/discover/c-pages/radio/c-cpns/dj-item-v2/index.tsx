import React, { ReactNode } from "react";
import { memo } from "react";
import { DJItemV2Wrapper } from "./style";
interface IProps {
  children?: ReactNode;
  index: number;
  infoData: any;
}

const DJItemV2: React.FC<IProps> = (props) => {
  return <DJItemV2Wrapper>
    dj-item-v2
  </DJItemV2Wrapper>;
};
export default memo(DJItemV2);
